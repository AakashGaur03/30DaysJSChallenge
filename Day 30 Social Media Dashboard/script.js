document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const authSection = document.getElementById('auth-section');
    const postCreationSection = document.getElementById('post-creation-section');
    const postsFeed = document.getElementById('posts-feed');
    const notifications = [];

    // WebSocket client setup
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', () => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            socket.send(JSON.stringify({
                type: 'register',
                username: loggedInUser.username
            }));
        }
    });

    socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'notification') {
            displayNotification(data.notification);
        }
    });

    // User registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('User registered successfully!');
        registerForm.reset();
    });

    // User login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(storedUser));
            alert('Login successful!');
            authSection.style.display = 'none';
            loadUserProfile(storedUser);
            postCreationSection.style.display = 'block';
            loadPosts();
        } else {
            alert('Invalid email or password');
        }
    });

    // Load user profile if already logged in
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        authSection.style.display = 'none';
        loadUserProfile(loggedInUser);
        postCreationSection.style.display = 'block';
        loadPosts();
    }

    function loadUserProfile(user) {
        const sidebar = document.getElementById('sidebar');
        const profileSection = document.getElementById('profile-update-section');

        sidebar.innerHTML = `
            <h2>${user.username}'s Profile</h2>
            <p>Email: ${user.email}</p>
            <button id="edit-profile-btn">Edit Profile</button>
            <button id="logout-btn">Logout</button>
        `;

        document.getElementById('edit-profile-btn').addEventListener('click', () => {
            profileSection.style.display = 'block';
            document.getElementById('update-username').value = user.username;
            document.getElementById('update-email').value = user.email;
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
            sessionStorage.removeItem('loggedInUser');
            window.location.reload();
        });

        document.getElementById('profile-update-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const updatedUsername = document.getElementById('update-username').value;
            const updatedEmail = document.getElementById('update-email').value;

            const updatedUser = { ...user, username: updatedUsername, email: updatedEmail };
            sessionStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
            localStorage.setItem('user', JSON.stringify(updatedUser));
            alert('Profile updated successfully!');
            profileSection.style.display = 'none';
            loadUserProfile(updatedUser);
        });
    }

    // Post creation
    document.getElementById('post-creation-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const postContent = document.getElementById('post-content').value;
        const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

        const post = {
            id: Date.now(),
            username: user.username,
            content: postContent,
            likes: 0,
            comments: []
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        document.getElementById('post-content').value = '';
        loadPosts();
    });

    // Load posts
    function loadPosts() {
        postsFeed.innerHTML = '';
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h3>${post.username}</h3>
                <p>${post.content}</p>
                <div class="post-actions">
                    <button class="like-btn">Like (${post.likes})</button>
                    <button class="comment-btn">Comment (${post.comments.length})</button>
                </div>
                <div class="comments-section">
                    <ul>
                        ${post.comments.map(comment => `<li>${comment}</li>`).join('')}
                    </ul>
                    <input type="text" class="comment-input" placeholder="Add a comment...">
                </div>
            `;

            postElement.querySelector('.like-btn').addEventListener('click', () => {
                post.likes++;
                localStorage.setItem('posts', JSON.stringify(posts));
                loadPosts();
                sendNotification(post.username, `${loggedInUser.username} liked your post.`);
            });

            postElement.querySelector('.comment-btn').addEventListener('click', () => {
                const commentInput = postElement.querySelector('.comment-input');
                const comment = commentInput.value.trim();
                if (comment) {
                    post.comments.push(comment);
                    localStorage.setItem('posts', JSON.stringify(posts));
                    loadPosts();
                    sendNotification(post.username, `${loggedInUser.username} commented on your post.`);
                }
            });

            postsFeed.appendChild(postElement);
        });
    }

    // Send notification via WebSocket
    function sendNotification(recipient, message) {
        socket.send(JSON.stringify({
            type: 'notification',
            recipient,
            notification: message
        }));
    }

    // Display notifications
    function displayNotification(notification) {
        const notificationElement = document.createElement('div');
        notificationElement.classList.add('notifications');
        notificationElement.innerText = notification;

        document.getElementById('sidebar').appendChild(notificationElement);
    }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        sessionStorage.setItem('loggedInUser', username);
        document.getElementById('user-name').innerText = username;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    }
});

window.onload = function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-name').innerText = loggedInUser;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    }
};

let posts = [];

document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').files[0];
    const username = sessionStorage.getItem('loggedInUser');
    const timestamp = new Date().toLocaleString();

    let post = {
        text: postText,
        image: postImage ? URL.createObjectURL(postImage) : '',
        username: username,
        timestamp: timestamp,
        likes: 0,
        comments: []
    };

    posts.push(post);
    displayPosts();
    document.getElementById('post-form').reset();
});

function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';

    posts.forEach((post, index) => {
        let postElement = `
            <div class="post">
                <h3>${post.username}</h3>
                <p>${post.timestamp}</p>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-actions">
                    <button onclick="likePost(${index})">Like (${post.likes})</button>
                    <button onclick="commentOnPost(${index})">Comment</button>
                </div>
                <div id="comments-${index}">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                </div>
            </div>
        `;
        postFeed.innerHTML += postElement;
    });
}

function likePost(index) {
    posts[index].likes += 1;
    displayPosts();
}

function commentOnPost(index) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        posts[index].comments.push(comment);
        displayPosts();
    }
}

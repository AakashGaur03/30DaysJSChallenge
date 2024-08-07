let username;
    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('message');
    const sendButton = document.getElementById('send');
    const usernameInput = document.getElementById('username');
    const joinButton = document.getElementById('join');

    const socket = new WebSocket('ws://localhost:8080');

    joinButton.addEventListener('click', () => {
      username = usernameInput.value;
      if (username) {
        document.getElementById('auth').style.display = 'none';
        chat.style.display = 'block';
        messageInput.style.display = 'block';
        sendButton.style.display = 'block';
      }
    });

    socket.addEventListener('open', (event) => {
      console.log('Connected to WebSocket server');
    });

    socket.addEventListener('message', (event) => {
      const reader = new FileReader();
      reader.onload = function() {
        const messageData = JSON.parse(reader.result);
        const messageElement = document.createElement('div');
        messageElement.textContent = `${messageData.username}: ${messageData.text}`;
        messageElement.className = 'message ' + (messageData.username === username ? 'my-message' : 'other-message');
        chat.appendChild(messageElement);
        chat.scrollTop = chat.scrollHeight; // Auto-scroll to the latest message
      };
      reader.readAsText(event.data);
    });

    const sendMessage = () => {
      const message = messageInput.value;
      if (message) {
        const messageData = {
          username: username,
          text: message
        };
        socket.send(JSON.stringify(messageData));
        messageInput.value = '';
      }
    };

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
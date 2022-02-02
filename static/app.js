// Connect to Socket.io
const socket = io();

// Get references to the Chat Form and Input
const chat = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Add a submit event for the Form
chat.addEventListener('submit', e => {
    // Cancel the event in case it can be cancelled
    e.preventDefault();

    // Send through Socket.io the Input value through chat identifier
    socket.emit('chat', chatInput.value);

    chatInput.value = '';
});

const chatDump = document.querySelector('.chat-dump')

const render = ({message, id}) => {
    const div = document.createElement('div')
    div.classList.add('chat-message')
    if (id === socket.id) { // broadcasted chat is from this client
        div.classList.add('chat-message--user')
    }
    div.innerText = message // insert content of message into div
    chatDump.appendChild(div)
};

socket.on('chat', data => {
    console.log('broadcast from server: ', data.message);
    render(data);
});
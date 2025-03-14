// js/modules/chatbot.js

import { CONFIG } from './config.js';

/**
 * Portfolio Chatbot with API Integration
 */

export function initializeChatbot() {
    // First, add the chatbot HTML to the page
    const chatbotHTML = `
    <!-- Chatbot -->
    <div id="chat-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/134/134914.png" alt="Chat Icon">
    </div>

    <div id="chat-container">
        <div id="chat-header">
            <span>Aksh-AI 2.0</span>
            <div class="header-controls">
                <button class="control-button" id="minimize-button" title="Minimize">—</button>
                <button class="control-button" id="close-button" title="Close">×</button>
            </div>
        </div>

        <div id="chat-messages">
            <div class="message bot-message">
                ${CONFIG.CHATBOT.INITIAL_MESSAGE}
                <span class="timestamp">${getCurrentTime()}</span>
            </div>
            
            <div class="suggestion-container">
                ${CONFIG.CHATBOT.SUGGESTIONS.map(suggestion => 
                    `<div class="suggestion-pill">${suggestion}</div>`
                ).join('')}
            </div>

            <div class="typing-indicator" id="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="chat-input">
            <input type="text" id="user-input" placeholder="Type a message...">
            <button id="send-button" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    </div>
    `;
    
    // Create a div to hold the chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.innerHTML = chatbotHTML;
    document.body.appendChild(chatbotContainer);
    
    // Now initialize the chatbot functionality
    const chatLogo = document.getElementById('chat-logo');
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const minimizeButton = document.getElementById('minimize-button');
    const closeButton = document.getElementById('close-button');
    const typingIndicator = document.getElementById('typing-indicator');

    // Session management
    let sessionId = localStorage.getItem('chatSessionId');
    if (!sessionId) {
        // Generate a random session ID if none exists
        sessionId = 'session_' + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('chatSessionId', sessionId);
    }

    // Chat UI Visibility - default to hidden
    chatContainer.style.display = 'flex';

    // Toggle Chat UI Visibility
    chatLogo.addEventListener('click', () => {
        if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
            chatContainer.style.display = 'flex'; // Show chat UI
        } else {
            chatContainer.style.display = 'none'; // Hide chat UI
        }
    });

    // Minimize button functionality
    minimizeButton.addEventListener('click', () => {
        chatContainer.style.display = 'none'; // Hide chat UI
    });

    // Close button functionality
    closeButton.addEventListener('click', () => {
        chatContainer.style.display = 'none'; // Hide chat UI
    });

    // Function to add a message to the chat
    function addMessage(message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        
        // Add timestamp
        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        timestamp.textContent = getCurrentTime();
        messageElement.appendChild(timestamp);
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
    }

    // Get current time in 12-hour format
    function getCurrentTime() {
        const now = new Date();
        return `Today, ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }

    // Enable/disable send button based on input field
    userInput.addEventListener('input', () => {
        sendButton.disabled = userInput.value.trim() === '';
    });

    // Function to send a message to the API server
    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return; // Ignore empty messages

        // Add the user's message to the chat
        addMessage(message, true);
        userInput.value = ''; // Clear the input field
        sendButton.disabled = true;

        // Show typing indicator
        typingIndicator.style.display = 'block';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Send request to your Vercel API endpoint
            const response = await fetch(CONFIG.API.CHAT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: message,
                    sessionId: sessionId
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Update sessionId if returned from server
            if (data.sessionId) {
                sessionId = data.sessionId;
                localStorage.setItem('chatSessionId', sessionId);
            }
            
            // Hide typing indicator
            typingIndicator.style.display = 'none';
            
            // Add the bot's message to the chat
            addMessage(data.text, false);
        } catch (error) {
            console.error('Error fetching response:', error);
            typingIndicator.style.display = 'none';
            addMessage(CONFIG.API.FALLBACK_RESPONSES.ERROR, false);
        }
    }

    // Event Listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Handle suggestion pills
    document.querySelectorAll('.suggestion-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            userInput.value = pill.textContent;
            sendButton.disabled = false;
            sendMessage();
        });
    });
}

export default initializeChatbot;

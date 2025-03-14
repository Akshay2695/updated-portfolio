// // js/app.js

// document.addEventListener('DOMContentLoaded', () => {
//     function loadContent(url, containerId) {
//         return fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = data;

//                 let content;

//                 if (url === 'header.html' || url === 'footer.html') {
//                     content = tempDiv.querySelector('.container');
//                     if (content) {
//                         document.getElementById(containerId).innerHTML = content.outerHTML;
//                     } else {
//                         console.error('No .container found in', url);
//                         document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
//                     }
//                 } else {
//                     content = tempDiv.querySelector('.container');
//                     if (content) {
//                         const sectionId = url.replace('.html', '').replace('-section', '');
//                         document.getElementById(containerId).innerHTML = `<section id="${sectionId}">${content.outerHTML}</section>`;
//                     } else {
//                         console.error('No .container found in', url);
//                         document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
//                     }
//                 }
//             })
//             .catch(error => {
//                 console.error('Error loading content:', url, error);
//                 document.getElementById(containerId).innerHTML = '<p>Error loading content. Please try again.</p>';
//             });
//     }

//     const loadHeader = loadContent('header.html', 'header-container');
//     const loadHero = loadContent('hero.html', 'hero-section');
//     const loadAbout = loadContent('about.html', 'about-section');
//     const loadProjects = loadContent('projects.html', 'projects-section');
//     const loadExperience = loadContent('experience.html', 'experience-section');
//     const loadContact = loadContent('contact.html', 'contact-section');
//     const loadFooter = loadContent('footer.html', 'footer-container');

//     Promise.all([loadHeader, loadHero, loadAbout, loadProjects, loadExperience, loadContact, loadFooter])
//         .then(() => {
//             const mobileMenu = document.querySelector('.mobile-menu');
//             const navLinks = document.querySelector('.nav-links');

//             if (mobileMenu && navLinks) {
//                 mobileMenu.addEventListener('click', () => {
//                     window.toggleMobileMenu(navLinks);
//                 });

//                 const navItems = document.querySelectorAll('.nav-links li a');
//                 navItems.forEach(item => {
//                     item.addEventListener('click', () => {
//                         window.closeMobileMenu(navLinks);
//                     });
//                 });
//             } else {
//                 console.warn('Mobile menu elements not found after header load.');
//             }
//             window.enableSmoothScroll();
//             window.setCurrentYear();
//         })
//         .catch(err => console.error("Error during initial loading:", err));
// });



// document.addEventListener('DOMContentLoaded', () => {
//     function loadContent(url, containerId) {
//         return fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = data;

//                 let content;

//                 if (url === 'header.html' || url === 'footer.html') {
//                     content = tempDiv.querySelector('.container');
//                     if (content) {
//                         document.getElementById(containerId).innerHTML = content.outerHTML;
//                     } else {
//                         console.error('No .container found in', url);
//                         document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
//                     }
//                 } else {
//                     content = tempDiv.querySelector('.container');
//                     if (content) {
//                         const sectionId = url.replace('.html', '').replace('-section', '');
//                         document.getElementById(containerId).innerHTML = `<section id="${sectionId}">${content.outerHTML}</section>`;
//                     } else {
//                         console.error('No .container found in', url);
//                         document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
//                     }
//                 }
//             })
//             .catch(error => {
//                 console.error('Error loading content:', url, error);
//                 document.getElementById(containerId).innerHTML = '<p>Error loading content. Please try again.</p>';
//             });
//     }

//     const loadHeader = loadContent('header.html', 'header-container');
//     const loadHero = loadContent('hero.html', 'hero-section');
//     const loadAbout = loadContent('about.html', 'about-section');
//     const loadProjects = loadContent('projects.html', 'projects-section');
//     const loadExperience = loadContent('experience.html', 'experience-section');
//     const loadContact = loadContent('contact.html', 'contact-section');
//     const loadFooter = loadContent('footer.html', 'footer-container');

//     Promise.all([loadHeader, loadHero, loadAbout, loadProjects, loadExperience, loadContact, loadFooter])
//         .then(() => {
//             const mobileMenu = document.querySelector('.mobile-menu');
//             const navLinks = document.querySelector('.nav-links');

//             if (mobileMenu && navLinks) {
//                 mobileMenu.addEventListener('click', () => {
//                     window.toggleMobileMenu(navLinks);
//                 });

//                 const navItems = document.querySelectorAll('.nav-links li a');
//                 navItems.forEach(item => {
//                     item.addEventListener('click', () => {
//                         window.closeMobileMenu(navLinks);
//                     });
//                 });
//             } else {
//                 console.warn('Mobile menu elements not found after header load.');
//             }
//             window.enableSmoothScroll();
//             window.setCurrentYear();
            
//             // Add chatbot functionality after everything else is loaded
//             initializeChatbot();
//         })
//         .catch(err => console.error("Error during initial loading:", err));
// });

// // Chatbot initialization function
// function initializeChatbot() {
//     // First, add the chatbot HTML to the page
//     const chatbotHTML = `
//     <!-- Chatbot -->
//     <div id="chat-logo">
//         <img src="https://cdn-icons-png.flaticon.com/512/134/134914.png" alt="Chat Icon">
//     </div>

//     <div id="chat-container">
//         <div id="chat-header">
//             <span>Portfolio Chatbot</span>
//             <div class="header-controls">
//                 <button class="control-button" id="minimize-button" title="Minimize">—</button>
//                 <button class="control-button" id="close-button" title="Close">×</button>
//             </div>
//         </div>

//         <div id="chat-messages">
//             <div class="message bot-message">
//                 Hi! I'm your portfolio chatbot. How can I help you today?
//                 <span class="timestamp">Today, 12:00 PM</span>
//             </div>
            
//             <div class="suggestion-container">
//                 <div class="suggestion-pill">Project details</div>
//                 <div class="suggestion-pill">Contact information</div>
//                 <div class="suggestion-pill">Skills</div>
//             </div>

//             <div class="typing-indicator" id="typing-indicator">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//         </div>

//         <div id="chat-input">
//             <input type="text" id="user-input" placeholder="Type a message...">
//             <button id="send-button" disabled>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                     <line x1="22" y1="2" x2="11" y2="13"></line>
//                     <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//                 </svg>
//             </button>
//         </div>
//     </div>
//     `;
    
//     // Create a div to hold the chatbot
//     const chatbotContainer = document.createElement('div');
//     chatbotContainer.innerHTML = chatbotHTML;
//     document.body.appendChild(chatbotContainer);
    
//     // Now initialize the chatbot functionality
//     const chatLogo = document.getElementById('chat-logo');
//     const chatContainer = document.getElementById('chat-container');
//     const chatMessages = document.getElementById('chat-messages');
//     const userInput = document.getElementById('user-input');
//     const sendButton = document.getElementById('send-button');
//     const minimizeButton = document.getElementById('minimize-button');
//     const closeButton = document.getElementById('close-button');
//     const typingIndicator = document.getElementById('typing-indicator');

//     // Toggle Chat UI Visibility
//     chatLogo.addEventListener('click', () => {
//         if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
//             chatContainer.style.display = 'flex'; // Show chat UI
//         } else {
//             chatContainer.style.display = 'none'; // Hide chat UI
//         }
//     });

//     // Minimize button functionality
//     minimizeButton.addEventListener('click', () => {
//         chatContainer.style.display = 'none'; // Hide chat UI
//     });

//     // Close button functionality
//     closeButton.addEventListener('click', () => {
//         chatContainer.style.display = 'none'; // Hide chat UI
//     });

//     // Function to add a message to the chat
//     function addMessage(message, isUser) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
//         messageElement.textContent = message;
        
//         // Add timestamp
//         const timestamp = document.createElement('span');
//         timestamp.classList.add('timestamp');
//         timestamp.textContent = getCurrentTime();
//         messageElement.appendChild(timestamp);
        
//         chatMessages.appendChild(messageElement);
//         chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
//     }

//     // Get current time in 12-hour format
//     function getCurrentTime() {
//         const now = new Date();
//         return `Today, ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
//     }

//     // Enable/disable send button based on input field
//     userInput.addEventListener('input', () => {
//         sendButton.disabled = userInput.value.trim() === '';
//     });

//     // Function to send a message to the proxy server
//     async function sendMessage() {
//         const message = userInput.value.trim();
//         if (!message) return; // Ignore empty messages

//         // Add the user's message to the chat
//         addMessage(message, true);
//         userInput.value = ''; // Clear the input field
//         sendButton.disabled = true;

//         // Show typing indicator
//         typingIndicator.style.display = 'block';
//         chatMessages.scrollTop = chatMessages.scrollHeight;

//         try {
//             // Simulate network delay for demo purposes
//             await new Promise(resolve => setTimeout(resolve, 1500));
            
//             // For demo purposes - replace with actual API call
//             const botResponse = getBotResponse(message);
            
//             // Hide typing indicator
//             typingIndicator.style.display = 'none';
            
//             // Add the bot's message to the chat
//             addMessage(botResponse, false);
//         } catch (error) {
//             console.error('Error fetching response:', error);
//             typingIndicator.style.display = 'none';
//             addMessage('Error: Unable to fetch response. Please try again later.', false);
//         }
//     }

//     // Simple response function for demo purposes
//     function getBotResponse(message) {
//         message = message.toLowerCase();
        
//         if (message.includes('project') || message.includes('projects')) {
//             return "I've worked on several projects including web development, mobile apps, and data analysis. You can check them out in the Projects section of my portfolio.";
//         } else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
//             return "You can reach me through the Contact form on this website, or directly at your@email.com.";
//         } else if (message.includes('skills') || message.includes('experience')) {
//             return "My skills include JavaScript, HTML/CSS, React, Node.js, and more. Check out the Experience section for details about my work history.";
//         } else if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
//             return "Hello there! How can I help you with information about my portfolio?";
//         } else {
//             return "Thanks for your message. Feel free to explore my portfolio or ask specific questions about my projects, skills, or contact information.";
//         }
//     }

//     // Event Listeners
//     sendButton.addEventListener('click', sendMessage);
//     userInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             sendMessage();
//         }
//     });

//     // Handle suggestion pills
//     document.querySelectorAll('.suggestion-pill').forEach(pill => {
//         pill.addEventListener('click', () => {
//             userInput.value = pill.textContent;
//             sendButton.disabled = false;
//             sendMessage();
//         });
//     });
// }


// document.addEventListener('DOMContentLoaded', () => {
//     function loadContent(url, containerId) {
//         return fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = data;

//                 let content;

//                 if (url === 'header.html' || url === 'footer.html') {
//                     content = tempDiv.querySelector('.container');
//                     if (content) {
//                         document.getElementById(containerId).innerHTML = content.outerHTML;
//                     } else {
//                         console.error('No .container found in', url);
//                         document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
//                     }
//                 } else {
//                     content = tempDiv.querySelector('.container');
//                     if (content) {
//                         const sectionId = url.replace('.html', '').replace('-section', '');
//                         document.getElementById(containerId).innerHTML = `<section id="${sectionId}">${content.outerHTML}</section>`;
//                     } else {
//                         console.error('No .container found in', url);
//                         document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
//                     }
//                 }
//             })
//             .catch(error => {
//                 console.error('Error loading content:', url, error);
//                 document.getElementById(containerId).innerHTML = '<p>Error loading content. Please try again.</p>';
//             });
//     }

//     const loadHeader = loadContent('header.html', 'header-container');
//     const loadHero = loadContent('hero.html', 'hero-section');
//     const loadAbout = loadContent('about.html', 'about-section');
//     const loadProjects = loadContent('projects.html', 'projects-section');
//     const loadExperience = loadContent('experience.html', 'experience-section');
//     const loadContact = loadContent('contact.html', 'contact-section');
//     const loadFooter = loadContent('footer.html', 'footer-container');

//     Promise.all([loadHeader, loadHero, loadAbout, loadProjects, loadExperience, loadContact, loadFooter])
//         .then(() => {
//             const mobileMenu = document.querySelector('.mobile-menu');
//             const navLinks = document.querySelector('.nav-links');

//             if (mobileMenu && navLinks) {
//                 mobileMenu.addEventListener('click', () => {
//                     window.toggleMobileMenu(navLinks);
//                 });

//                 const navItems = document.querySelectorAll('.nav-links li a');
//                 navItems.forEach(item => {
//                     item.addEventListener('click', () => {
//                         window.closeMobileMenu(navLinks);
//                     });
//                 });
//             } else {
//                 console.warn('Mobile menu elements not found after header load.');
//             }
//             window.enableSmoothScroll();
//             window.setCurrentYear();
            
//             // Add chatbot functionality after everything else is loaded
//             initializeChatbot();
//         })
//         .catch(err => console.error("Error during initial loading:", err));
// });

// // Chatbot initialization function
// function initializeChatbot() {
//     // First, add the chatbot HTML to the page
//     const chatbotHTML = `
//     <!-- Chatbot -->
//     <div id="chat-logo">
//         <img src="https://cdn-icons-png.flaticon.com/512/134/134914.png" alt="Chat Icon">
//     </div>

//     <div id="chat-container">
//         <div id="chat-header">
//             <span>Portfolio Chatbot</span>
//             <div class="header-controls">
//                 <button class="control-button" id="minimize-button" title="Minimize">—</button>
//                 <button class="control-button" id="close-button" title="Close">×</button>
//             </div>
//         </div>

//         <div id="chat-messages">
//             <div class="message bot-message">
//                 Hi! I'm your portfolio chatbot. How can I help you today?
//                 <span class="timestamp">Today, 12:00 PM</span>
//             </div>
            
//             <div class="suggestion-container">
//                 <div class="suggestion-pill">Project details</div>
//                 <div class="suggestion-pill">Contact information</div>
//                 <div class="suggestion-pill">Skills</div>
//             </div>

//             <div class="typing-indicator" id="typing-indicator">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//         </div>

//         <div id="chat-input">
//             <input type="text" id="user-input" placeholder="Type a message...">
//             <button id="send-button" disabled>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                     <line x1="22" y1="2" x2="11" y2="13"></line>
//                     <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//                 </svg>
//             </button>
//         </div>
//     </div>
//     `;
    
//     // Create a div to hold the chatbot
//     const chatbotContainer = document.createElement('div');
//     chatbotContainer.innerHTML = chatbotHTML;
//     document.body.appendChild(chatbotContainer);
    
//     // Now initialize the chatbot functionality
//     const chatLogo = document.getElementById('chat-logo');
//     const chatContainer = document.getElementById('chat-container');
//     const chatMessages = document.getElementById('chat-messages');
//     const userInput = document.getElementById('user-input');
//     const sendButton = document.getElementById('send-button');
//     const minimizeButton = document.getElementById('minimize-button');
//     const closeButton = document.getElementById('close-button');
//     const typingIndicator = document.getElementById('typing-indicator');

//     // Automatically show the chat when the page loads
//     chatContainer.style.display = 'flex';

//     // Toggle Chat UI Visibility
//     chatLogo.addEventListener('click', () => {
//         if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
//             chatContainer.style.display = 'flex'; // Show chat UI
//         } else {
//             chatContainer.style.display = 'none'; // Hide chat UI
//         }
//     });

//     // Minimize button functionality
//     minimizeButton.addEventListener('click', () => {
//         chatContainer.style.display = 'none'; // Hide chat UI
//     });

//     // Close button functionality
//     closeButton.addEventListener('click', () => {
//         chatContainer.style.display = 'none'; // Hide chat UI
//     });

//     // Function to add a message to the chat
//     function addMessage(message, isUser) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
//         messageElement.textContent = message;
        
//         // Add timestamp
//         const timestamp = document.createElement('span');
//         timestamp.classList.add('timestamp');
//         timestamp.textContent = getCurrentTime();
//         messageElement.appendChild(timestamp);
        
//         chatMessages.appendChild(messageElement);
//         chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
//     }

//     // Get current time in 12-hour format
//     function getCurrentTime() {
//         const now = new Date();
//         return `Today, ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
//     }

//     // Enable/disable send button based on input field
//     userInput.addEventListener('input', () => {
//         sendButton.disabled = userInput.value.trim() === '';
//     });

//     // Function to send a message to the proxy server
//     async function sendMessage() {
//         const message = userInput.value.trim();
//         if (!message) return; // Ignore empty messages

//         // Add the user's message to the chat
//         addMessage(message, true);
//         userInput.value = ''; // Clear the input field
//         sendButton.disabled = true;

//         // Show typing indicator
//         typingIndicator.style.display = 'block';
//         chatMessages.scrollTop = chatMessages.scrollHeight;

//         try {
//             // Simulate network delay for demo purposes
//             await new Promise(resolve => setTimeout(resolve, 1500));
            
//             // For demo purposes - replace with actual API call
//             const botResponse = getBotResponse(message);
            
//             // Hide typing indicator
//             typingIndicator.style.display = 'none';
            
//             // Add the bot's message to the chat
//             addMessage(botResponse, false);
//         } catch (error) {
//             console.error('Error fetching response:', error);
//             typingIndicator.style.display = 'none';
//             addMessage('Error: Unable to fetch response. Please try again later.', false);
//         }
//     }

//     // Simple response function for demo purposes
//     function getBotResponse(message) {
//         message = message.toLowerCase();
        
//         if (message.includes('project') || message.includes('projects')) {
//             return "I've worked on several projects including web development, mobile apps, and data analysis. You can check them out in the Projects section of my portfolio.";
//         } else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
//             return "You can reach me through the Contact form on this website, or directly at your@email.com.";
//         } else if (message.includes('skills') || message.includes('experience')) {
//             return "My skills include JavaScript, HTML/CSS, React, Node.js, and more. Check out the Experience section for details about my work history.";
//         } else if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
//             return "Hello there! How can I help you with information about my portfolio?";
//         } else {
//             return "Thanks for your message. Feel free to explore my portfolio or ask specific questions about my projects, skills, or contact information.";
//         }
//     }

//     // Event Listeners
//     sendButton.addEventListener('click', sendMessage);
//     userInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             sendMessage();
//         }
//     });

//     // Handle suggestion pills
//     document.querySelectorAll('.suggestion-pill').forEach(pill => {
//         pill.addEventListener('click', () => {
//             userInput.value = pill.textContent;
//             sendButton.disabled = false;
//             sendMessage();
//         });
//     });
// }



// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    function loadContent(url, containerId) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                let content;

                if (url === 'header.html' || url === 'footer.html') {
                    content = tempDiv.querySelector('.container');
                    if (content) {
                        document.getElementById(containerId).innerHTML = content.outerHTML;
                    } else {
                        console.error('No .container found in', url);
                        document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
                    }
                } else {
                    content = tempDiv.querySelector('.container');
                    if (content) {
                        const sectionId = url.replace('.html', '').replace('-section', '');
                        document.getElementById(containerId).innerHTML = `<section id="${sectionId}">${content.outerHTML}</section>`;
                    } else {
                        console.error('No .container found in', url);
                        document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
                    }
                }
            })
            .catch(error => {
                console.error('Error loading content:', url, error);
                document.getElementById(containerId).innerHTML = '<p>Error loading content. Please try again.</p>';
            });
    }

    const loadHeader = loadContent('header.html', 'header-container');
    // const loadHero = loadContent('hero.html', 'hero-section');
    const loadAbout = loadContent('about.html', 'about-section');
    const loadProjects = loadContent('projects.html', 'projects-section');
    const loadExperience = loadContent('experience.html', 'experience-section');
    const loadContact = loadContent('contact.html', 'contact-section');
    const loadFooter = loadContent('footer.html', 'footer-container');

    // Promise.all([loadHeader, loadHero, loadAbout, loadProjects, loadExperience, loadContact, loadFooter])
    Promise.all([loadHeader, loadAbout, loadProjects, loadExperience, loadContact, loadFooter])
        .then(() => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');

            if (mobileMenu && navLinks) {
                mobileMenu.addEventListener('click', () => {
                    window.toggleMobileMenu(navLinks);
                });

                const navItems = document.querySelectorAll('.nav-links li a');
                navItems.forEach(item => {
                    item.addEventListener('click', () => {
                        window.closeMobileMenu(navLinks);
                    });
                });
            } else {
                console.warn('Mobile menu elements not found after header load.');
            }
            window.enableSmoothScroll();
            window.setCurrentYear();
            
            // Import and initialize the chatbot
            import('./modules/chatbot.js')
                .then(module => {
                    module.initializeChatbot();
                })
                .catch(err => console.error("Error loading chatbot module:", err));
        })
        .catch(err => console.error("Error during initial loading:", err));
});
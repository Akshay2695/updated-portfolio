// js/modules/config.js

/**
 * Configuration settings for the portfolio application
 */

export const CONFIG = {
    // API Endpoints
    API: {
        // Replace with your actual Vercel deployment URL
        CHAT_ENDPOINT: 'https://proxy-server-chatbot.vercel.app/api/chat',
        
        // Fallback responses in case of API failure
        FALLBACK_RESPONSES: {
            ERROR: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
            DEFAULT: "Thanks for your message. I'll get back to you soon."
        }
    },
    
    // Chatbot configuration
    CHATBOT: {
        INITIAL_MESSAGE: "Hi! I'm Aksh-AI 2.0. Akshay's AI assistant. How can I help you today?",
        SUGGESTIONS: [
            "Tell me about your projects",
            "What are your skills?",
            "How can I get in touch with you?"
        ]
    }
};

export default CONFIG;
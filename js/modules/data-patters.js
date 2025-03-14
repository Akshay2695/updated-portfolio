// js/modules/data-patterns.js

/**
 * Creates data science-themed visual elements for the portfolio
 * Adds subtle data visualization patterns to backgrounds
 */
export function initializeDataPatterns() {
    // Add data patterns to each section
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Create data background container
        const dataBg = document.createElement('div');
        dataBg.classList.add('data-bg');
        
        // Add grid pattern
        const dataPattern = document.createElement('div');
        dataPattern.classList.add('data-pattern');
        dataBg.appendChild(dataPattern);
        
        // Add random data points
        addDataPoints(dataBg, 20);
        
        // Insert at beginning of section to put it behind content
        section.insertBefore(dataBg, section.firstChild);
    });
    
    // Add special data viz effect to the skills section
    addSkillsDataEffect();
    
    // Categorize skills for visual grouping
    categorizeSkills();
}

// Add random data visualization points
function addDataPoints(container, count) {
    for (let i = 0; i < count; i++) {
        const point = document.createElement('div');
        point.classList.add('data-point');
        
        // Random size between 4px and 20px
        const size = Math.floor(Math.random() * 16) + 4;
        point.style.width = `${size}px`;
        point.style.height = `${size}px`;
        
        // Random position
        const posX = Math.floor(Math.random() * 100);
        const posY = Math.floor(Math.random() * 100);
        point.style.left = `${posX}%`;
        point.style.top = `${posY}%`;
        
        // Random opacity
        const opacity = (Math.random() * 0.1) + 0.02;
        point.style.opacity = opacity;
        
        // Either circle or square
        if (Math.random() > 0.7) {
            point.style.borderRadius = '2px';
        } else {
            point.style.borderRadius = '50%';
        }
        
        // Random background color from theme
        const colors = [
            'var(--secondary-color)',
            'var(--tertiary-color)',
            'var(--accent-color)'
        ];
        const colorIndex = Math.floor(Math.random() * colors.length);
        point.style.backgroundColor = colors[colorIndex];
        
        container.appendChild(point);
    }
}

// Add visual enhancement to skills section
function addSkillsDataEffect() {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    // Create a background canvas
    const canvas = document.createElement('canvas');
    canvas.classList.add('skills-canvas');
    canvas.width = skillsSection.offsetWidth;
    canvas.height = skillsSection.offsetHeight;
    
    // Position the canvas
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.05';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    
    // Insert canvas
    skillsSection.style.position = 'relative';
    skillsSection.insertBefore(canvas, skillsSection.firstChild);
    
    // Draw data science pattern
    const ctx = canvas.getContext('2d');
    
    // Background grid
    ctx.strokeStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.lineWidth = 0.5;
    
    for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Random data nodes
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 5 + 2;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
        ctx.fill();
    }
    
    // Connect some nodes with lines
    ctx.strokeStyle = 'rgba(52, 152, 219, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 15; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

// Categorize skills for visual grouping
function categorizeSkills() {
    const skills = document.querySelectorAll('.skill');
    
    // Define skill categories
    const categories = {
        ml: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Predictive Modelling', 
             'Clustering', 'NLP', 'Transformers', 'LLM', 'TensorFlow', 'PyTorch'],
        programming: ['Python', 'SQL', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-Learn'],
        data: ['Data Visualization', 'Statistical Analysis', 'Time Series Modelling', 
               'Matplotlib', 'Tableau'],
        deployment: ['Docker', 'Kubernetes', 'MLFlow', 'Azure DevOps']
    };
    
    // Assign categories to skills
    skills.forEach(skill => {
        const skillText = skill.textContent.trim();
        
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => 
                skillText.toLowerCase().includes(keyword.toLowerCase()))) {
                skill.setAttribute('data-category', category);
                break;
            }
        }
    });
}

export default initializeDataPatterns;
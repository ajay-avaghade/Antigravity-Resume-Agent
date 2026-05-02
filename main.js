// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    
    sunIcon.style.display = isDark ? 'block' : 'none';
    moonIcon.style.display = isDark ? 'none' : 'block';
});

// Simulation Logic
const startBtn = document.getElementById('start-pipeline');
const terminal = document.getElementById('log-terminal');

const logMessages = [
    { text: "> Initializing Antigravity Orchestrator...", delay: 500 },
    { text: "> [Agent 1] HARVESTER: Scanning JD for location and cultural values...", delay: 1500 },
    { text: "> [Agent 1] SUCCESS: Location 'Bengaluru' locked. Culture 'Travel Tech' extracted.", delay: 800 },
    { text: "> [Agent 1] HARVESTER: Ingesting master data from Portfolio/LinkedIn URL...", delay: 1200 },
    { text: "> [Agent 1] SUCCESS: 14 projects and 22 core metrics ingested from website.", delay: 800 },
    { text: "> [Agent 2] SYNTHESIZER: Mapping portfolio achievements to target role...", delay: 2000 },
    { text: "> [Agent 2] KEYWORD INJECTION: 'Media Strategy', 'Ad-Tech', 'Conversion Tracking'...", delay: 1000 },
    { text: "> [Agent 3] ARCHITECT: Compiling Markdown with CSS Pagination Hygiene...", delay: 1500 },
    { text: "> [Agent 4] ENSEMBLE: Simulating Workday, Greenhouse, and Lever parsers...", delay: 1800 },
    { text: "> [Agent 4] EVALUATION: Score calculated at 98/100.", delay: 500 },
    { text: "> [Agent 6] VALIDATOR: Running 'Eye Test' on rendered layout...", delay: 1200 },
    { text: "> [Agent 6] SUCCESS: No orphaned headers detected. Hygiene score: 100/100.", delay: 800 },
    { text: "> PIPELINE COMPLETE: Resume ready for export.", delay: 500 }
];

function addLog(text) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = text;
    terminal.appendChild(entry);
    terminal.scrollTop = terminal.scrollHeight;
}

startBtn.addEventListener('click', async () => {
    const url = document.getElementById('jd-url').value;
    if (!url) {
        alert("Please enter a JD URL to start the simulation.");
        return;
    }

    startBtn.disabled = true;
    startBtn.textContent = "EXECUTING PIPELINE...";
    terminal.innerHTML = "";
    
    for (const msg of logMessages) {
        await new Promise(resolve => setTimeout(resolve, msg.delay));
        addLog(msg.text);
    }

    startBtn.disabled = false;
    startBtn.textContent = "RUN MULTI-AGENT PIPELINE";
    
    // Show success state
    addLog("\n> FINAL ATS SCORE: 98/100");
    addLog("> Click 'View Code' on GitHub to see implementation.");
});

// File Upload Area Interaction
const uploadArea = document.getElementById('upload-area');
uploadArea.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadArea.querySelector('p').textContent = `Uploaded: ${file.name}`;
            addLog(`> File Received: ${file.name}. Ingesting portfolio data...`);
        }
    };
    input.click();
});

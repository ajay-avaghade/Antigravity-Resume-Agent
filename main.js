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
const resultActions = document.getElementById('result-actions');
const downloadBtn = document.getElementById('download-pdf');
const refineBtn = document.getElementById('refine-btn');
const refineInput = document.getElementById('refine-input');

const logMessages = [
    { text: "> Initializing Antigravity Orchestrator...", delay: 500 },
    { text: "> [Agent 1] HARVESTER: Scanning JD for location and cultural values...", delay: 1200 },
    { text: "> [Agent 1] SUCCESS: Location 'Locked'. Culture 'Extracted'.", delay: 600 },
    { text: "> [Agent 1] HARVESTER: Ingesting master data from Portfolio/LinkedIn...", delay: 1000 },
    { text: "> [Agent 2] SYNTHESIZER: Mapping portfolio achievements to target role...", delay: 1800 },
    { text: "> [Agent 2] STRATEGY: Bridging gap for 'Senior' requirements using [!] Modified Fact rule...", delay: 1200 },
    { text: "> [Agent 3] ARCHITECT: Compiling Markdown with CSS Pagination Hygiene...", delay: 1200 },
    { text: "> [Agent 4] ENSEMBLE: Simulating 5 ATS parsers (Score: 98/100)...", delay: 1500 },
    { text: "> [Agent 6] VALIDATOR: Running 'Eye Test' on rendered layout...", delay: 1000 },
    { text: "> [Agent 6] SUCCESS: No orphaned headers. Interactivity verified.", delay: 600 },
    { text: "> PIPELINE COMPLETE: High-impact resume generated.", delay: 500 }
];

function addLog(text) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = text;
    terminal.appendChild(entry);
    terminal.scrollTop = terminal.scrollHeight;
}

startBtn.addEventListener('click', async () => {
    startBtn.disabled = true;
    startBtn.textContent = "EXECUTING PIPELINE...";
    terminal.innerHTML = "";
    resultActions.style.display = 'none';
    
    for (const msg of logMessages) {
        await new Promise(resolve => setTimeout(resolve, msg.delay));
        addLog(msg.text);
    }

    startBtn.disabled = false;
    startBtn.textContent = "RUN MULTI-AGENT PIPELINE";
    resultActions.style.display = 'block';
    addLog("\n> ATS SCORE: 98/100 | Visual Hygiene: PASS");
});

// Download Simulation
downloadBtn.addEventListener('click', () => {
    addLog("> Preparing PDF export...");
    setTimeout(() => {
        addLog("> SUCCESS: PDF generated with interactive hyperlinks and pagination hygiene.");
        alert("Demo: In a live environment, this would download the finalized PDF of your resume.");
    }, 1000);
});

// Refinement Simulation
refineBtn.addEventListener('click', async () => {
    const instruction = refineInput.value;
    if (!instruction) return;

    refineBtn.disabled = true;
    addLog(`\n> [LLM] REFINEMENT REQUEST: "${instruction}"`);
    refineInput.value = "";

    await new Promise(resolve => setTimeout(resolve, 1500));
    addLog("> [Agent 2] SYNTHESIZER: Adjusting narrative framing to focus on " + instruction.split(' ').slice(-2).join(' ') + "...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog("> [Agent 3] ARCHITECT: Updating Markdown draft...");
    await new Promise(resolve => setTimeout(resolve, 800));
    addLog("> [Agent 4] ENSEMBLE: Re-evaluating ATS score... (New Score: 99/100)");
    addLog("> SUCCESS: Draft refined through LLM.");
    
    refineBtn.disabled = false;
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
            addLog(`> [Agent 1] FILE INGESTION: Received ${file.name}.`);
        }
    };
    input.click();
});

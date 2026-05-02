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
const previewCard = document.getElementById('preview-card');
const resumeContent = document.getElementById('resume-content');
const downloadBtn = document.getElementById('download-pdf');
const refineBtn = document.getElementById('refine-btn');
const refineInput = document.getElementById('refine-input');

const initialResume = `
    <h3>PROFESSIONAL SUMMARY</h3>
    <p>Strategic Senior Product Manager with 4+ years of experience scaling high-volume monetization and media-centric product ecosystems. Expertise in architecting multi-tenant ad-tech infrastructure and conversion tracking capabilities that managed ₹1000+ Cr annual budgets.</p>
    
    <h3>EXPERIENCE</h3>
    <p><strong>PHONEPE</strong> | Product Manager | May 2023 – Present</p>
    <ul>
        <li>Spearheaded the end-to-end execution of a ₹100 Cr/year monetization and media technology roadmap.</li>
        <li>Reimagined the unified offer discovery engine, driving a 22% lift in transaction conversions.</li>
    </ul>
    
    <h3>SKILLS</h3>
    <p>Media Product Roadmap, Attribution & Conversion Tracking, GTM Strategy, Agile/Scrum.</p>
`;

const logMessages = [
    { text: "> Initializing Antigravity Orchestrator...", delay: 500 },
    { text: "> [Agent 1] HARVESTER: Scanning JD and Portfolio Website...", delay: 1200 },
    { text: "> [Agent 2] SYNTHESIZER: Mapping achievements to Sabre Sr. PM role...", delay: 1800 },
    { text: "> [Agent 3] ARCHITECT: Compiling Markdown with Pagination Hygiene...", delay: 1200 },
    { text: "> [Agent 4] ENSEMBLE: Simulating 5 ATS parsers (Score: 98/100)...", delay: 1500 },
    { text: "> [Agent 6] VALIDATOR: Running 'Eye Test' on rendered layout...", delay: 1000 },
    { text: "> PIPELINE COMPLETE: Resume ready for preview.", delay: 500 }
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
    previewCard.style.opacity = '0.5';
    previewCard.style.pointerEvents = 'none';
    resumeContent.innerHTML = '<p style="color: #666; font-style: italic; text-align: center;">Drafting in progress...</p>';
    
    for (const msg of logMessages) {
        await new Promise(resolve => setTimeout(resolve, msg.delay));
        addLog(msg.text);
    }

    startBtn.disabled = false;
    startBtn.textContent = "RUN MULTI-AGENT PIPELINE";
    
    previewCard.style.opacity = '1';
    previewCard.style.pointerEvents = 'all';
    resumeContent.innerHTML = initialResume;
    resultActions.style.display = 'block';
    
    addLog("\n> ATS SCORE: 98/100 | Visual Hygiene: PASS");
});

// Refinement Simulation
refineBtn.addEventListener('click', async () => {
    const instruction = refineInput.value;
    if (!instruction) return;

    refineBtn.disabled = true;
    addLog(`\n> [LLM] REFINEMENT REQUEST: "${instruction}"`);
    refineInput.value = "";

    await new Promise(resolve => setTimeout(resolve, 1500));
    addLog("> [Agent 2] SYNTHESIZER: Recalibrating narrative for " + instruction + "...");
    
    // Simulate updating the draft
    resumeContent.innerHTML = resumeContent.innerHTML.replace("Strategic Senior Product Manager", "<strong>[REFINED]</strong> High-Impact Leadership Product Manager");
    resumeContent.innerHTML = resumeContent.innerHTML.replace("Spearheaded", "Directed cross-functional teams for");
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog("> [Agent 3] ARCHITECT: Re-rendering layout...");
    addLog("> SUCCESS: Draft updated live.");
    
    refineBtn.disabled = false;
});

// Download Simulation
downloadBtn.addEventListener('click', () => {
    addLog("> Generating PDF export...");
    setTimeout(() => {
        alert("Success: PDF downloaded with all refinements.");
    }, 1000);
});

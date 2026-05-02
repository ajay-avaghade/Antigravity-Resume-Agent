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

// High-fidelity resume content matching the previous Amazon/Sabre work
const initialResume = `
    <div style="text-align: center; border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem;">
        <h1 style="font-size: 24px; color: #1a1a1a; margin-bottom: 0.2em;">AJAY AVAGHADE</h1>
        <p style="font-size: 14px; color: #333;">Bangalore, India | +91 95615 58439 | avaghadeajay009@gmail.com</p>
        <p style="font-size: 14px; color: #007bff;">LinkedIn | Portfolio | GitHub</p>
    </div>

    <h2 style="font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 0.2em; margin-top: 1.5em; font-weight: bold;">PROFESSIONAL SUMMARY</h2>
    <p style="font-size: 14px; line-height: 1.5;">Strategic Senior Product Manager with 4+ years of experience scaling high-volume monetization and media-centric product ecosystems. Expertise in architecting multi-tenant ad-tech infrastructure and conversion tracking capabilities that managed ₹1000+ Cr annual budgets. Driven 22% conversion lifts through data-driven checkout revamps and ML-based propensity models.</p>

    <h2 style="font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 0.2em; margin-top: 1.5em; font-weight: bold;">EXPERIENCE</h2>

    <div style="font-weight: bold; margin-top: 1em; margin-bottom: 0.2em; font-size: 14px;">PHONEPE | Product Manager | Bangalore, India | May 2023 – Present</div>
    <ul style="font-size: 14px; margin-left: 1.5rem; line-height: 1.5;">
        <li style="margin-bottom: 0.5rem;"><strong>Media Strategy & Roadmap:</strong> Spearheaded the end-to-end execution of a ₹100 Cr/year monetization and media technology roadmap, aligning commercial priorities with engineering delivery to scale merchant display and attribution capabilities.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Checkout & Platform Measurement:</strong> Reimagined the unified offer discovery and conversion tracking engine, driving a 22% lift in transaction conversions.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Monetization & Analytics:</strong> Directed a ₹1000+ Cr annual marketing engine, deploying <strong>'Propensity to Transact' ML models</strong> to reduce marketing burn by 32%.</li>
    </ul>

    <div style="font-weight: bold; margin-top: 1em; margin-bottom: 0.2em; font-size: 14px;">PHONEPE | Associate Product Manager | April 2022 – April 2023</div>
    <ul style="font-size: 14px; margin-left: 1.5rem; line-height: 1.5;">
        <li style="margin-bottom: 0.5rem;"><strong>Ad-Tech Infrastructure:</strong> Orchestrated a multi-tenant incentivization engine, defining platform-scale GTM priorities and driving merchant sign-ups.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Growth:</strong> Engineered a multi-channel referral engine acquiring 5Mn+ users/month and optimizing CAC by 23%.</li>
    </ul>

    <h2 style="font-size: 18px; border-bottom: 1px solid #eee; padding-bottom: 0.2em; margin-top: 1.5em; font-weight: bold;">SKILLS</h2>
    <p style="font-size: 14px; line-height: 1.5;"><strong>Product Management:</strong> Media Product Roadmap, Attribution & Conversion Tracking, GTM Strategy, A/B Testing, Agile/Scrum, User Stories.<br>
    <strong>Technical & Data:</strong> SQL (Advanced), Machine Learning (Propensity Modeling), Mixpanel, Clevertap, Figma.</p>
`;

const logMessages = [
    { text: "> Initializing Antigravity Orchestrator...", delay: 500 },
    { text: "> [Agent 1] HARVESTER: Ingesting master data from Portfolio/LinkedIn Website...", delay: 1200 },
    { text: "> [Agent 2] SYNTHESIZER: Mapping achievements with extreme focus on keyword injection...", delay: 1500 },
    { text: "> [Agent 3] ARCHITECT: Compiling semantic HTML with Pagination Hygiene...", delay: 1000 },
    { text: "> [Agent 4] ENSEMBLE: Simulating 5 ATS parsers (Score: 98/100)...", delay: 1500 },
    { text: "> [Agent 6] VALIDATOR: Running 'Eye Test' on rendered layout...", delay: 1000 },
    { text: "> SUCCESS: High-fidelity draft generated and verified.", delay: 500 }
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
    resumeContent.innerHTML = '<p style="color: #666; font-style: italic; text-align: center; padding-top: 100px;">Drafting in progress...</p>';
    
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
    addLog("> [Agent 2] SYNTHESIZER: Re-framing narrative to emphasize leadership and " + instruction + "...");
    
    // Simulate updating the draft
    resumeContent.innerHTML = resumeContent.innerHTML.replace("Strategic Senior Product Manager", "<strong>[REFINED]</strong> Lead Product Strategist & Media Architect");
    resumeContent.innerHTML = resumeContent.innerHTML.replace("Spearheaded", "Directed the high-impact execution of");
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog("> [Agent 3] ARCHITECT: Re-rendering layout with updated directives...");
    addLog("> SUCCESS: Draft refined and verified.");
    
    refineBtn.disabled = false;
});

// Real PDF Download via Browser Print
downloadBtn.addEventListener('click', () => {
    addLog("> Opening PDF Export Interface...");
    setTimeout(() => {
        window.print(); // This triggers the browser's built-in PDF generator
        addLog("> SUCCESS: PDF generated.");
    }, 500);
});

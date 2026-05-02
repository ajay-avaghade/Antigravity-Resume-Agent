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

// Full, High-Fidelity Resume Content matching the Amazon/Sabre standards
const initialResume = `
    <div style="text-align: center; border-bottom: 1.5pt solid #eee; padding-bottom: 10pt; margin-bottom: 15pt;">
        <h1 style="font-size: 24pt; color: #1a1a1a; margin-bottom: 2pt; font-weight: 800;">AJAY AVAGHADE</h1>
        <p style="font-size: 10pt; color: #333;">Bangalore, India | +91 95615 58439 | avaghadeajay009@gmail.com</p>
        <p style="font-size: 10pt; color: #007bff; font-weight: 600;">LinkedIn | Portfolio | GitHub</p>
    </div>

    <h2 style="font-size: 14pt; border-bottom: 1pt solid #eee; padding-bottom: 2pt; margin-top: 15pt; font-weight: bold; color: #1a1a1a;">PROFESSIONAL SUMMARY</h2>
    <p style="font-size: 10pt; line-height: 1.6; margin-top: 5pt; color: #333;">Customer-obsessed Product Manager with 4+ years of experience scaling India’s leading digital payments and Quick Commerce (Pincode) ecosystems. Managed a ₹100 Cr/year monetization portfolio and ₹1000+ Cr annual budgets, driving 22% conversion lifts through data-driven checkout revamps and 'Propensity to Transact' ML models.</p>

    <h2 style="font-size: 14pt; border-bottom: 1pt solid #eee; padding-bottom: 2pt; margin-top: 20pt; font-weight: bold; color: #1a1a1a;">EXPERIENCE</h2>

    <div style="font-weight: bold; margin-top: 12pt; margin-bottom: 3pt; font-size: 10.5pt; color: #1a1a1a;">PHONEPE | Product Manager | Bangalore, India | May 2023 – Present</div>
    <ul style="font-size: 10pt; margin-left: 18pt; line-height: 1.6; color: #333;">
        <li style="margin-bottom: 5pt;"><strong>Quick Commerce & Supply Chain:</strong> Spearheaded the end-to-end design and deployment of real-time cart-context interventions for Pincode, implementing automated freebie and fee-waiver logic that optimized hub productivity and significantly reduced supply chain abandonment.</li>
        <li style="margin-bottom: 5pt;"><strong>Checkout & Platform Experience:</strong> Reimagined the end-to-end offer discovery and checkout experience, architecting <strong>EMI subvention capabilities</strong> that drove a 14% increase in merchant acquisition and a 22% lift in offer-applied transaction conversions.</li>
        <li style="margin-bottom: 5pt;"><strong>Budgeting & Efficiency:</strong> Directed a ₹1000+ Cr annual marketing engine, deploying <strong>'Propensity to Transact' ML models</strong> to reduce marketing burn by 32% while sustaining 11% YoY revenue growth.</li>
        <li style="margin-bottom: 5pt;"><strong>Retention & Operations:</strong> Launched a gamified milestone system and unified offer journey, scaling CLTV by 17% and achieving an 85% reduction in merchant escalations.</li>
    </ul>

    <div style="font-weight: bold; margin-top: 15pt; margin-bottom: 3pt; font-size: 10.5pt; color: #1a1a1a;">PHONEPE | Associate Product Manager | April 2022 – April 2023</div>
    <ul style="font-size: 10pt; margin-left: 18pt; line-height: 1.6; color: #333;">
        <li style="margin-bottom: 5pt;"><strong>Monetization & Strategy:</strong> Orchestrated a ₹100 Cr/year monetization portfolio, defining platform-scale incentivization roadmaps and driving merchant growth through scalable B2B infrastructure.</li>
        <li style="margin-bottom: 5pt;"><strong>Viral Acquisition:</strong> Engineered a multi-tenant referral engine with integrated fraud detection, acquiring 5Mn+ users/month and optimizing CAC by 23%.</li>
    </ul>

    <div style="font-weight: bold; margin-top: 15pt; margin-bottom: 3pt; font-size: 10.5pt; color: #1a1a1a;">KOTAK MAHINDRA BANK | PM Intern (Founding Team) | Mumbai, India | April 2021 – June 2021</div>
    <ul style="font-size: 10pt; margin-left: 18pt; line-height: 1.6; color: #333;">
        <li style="margin-bottom: 5pt;"><strong>0→1 Platform Launch:</strong> Conceptualized and launched the Kotak Cherry WealthTech platform, achieving 100K+ downloads within the first 90 days and a +26% Day-30 retention rate.</li>
    </ul>

    <h2 style="font-size: 14pt; border-bottom: 1pt solid #eee; padding-bottom: 2pt; margin-top: 20pt; font-weight: bold; color: #1a1a1a;">SKILLS</h2>
    <p style="font-size: 10pt; line-height: 1.6; margin-top: 5pt; color: #333;"><strong>Product Management:</strong> Technical Product Strategy, Roadmap Ownership, A/B Testing, Lifecycle Management, Quick Commerce Operations, Supply Chain Optimization, Agile/Scrum.<br>
    <strong>Technical & Data:</strong> <strong>SQL (Advanced)</strong>, <strong>VBA</strong>, Machine Learning (Propensity Modeling), Data Modeling, Mixpanel, Clevertap, Jira, Figma.</p>
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
    resumeContent.innerHTML = '<p style="color: #666; font-style: italic; text-align: center; padding-top: 150px;">Drafting in progress...</p>';
    
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
    resumeContent.innerHTML = resumeContent.innerHTML.replace("Customer-obsessed Product Manager", "<strong>[REFINED]</strong> High-Impact Leadership Product Strategist");
    resumeContent.innerHTML = resumeContent.innerHTML.replace("Spearheaded", "Directed the cross-functional execution of");
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog("> [Agent 3] ARCHITECT: Re-rendering layout with updated directives...");
    addLog("> SUCCESS: Draft refined and verified.");
    
    refineBtn.disabled = false;
});

// Real PDF Download via html2pdf
downloadBtn.addEventListener('click', () => {
    addLog("> Initializing PDF Engine...");
    
    const opt = {
        margin:       10,
        filename:     'Ajay_Avaghade_Antigravity_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(resumeContent).save().then(() => {
        addLog("> SUCCESS: PDF downloaded to your computer.");
    }).catch(err => {
        addLog("> ERROR: PDF generation failed. Using browser fallback...");
        window.print();
    });
});

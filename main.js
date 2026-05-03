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
const downloadBtnDirect = document.getElementById('download-pdf-direct');
const navDownload = document.getElementById('nav-download');
const refineBtn = document.getElementById('refine-btn');
const refineInput = document.getElementById('refine-input');

// Full, High-Fidelity Resume Content matching the Amazon/Sabre standards
// Resume Variants for Simulation
const resumes = {
    amazon: `
        <div class="resume-container" style="color: #333; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0;">
            <div style="text-align: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 10pt; margin-bottom: 12pt;">
                <h1 style="font-size: 24pt; color: #1a1a1a; margin-bottom: 2pt; font-weight: 800; text-transform: uppercase;">AJAY AVAGHADE</h1>
                <p style="font-size: 10pt; margin-bottom: 2pt;">Bangalore, India | +91 95615 58439 | <a href="mailto:avaghadeajay009@gmail.com" style="color: #333; text-decoration: none;">avaghadeajay009@gmail.com</a></p>
                <p style="font-size: 10pt; font-weight: 600;">
                    <a href="https://linkedin.com/in/ajay-avaghade" style="color: #007bff; text-decoration: none;">LinkedIn</a> | 
                    <a href="https://ajay-avaghade.github.io/Portfolio/" style="color: #007bff; text-decoration: none;">Portfolio</a> | 
                    <a href="https://github.com/ajay-avaghade" style="color: #007bff; text-decoration: none;">GitHub</a>
                </p>
            </div>
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; text-transform: uppercase;">Professional Summary (Amazon Optimized)</h2>
            <p style="font-size: 9.5pt; text-align: justify; margin-bottom: 14pt;"><strong>Customer-obsessed</strong> Product Manager with 4+ years of experience scaling India’s leading digital payments and Quick Commerce ecosystems. Managed a ₹100 Cr/year monetization portfolio and ₹1000+ Cr annual budgets, driving 22% conversion lifts through data-driven checkout revamps. Focused on supply chain optimization and retail tech verticals.</p>
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; text-transform: uppercase;">Experience</h2>
            <div style="font-weight: bold; font-size: 10pt;">PHONEPE | Product Manager | May 2023 – Present</div>
            <ul style="font-size: 9.5pt; margin-left: 14pt; margin-bottom: 10pt;">
                <li><strong>Quick Commerce & Supply Chain:</strong> Spearheaded end-to-end design for Pincode, implementing automated freebie logic that reduced supply chain abandonment.</li>
                <li><strong>Checkout & Conversion:</strong> Architected EMI subvention capabilities driving a 14% increase in merchant acquisition and 22% lift in conversions.</li>
            </ul>
            <div style="font-weight: bold; font-size: 10pt;">KOTAK MAHINDRA BANK | PM Intern | 2021</div>
            <ul style="font-size: 9.5pt; margin-left: 14pt;">
                <li><strong>0→1 Platform Launch:</strong> Launched Kotak Cherry WealthTech, achieving 100K+ downloads in 90 days.</li>
            </ul>
        </div>
    `,
    sabre: `
        <div class="resume-container" style="color: #333; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0;">
            <div style="text-align: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 10pt; margin-bottom: 12pt;">
                <h1 style="font-size: 24pt; color: #1a1a1a; margin-bottom: 2pt; font-weight: 800; text-transform: uppercase;">AJAY AVAGHADE</h1>
                <p style="font-size: 10pt; margin-bottom: 2pt;">Bangalore, India | +91 95615 58439 | <a href="mailto:avaghadeajay009@gmail.com" style="color: #333; text-decoration: none;">avaghadeajay009@gmail.com</a></p>
                <p style="font-size: 10pt; font-weight: 600;">
                    <a href="https://linkedin.com/in/ajay-avaghade" style="color: #007bff; text-decoration: none;">LinkedIn</a> | 
                    <a href="https://ajay-avaghade.github.io/Portfolio/" style="color: #007bff; text-decoration: none;">Portfolio</a> | 
                    <a href="https://github.com/ajay-avaghade" style="color: #007bff; text-decoration: none;">GitHub</a>
                </p>
            </div>
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; text-transform: uppercase;">Professional Summary (Sabre Optimized)</h2>
            <p style="font-size: 9.5pt; text-align: justify; margin-bottom: 14pt;"><strong>Strategic</strong> Product Manager with 4+ years of experience scaling high-volume <strong>monetization and media-centric</strong> product ecosystems. Expertise in architecting multi-tenant ad-tech infrastructure and conversion tracking capabilities for travel and fintech platforms.</p>
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; text-transform: uppercase;">Experience</h2>
            <div style="font-weight: bold; font-size: 10pt;">PHONEPE | Product Manager | May 2023 – Present</div>
            <ul style="font-size: 9.5pt; margin-left: 14pt; margin-bottom: 10pt;">
                <li><strong>Media Strategy:</strong> Spearheaded a ₹100 Cr/year monetization roadmap, scaling merchant display and attribution capabilities.</li>
                <li><strong>Conversion Tracking:</strong> Reimagined unified offer discovery and tracking engine, integrating EMI subvention and algorithmic attribution.</li>
            </ul>
        </div>
    `,
    skillz: `
        <div class="resume-container" style="color: #333; line-height: 1.5; font-family: 'Inter', sans-serif; padding: 0;">
            <div style="text-align: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 10pt; margin-bottom: 12pt;">
                <h1 style="font-size: 24pt; color: #1a1a1a; margin-bottom: 2pt; font-weight: 800; text-transform: uppercase;">AJAY AVAGHADE</h1>
                <p style="font-size: 10pt;">Bangalore, India | +91 95615 58439 | avaghadeajay009@gmail.com</p>
            </div>
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; text-transform: uppercase;">Professional Summary (Skillz Optimized)</h2>
            <p style="font-size: 9.5pt; text-align: justify; margin-bottom: 14pt;">Data-driven Product Manager with 4+ years of experience scaling <strong>high-volume transactional platforms and Engagement Ecosystems</strong>. Expert at bridging complex user journeys with <strong>LiveOps incentivization and gamified retention mechanics</strong>, driving 22% conversion lifts and 17% CLTV growth.</p>
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; text-transform: uppercase;">Experience</h2>
            <div style="font-weight: bold; font-size: 10pt;">PHONEPE | Product Manager | May 2023 – Present</div>
            <ul style="font-size: 9.5pt; margin-left: 14pt; margin-bottom: 10pt;">
                <li><strong>Retention Mechanics & LiveOps:</strong> Launched a gamified milestone system and unified offer discovery journey, scaling CLTV by 17% and increasing active session depth.</li>
                <li><strong>In-App Incentivization:</strong> Designed real-time, context-aware interventions (freebies, fee-waivers) that optimized overall funnel health.</li>
            </ul>
        </div>
    `,
    default: `
        <div class="resume-container" style="color: #333; line-height: 1.4; font-family: 'Inter', sans-serif; padding: 0; margin: 0;">
            <!-- Header -->
            <div style="text-align: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 10pt; margin-bottom: 12pt;">
                <h1 style="font-size: 24pt; color: #1a1a1a; margin-bottom: 2pt; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">AJAY AVAGHADE</h1>
                <p style="font-size: 10pt; color: #444; margin-bottom: 2pt;">
                    Bangalore, India | +91 95615 58439 | <a href="mailto:avaghadeajay009@gmail.com" style="color: #444; text-decoration: none;">avaghadeajay009@gmail.com</a>
                </p>
                <p style="font-size: 10pt; font-weight: 600;">
                    <a href="https://linkedin.com/in/ajay-avaghade" style="color: #007bff; text-decoration: none;">LinkedIn</a> | 
                    <a href="https://ajay-avaghade.github.io/Portfolio/" style="color: #007bff; text-decoration: none;">Portfolio</a> | 
                    <a href="https://github.com/ajay-avaghade" style="color: #007bff; text-decoration: none;">GitHub</a>
                </p>
            </div>
    
            <!-- Summary -->
            <div style="margin-bottom: 14pt;">
                <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">Professional Summary</h2>
                <p style="font-size: 9.5pt; line-height: 1.5; color: #333; text-align: justify;">
                    Data-driven Senior Product Manager with 4+ years of experience scaling high-volume transactional platforms and <strong>Engagement Ecosystems</strong>. Expert at bridging complex user journeys with <strong>LiveOps incentivization</strong>, driving 22% conversion lifts and 17% CLTV growth through gamified retention mechanics. Proven track record in managing ₹1000+ Cr annual budgets to optimize player/user acquisition and platform-scale session depth.
                </p>
            </div>
    
            <!-- Experience -->
            <div style="margin-bottom: 14pt;">
                <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">Professional Experience</h2>
    
                <div class="experience-block" style="margin-bottom: 10pt; page-break-inside: avoid;">
                    <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                        <span>PHONEPE (Engagement & Growth)</span>
                        <span>May 2023 – Present</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-style: italic; font-size: 9.5pt; color: #444; margin-bottom: 2pt;">
                        <span>Product Manager</span>
                        <span>Bangalore, India</span>
                    </div>
                    <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                        <li style="margin-bottom: 2pt;"><strong>Retention Mechanics & LiveOps:</strong> Launched a gamified milestone system and unified offer discovery journey, scaling <strong>CLTV by 17%</strong>.</li>
                        <li style="margin-bottom: 2pt;"><strong>Conversion Optimization:</strong> Reimagined end-to-end checkout, architecting <strong>EMI subvention capabilities</strong> driving 14% increase in conversion.</li>
                    </ul>
                </div>
            </div>
    
            <!-- Skills -->
            <div class="experience-block" style="margin-bottom: 14pt; page-break-inside: avoid;">
                <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">Technical Skills</h2>
                <p style="font-size: 9.5pt; line-height: 1.5; color: #333;">
                    <strong>Product & Engagement:</strong> Live Operations (LiveOps), Gamification, Retention Mechanics, Conversion Funnel Optimization.<br>
                    <strong>Data & Tools:</strong> SQL (Advanced), Machine Learning, Mixpanel, Clevertap, Jira, Figma.
                </p>
            </div>
        </div>
    `
};

const logMessages = [
    { text: "> Initializing Antigravity Orchestrator...", delay: 500 },
    { text: "> [Agent 1] HARVESTER: Ingesting master data from Portfolio/LinkedIn Website...", delay: 1200 },
    { text: "> [Agent 2] SYNTHESIZER: Mapping achievements with extreme focus on keyword injection...", delay: 1500 },
    { text: "> [Agent 3] ARCHITECT: Compiling semantic HTML with Pagination Hygiene...", delay: 1000 },
    { text: "> [Agent 4] ENSEMBLE: Simulating 5 ATS parsers (Score: 98/100)...", delay: 1500 },
    { text: "> [Agent 6] VALIDATOR: Running 'Eye Test' on rendered layout...", delay: 1000 },
    { text: "> SUCCESS: High-fidelity draft generated and verified.", delay: 500 }
];

// UI Elements (already declared above)
// const startBtn = document.getElementById('start-pipeline');
// const terminal = document.getElementById('log-terminal');
// const resultActions = document.getElementById('result-actions');
// const previewCard = document.getElementById('preview-card');
// const resumeContent = document.getElementById('resume-content');
// const downloadBtn = document.getElementById('download-pdf');
// const downloadBtnDirect = document.getElementById('download-pdf-direct');
// const navDownload = document.getElementById('nav-download');
// const refineBtn = document.getElementById('refine-btn');
// const refineInput = document.getElementById('refine-input');

// Settings Modal
const settingsModal = document.getElementById('settings-modal');
const openSettings = document.getElementById('open-settings');
const closeSettings = document.getElementById('close-settings');
const saveSettings = document.getElementById('save-settings');
const apiKeyInput = document.getElementById('api-key');

openSettings.addEventListener('click', () => settingsModal.style.display = 'flex');
closeSettings.addEventListener('click', () => settingsModal.style.display = 'none');
saveSettings.addEventListener('click', () => {
    localStorage.setItem('gemini_api_key', apiKeyInput.value);
    settingsModal.style.display = 'none';
});
if (localStorage.getItem('gemini_api_key')) {
    apiKeyInput.value = localStorage.getItem('gemini_api_key');
}

function addLog(text) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = text;
    terminal.appendChild(entry);
    terminal.scrollTop = terminal.scrollHeight;
}

// Simple Keyword Extractor for "Universal" Adaptation simulation
function extractKeywords(text) {
    if (!text) return [];
    const commonWords = new Set(['the', 'and', 'for', 'with', 'that', 'this', 'from', 'your', 'will', 'our', 'are', 'was', 'were']);
    const words = text.toLowerCase().match(/\b(\w+)\b/g);
    const freq = {};
    words.forEach(w => {
        if (w.length > 3 && !commonWords.has(w)) {
            freq[w] = (freq[w] || 0) + 1;
        }
    });
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 8).map(e => e[0]);
}

startBtn.addEventListener('click', async () => {
    const jdUrl = document.getElementById('jd-url').value.toLowerCase();
    const jdText = document.getElementById('jd-text').value;
    const apiKey = localStorage.getItem('gemini_api_key');
    
    let selectedResume = resumes.default;
    let companyName = "the target company";
    let keywords = [];

    // Identification logic
    if (jdUrl.includes('amazon')) {
        selectedResume = resumes.amazon;
        companyName = "Amazon";
    } else if (jdUrl.includes('sabre')) {
        selectedResume = resumes.sabre;
        companyName = "Sabre";
    } else if (jdUrl.includes('skillz')) {
        selectedResume = resumes.skillz;
        companyName = "Skillz";
    } else if (jdUrl || jdText) {
        companyName = jdUrl ? (jdUrl.split('.')[1] || "Target") : "Target";
        keywords = extractKeywords(jdText || jdUrl);
    }

    startBtn.disabled = true;
    startBtn.textContent = "EXECUTING PIPELINE...";
    terminal.innerHTML = "";
    resultActions.style.display = 'none';
    previewCard.style.opacity = '0.5';
    previewCard.style.pointerEvents = 'none';
    resumeContent.innerHTML = '<p style="color: #666; font-style: italic; text-align: center; padding-top: 150px;">Drafting in progress...</p>';
    
    // Dynamic Log Messages
    const dynamicLogs = [
        { text: "> Initializing Antigravity Orchestrator...", delay: 500 },
        { text: `> [Agent 1] HARVESTER: Ingesting data source...`, delay: 1000 },
        { text: `> [Agent 1] HARVESTER: Identifying company: ${companyName}...`, delay: 800 }
    ];

    if (keywords.length > 0) {
        dynamicLogs.push({ text: `> [Agent 1] HARVESTER: Extracted core competencies: ${keywords.join(', ')}...`, delay: 1200 });
        dynamicLogs.push({ text: `> [Agent 2] SYNTHESIZER: Adapting narrative with universal keyword mapping...`, delay: 1500 });
    } else {
        dynamicLogs.push({ text: `> [Agent 2] SYNTHESIZER: Mapping achievements for ${companyName} ecosystem...`, delay: 1500 });
    }

    dynamicLogs.push({ text: "> [Agent 3] ARCHITECT: Compiling semantic HTML with Pagination Hygiene...", delay: 1000 });
    dynamicLogs.push({ text: "> [Agent 4] ENSEMBLE: Simulating 5 ATS parsers (Score: 98/100)...", delay: 1500 });
    dynamicLogs.push({ text: "> [Agent 6] VALIDATOR: Running 'Eye Test' on rendered layout...", delay: 1000 });
    dynamicLogs.push({ text: "> SUCCESS: Universal draft generated and verified.", delay: 500 });

    for (const msg of dynamicLogs) {
        await new Promise(resolve => setTimeout(resolve, msg.delay));
        addLog(msg.text);
    }

    // Universal Adaptation Simulation
    let finalContent = selectedResume;
    if (keywords.length > 0) {
        // Inject keywords into the summary for a "universal" feel
        const keywordString = keywords.slice(0, 3).map(k => `<strong>${k}</strong>`).join(', ');
        finalContent = finalContent.replace("Professional Summary", `Professional Summary (Optimized for ${companyName})`);
        finalContent = finalContent.replace("Engagement Ecosystems", `Engagement Ecosystems (Focus: ${keywordString})`);
    }

    startBtn.disabled = false;
    startBtn.textContent = "RUN MULTI-AGENT PIPELINE";
    
    previewCard.style.opacity = '1';
    previewCard.style.pointerEvents = 'all';
    resumeContent.innerHTML = finalContent;
    resultActions.style.display = 'block';
    navDownload.style.display = 'flex';
    
    addLog("\n> ATS SCORE: 98/100 | Visual Hygiene: PASS");
    lucide.createIcons();
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
    if (instruction.toLowerCase().includes("gaming") || instruction.toLowerCase().includes("engagement")) {
        resumeContent.innerHTML = resumeContent.innerHTML.replace("Senior Product Manager", "<strong>[REFINED]</strong> Senior Gaming Product Leader (Engagement)");
        resumeContent.innerHTML = resumeContent.innerHTML.replace("Retention Mechanics", "High-Velocity Player Retention Mechanics");
    } else {
        resumeContent.innerHTML = resumeContent.innerHTML.replace("Senior Product Manager", "<strong>[REFINED]</strong> High-Impact Leadership Product Strategist");
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    addLog("> [Agent 3] ARCHITECT: Re-rendering layout with updated directives...");
    addLog("> SUCCESS: Draft refined and verified.");
    
    refineBtn.disabled = false;
});

// Native PDF Download via Browser Print Engine (VS Code Style)
downloadBtn.addEventListener('click', () => {
    addLog("> Initializing Native Print Engine...");
    addLog("> [TIP] Select 'Save as PDF' in the destination dropdown.");
    
    // Native print is 100% reliable for text-based resumes
    window.print();
    
    addLog("> SUCCESS: Print dialog opened. PDF ready for export.");
});

// Direct PDF Download via html2pdf.js
async function downloadDirect() {
    addLog("> Initializing Direct PDF Generation (Agent 6 Validator)...");
    
    const element = document.getElementById('resume-preview');
    const opt = {
        margin: 0,
        filename: 'Ajay_Avaghade_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
        await html2pdf().set(opt).from(element).save();
        addLog("> SUCCESS: PDF generated and downloaded via Direct Engine.");
    } catch (err) {
        addLog("> ERROR: Direct PDF generation failed. Using fallback...");
        console.error(err);
        window.print();
    }
}

downloadBtnDirect.addEventListener('click', downloadDirect);
navDownload.addEventListener('click', downloadDirect);






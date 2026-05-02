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
                    <li style="margin-bottom: 2pt;"><strong>Retention Mechanics & LiveOps:</strong> Launched a gamified milestone system and unified offer discovery journey, scaling <strong>CLTV by 17%</strong> and increasing <strong>active session depth</strong> through algorithmically cohorted user interventions.</li>
                    <li style="margin-bottom: 2pt;"><strong>Conversion Optimization:</strong> Reimagined the end-to-end checkout and payment experience, architecting <strong>EMI subvention capabilities</strong> that drove a 14% increase in conversion for high-intent user segments.</li>
                    <li style="margin-bottom: 2pt;"><strong>Predictive Engagement:</strong> Directed a ₹1000+ Cr annual marketing engine, deploying <strong>'Propensity to Transact' ML models</strong> to optimize spend efficiency, reducing marketing burn by 32% while sustaining double-digit YoY growth.</li>
                    <li style="margin-bottom: 2pt;"><strong>In-App Incentivization:</strong> Designed real-time, context-aware interventions (freebies, fee-waivers) for Pincode, significantly reducing <strong>supply chain abandonment</strong> and improving overall funnel health.</li>
                </ul>
            </div>

            <div class="experience-block" style="margin-bottom: 10pt; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                    <span>PHONEPE (Monetization & Strategy)</span>
                    <span>April 2022 – April 2023</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-style: italic; font-size: 9.5pt; color: #444; margin-bottom: 2pt;">
                    <span>Associate Product Manager</span>
                    <span>Bangalore, India</span>
                </div>
                <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                    <li style="margin-bottom: 2pt;"><strong>Viral Acquisition Engine:</strong> Engineered a multi-tenant referral engine with integrated fraud detection, acquiring <strong>5Mn+ users/month</strong> and optimizing CAC by 23% through feature-level referral loops.</li>
                    <li style="margin-bottom: 2pt;"><strong>Monetization Roadmap:</strong> Managed a ₹100 Cr/year monetization portfolio, defining scalable B2B infrastructure that supported rapid merchant growth and platform-wide incentivization strategies.</li>
                </ul>
            </div>

            <div class="experience-block" style="margin-bottom: 10pt; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                    <span>KOTAK MAHINDRA BANK</span>
                    <span>April 2021 – June 2021</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-style: italic; font-size: 9.5pt; color: #444; margin-bottom: 2pt;">
                    <span>PM Intern (Founding Team)</span>
                    <span>Mumbai, India</span>
                </div>
                <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                    <li style="margin-bottom: 2pt;"><strong>0→1 Platform Launch:</strong> Conceptualized and launched the <strong>Kotak Cherry WealthTech</strong> platform, achieving 100K+ downloads within 90 days and a +26% Day-30 retention rate.</li>
                </ul>
            </div>
        </div>

        <!-- Skills -->
        <div class="experience-block" style="margin-bottom: 14pt; page-break-inside: avoid;">
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">Technical Skills</h2>
            <p style="font-size: 9.5pt; line-height: 1.5; color: #333;">
                <strong>Product & Engagement:</strong> Live Operations (LiveOps), Gamification, Retention Mechanics, Conversion Funnel Optimization, A/B Testing, Lifecycle Management, Technical Product Strategy.<br>
                <strong>Data & Tools:</strong> SQL (Advanced), Machine Learning (Propensity Modeling), Data Modeling, Mixpanel, Clevertap, Jira, Figma, Tableau.
            </p>
        </div>

        <!-- Education -->
        <div class="experience-block" style="margin-bottom: 14pt; page-break-inside: avoid;">
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">Education</h2>
            
            <div style="margin-bottom: 8pt;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                    <span>INDIAN INSTITUTE OF MANAGEMENT (IIM), INDORE</span>
                    <span>2020 – 2022</span>
                </div>
                <div style="font-size: 9.5pt; color: #444;">Master of Business Administration (MBA)</div>
            </div>

            <div style="margin-bottom: 8pt;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                    <span>NEOMA BUSINESS SCHOOL, FRANCE</span>
                    <span>2021</span>
                </div>
                <div style="font-size: 9.5pt; color: #444;">Student Exchange (Part of MBA, IIM Indore)</div>
            </div>

            <div style="margin-bottom: 6pt;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                    <span>VISVESVARAYA NATIONAL INSTITUTE OF TECHNOLOGY (VNIT), NAGPUR</span>
                    <span>2016 – 2020</span>
                </div>
                <div style="font-size: 9.5pt; color: #444;">Bachelor of Technology (B.Tech) in Computer Science</div>
            </div>
        </div>

        <!-- AI & Open Source Projects -->
        <div class="experience-block" style="margin-bottom: 14pt; page-break-inside: avoid;">
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">AI & Open Source Projects</h2>
            <div style="margin-bottom: 6pt;">
                <div style="font-weight: bold; font-size: 10pt; color: #1a1a1a;">AI Mock Product Manager Interviewer</div>
                <p style="font-size: 9.5pt; line-height: 1.4; color: #333;">Architected a real-time voice conversational agent using LLMs and speech-to-text to conduct PM mock interviews, providing instant scorecards and feedback.</p>
            </div>
        </div>

        <!-- Achievements -->
        <div class="experience-block" style="page-break-inside: avoid;">
            <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.5px;">Key Achievements</h2>
            <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                <li style="margin-bottom: 2pt;"><strong>Campus Winner:</strong> Asian Paints Canvas B-School Competition.</li>
                <li style="margin-bottom: 2pt;"><strong>National Finalist:</strong> ITC Interrobang.</li>
                <li style="margin-bottom: 2pt;"><strong>Academic Excellence:</strong> Education Minister Award – District Topper (10th & 12th, Maharashtra State Board).</li>
            </ul>
        </div>
    </div>
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

// Real PDF Download via html2pdf
downloadBtn.addEventListener('click', async () => {
    addLog("> Initializing PDF Engine...");
    
    // 1. Create a temporary 'shadow' element for PDF rendering
    // This avoids all scroll/offset issues by rendering in a clean, full-height container
    const printElement = document.createElement('div');
    printElement.innerHTML = resumeContent.innerHTML;
    
    // Apply styling to ensure it renders exactly like an A4 page
    Object.assign(printElement.style, {
        position: 'absolute',
        left: '-9999px',
        top: '0',
        width: '210mm',
        height: 'auto',
        padding: '15mm',
        background: 'white',
        color: '#333',
        fontSize: '11pt',
        lineHeight: '1.4',
        fontFamily: "'Inter', sans-serif"
    });
    
    document.body.appendChild(printElement);
    
    const opt = {
        margin:       0, // Padding is already in printElement
        filename:     'Ajay_Avaghade_Antigravity_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
            scale: 3, // Higher resolution
            useCORS: true, 
            letterRendering: true,
            scrollY: 0,
            scrollX: 0
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
        await html2pdf().set(opt).from(printElement).save();
        addLog("> SUCCESS: PDF downloaded to your computer.");
    } catch (err) {
        console.error("PDF Export Error:", err);
        addLog("> ERROR: PDF generation failed. Using browser fallback...");
        window.print();
    } finally {
        // Cleanup
        document.body.removeChild(printElement);
    }
});



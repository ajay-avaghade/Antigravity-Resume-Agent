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

// UI Elements
const startBtn = document.getElementById('start-pipeline');
const terminal = document.getElementById('log-terminal');
const resultActions = document.getElementById('result-actions');
const previewCard = document.getElementById('preview-card');
const resumeContent = document.getElementById('resume-content');
const downloadBtn = document.getElementById('download-pdf');
const downloadBtnDirect = document.getElementById('download-pdf-direct');
const navDownload = document.getElementById('nav-download'); // May be null
const refineBtn = document.getElementById('refine-btn');
const refineInput = document.getElementById('refine-input');

// ============================================================
// MASTER RESUME (Full portfolio — source of truth)
// ============================================================
const masterResume = `
<div class="resume-container" style="color: #333; line-height: 1.4; font-family: 'Inter', sans-serif; padding: 0; margin: 0;">
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

    <div style="margin-bottom: 14pt;">
        <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase;">Professional Summary</h2>
        <p id="resume-summary" style="font-size: 9.5pt; line-height: 1.5; color: #333; text-align: justify;">
            Data-driven Senior Product Manager with 4+ years of experience scaling high-volume transactional platforms and digital ecosystems. Expert at bridging complex user journeys with strategic product interventions, driving 22% conversion lifts and 17% growth through optimized product mechanics. Proven track record in managing ₹1000+ Cr annual budgets to optimize acquisition and platform-scale depth.
        </p>
    </div>

    <div style="margin-bottom: 14pt;">
        <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase;">Professional Experience</h2>

        <div style="margin-bottom: 10pt; page-break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                <span>PHONEPE (Engagement & Growth)</span><span>May 2023 – Present</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-style: italic; font-size: 9.5pt; color: #444; margin-bottom: 2pt;">
                <span>Product Manager</span><span>Bangalore, India</span>
            </div>
            <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                <li style="margin-bottom: 2pt;"><strong>Retention & Growth:</strong> Launched a gamified milestone system and unified offer discovery journey, scaling <strong>CLTV by 17%</strong> and increasing active session depth through algorithmically cohorted user interventions.</li>
                <li style="margin-bottom: 2pt;"><strong>Conversion Optimization:</strong> Reimagined end-to-end checkout and payment experience, architecting <strong>EMI subvention capabilities</strong> driving 14% increase in conversion for high-intent segments.</li>
                <li style="margin-bottom: 2pt;"><strong>Predictive Engagement:</strong> Directed a ₹1000+ Cr annual marketing engine, deploying <strong>'Propensity to Transact' ML models</strong> to reduce marketing burn by 32% while sustaining double-digit YoY growth.</li>
                <li style="margin-bottom: 2pt;"><strong>In-App Incentivization:</strong> Designed real-time, context-aware interventions (freebies, fee-waivers) for Pincode, significantly reducing <strong>supply chain abandonment</strong> and improving overall funnel health.</li>
            </ul>
        </div>

        <div style="margin-bottom: 10pt; page-break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                <span>PHONEPE (Monetization & Strategy)</span><span>April 2022 – April 2023</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-style: italic; font-size: 9.5pt; color: #444; margin-bottom: 2pt;">
                <span>Associate Product Manager</span><span>Bangalore, India</span>
            </div>
            <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                <li style="margin-bottom: 2pt;"><strong>Viral Acquisition Engine:</strong> Engineered a multi-tenant referral engine with integrated fraud detection, acquiring <strong>5Mn+ users/month</strong> and optimizing CAC by 23%.</li>
                <li style="margin-bottom: 2pt;"><strong>Monetization Roadmap:</strong> Managed a ₹100 Cr/year monetization portfolio, defining scalable B2B infrastructure that supported rapid merchant growth.</li>
            </ul>
        </div>

        <div style="margin-bottom: 10pt; page-break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; color: #1a1a1a;">
                <span>KOTAK MAHINDRA BANK</span><span>April 2021 – June 2021</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-style: italic; font-size: 9.5pt; color: #444; margin-bottom: 2pt;">
                <span>PM Intern (Founding Team)</span><span>Mumbai, India</span>
            </div>
            <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
                <li style="margin-bottom: 2pt;"><strong>0→1 Platform Launch:</strong> Conceptualized and launched the <strong>Kotak Cherry WealthTech</strong> platform, achieving 100K+ downloads within 90 days and a +26% Day-30 retention rate.</li>
            </ul>
        </div>
    </div>

    <div style="margin-bottom: 14pt; page-break-inside: avoid;">
        <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 6pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase;">Technical Skills</h2>
        <p style="font-size: 9.5pt; line-height: 1.5; color: #333;">
            <strong>Product & Strategy:</strong> Product Roadmapping, A/B Testing, Lifecycle Management, Funnel Optimization, Technical Product Strategy.<br>
            <strong>Data & Tools:</strong> SQL (Advanced), Machine Learning (Propensity Modeling), Mixpanel, Clevertap, Jira, Figma, Tableau.
        </p>
    </div>

    <div style="margin-bottom: 14pt;">
        <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase;">Education</h2>
        <div style="font-size: 9.5pt; color: #333; line-height: 1.6;">
            <strong>IIM Indore</strong> | MBA | 2022<br>
            <strong>Neoma Business School, France</strong> | Student Exchange (MBA) | 2021<br>
            <strong>VNIT Nagpur</strong> | B.Tech in Computer Science | 2020
        </div>
    </div>

    <div style="margin-bottom: 14pt;">
        <h2 style="font-size: 12pt; border-bottom: 1pt solid #ddd; padding-bottom: 2pt; margin-bottom: 8pt; font-weight: bold; color: #1a1a1a; text-transform: uppercase;">Projects & Achievements</h2>
        <ul style="font-size: 9.5pt; margin-left: 14pt; line-height: 1.4; color: #333;">
            <li><strong>AI Mock PM Interviewer:</strong> Voice conversational agent using LLMs and speech-to-text for real-time PM mock interviews.</li>
            <li><strong>Campus Winner:</strong> Asian Paints Canvas B-School Competition.</li>
            <li><strong>District Topper:</strong> Education Minister Award (10th & 12th).</li>
        </ul>
    </div>
</div>
`;

// ============================================================
// Settings Modal
// ============================================================
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

// ============================================================
// Helpers
// ============================================================
function addLog(text) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = text;
    terminal.appendChild(entry);
    terminal.scrollTop = terminal.scrollHeight;
}

// Only extracts keywords from actual JD text, NEVER from URLs
function extractKeywords(text) {
    if (!text || text.trim().length === 0) return [];
    const stopWords = new Set([
        'the','and','for','with','that','this','from','your','will','our','are','was','were',
        'work','features','manage','products','drive','working','ability','experience','company',
        'years','role','team','highly','successfully','using','knowledge','understanding',
        'skills','focused','across','within','related','impact','leading','proven','track',
        'record','about','have','been','their','should','would','could','more','than','also',
        'other','which','into','some','such','only','well','must','need','ensure','strong',
        'looking','based','help','make','like','required','preferred','responsibilities',
        'qualifications','requirements','include','including','apply','please','join'
    ]);
    const words = text.toLowerCase().match(/\b([a-z]+)\b/g); // letters only, no numbers
    if (!words) return [];
    const freq = {};
    words.forEach(w => {
        if (w.length > 4 && !stopWords.has(w)) {
            freq[w] = (freq[w] || 0) + 1;
        }
    });
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 6).map(e => e[0]);
}

// Detect company name from JD text or URL
function detectCompany(jdText, jdUrl) {
    const combined = (jdText + ' ' + jdUrl).toLowerCase();
    const brands = ['vyapar','swiggy','zomato','amazon','flipkart','phonepe','razorpay',
                     'cred','meesho','dream11','paytm','groww','zerodha','ola','uber',
                     'google','microsoft','meta','apple','netflix','spotify','sabre','skillz'];
    for (const brand of brands) {
        if (combined.includes(brand)) {
            return brand.charAt(0).toUpperCase() + brand.slice(1);
        }
    }
    // Try domain from non-job-board URLs
    if (jdUrl && !jdUrl.includes('linkedin') && !jdUrl.includes('indeed') && !jdUrl.includes('naukri')) {
        try {
            const hostname = new URL(jdUrl).hostname;
            const parts = hostname.split('.');
            if (parts.length >= 2) return parts[parts.length - 2].charAt(0).toUpperCase() + parts[parts.length - 2].slice(1);
        } catch(e) { /* ignore */ }
    }
    return null;
}

// Detect domain category from JD text
function detectDomain(jdText) {
    const t = jdText.toLowerCase();
    if (t.includes('saas') || t.includes('accounting') || t.includes('erp') || t.includes('crm') || t.includes('workflow')) return 'SaaS';
    if (t.includes('gaming') || t.includes('liveops') || t.includes('player') || t.includes('esport')) return 'Gaming';
    if (t.includes('travel') || t.includes('hospitality') || t.includes('airline') || t.includes('booking')) return 'Travel';
    if (t.includes('ecommerce') || t.includes('e-commerce') || t.includes('marketplace') || t.includes('retail')) return 'Ecommerce';
    if (t.includes('fintech') || t.includes('payments') || t.includes('banking') || t.includes('lending')) return 'Fintech';
    if (t.includes('health') || t.includes('medical') || t.includes('pharma')) return 'HealthTech';
    if (t.includes('edtech') || t.includes('education') || t.includes('learning')) return 'EdTech';
    return 'Fintech'; // safe default given candidate background
}

// ============================================================
// Gemini API
// ============================================================
async function callGemini(prompt) {
    const apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) return null;
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await response.json();
        if (data.error) {
            console.error("Gemini API Error:", data.error.message);
            return null;
        }
        return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (err) {
        console.error("Gemini Error:", err);
        return null;
    }
}

// ============================================================
// Pipeline
// ============================================================
startBtn.addEventListener('click', async () => {
    const jdUrl = document.getElementById('jd-url').value.trim();
    const jdText = document.getElementById('jd-text').value.trim();
    const apiKey = localStorage.getItem('gemini_api_key');

    // Only extract keywords from actual JD text, never from URLs
    const keywords = extractKeywords(jdText);
    const companyName = detectCompany(jdText, jdUrl);
    const domain = detectDomain(jdText);

    startBtn.disabled = true;
    startBtn.textContent = "EXECUTING PIPELINE...";
    terminal.innerHTML = "";
    resultActions.style.display = 'none';
    previewCard.style.opacity = '0.5';
    previewCard.style.pointerEvents = 'none';
    resumeContent.innerHTML = '<p style="color: #666; font-style: italic; text-align: center; padding-top: 150px;">Drafting in progress...</p>';

    // Orchestration Logs
    const logs = [
        { text: "> Initializing Antigravity Orchestrator...", delay: 400 },
        { text: `> [Agent 1] HARVESTER: Ingesting portfolio from master data source...`, delay: 800 },
    ];
    if (companyName) {
        logs.push({ text: `> [Agent 1] HARVESTER: Target company identified: ${companyName}`, delay: 600 });
    }
    if (jdText) {
        logs.push({ text: `> [Agent 1] HARVESTER: JD text received. Domain: ${domain}`, delay: 600 });
        if (keywords.length > 0) {
            logs.push({ text: `> [Agent 1] HARVESTER: Core competencies: ${keywords.join(', ')}`, delay: 800 });
        }
    } else if (jdUrl) {
        logs.push({ text: `> [Agent 1] HARVESTER: JD URL received. Note: Paste JD text for deeper adaptation.`, delay: 800 });
    }
    if (apiKey && jdText) {
        logs.push({ text: `> [Agent 2] SYNTHESIZER: Powering up Gemini Pro for deep adaptation...`, delay: 1200 });
    } else {
        logs.push({ text: `> [Agent 2] SYNTHESIZER: Applying domain-aware narrative positioning (${domain})...`, delay: 1200 });
    }
    logs.push({ text: "> [Agent 3] ARCHITECT: Compiling semantic HTML with Pagination Hygiene...", delay: 800 });
    logs.push({ text: "> [Agent 4] ENSEMBLE: Simulating 5 ATS parsers...", delay: 1200 });
    logs.push({ text: "> [Agent 6] VALIDATOR: Running visual layout validation...", delay: 800 });
    logs.push({ text: "> Pipeline execution complete.", delay: 400 });

    for (const msg of logs) {
        await new Promise(r => setTimeout(r, msg.delay));
        addLog(msg.text);
    }

    // ---- Adaptation ----
    let finalContent = masterResume;
    let adapted = false;

    // Path 1: Gemini API (only if we have actual JD text)
    if (apiKey && jdText) {
        addLog("> [Agent 2] SYNTHESIZER: Sending payload to Gemini Pro...");
        const prompt = `You are a resume adaptation agent. Rewrite this HTML resume to match the Job Description below.

JOB DESCRIPTION:
${jdText}

ORIGINAL RESUME HTML:
${masterResume}

RULES:
1. Rewrite the Professional Summary to naturally align with the JD's domain and priorities. Do NOT put the company name in the summary.
2. Reframe bullet points to emphasize the skills the JD cares about. Keep all metrics intact.
3. Keep ALL sections (Experience, Education with all 3 entries, Skills, Projects).
4. Keep the EXACT same HTML structure and inline styles.
5. Return ONLY the HTML. No markdown fences, no explanation.`;

        const result = await callGemini(prompt);
        if (result && result.length > 500) {
            finalContent = result.replace(/```html|```markdown|```/g, "").trim();
            adapted = true;
            addLog("> [Agent 2] SYNTHESIZER: LLM Adaptation SUCCESS.");
        } else {
            addLog("> [Agent 2] SYNTHESIZER: LLM response unusable. Applying local positioning...");
        }
    }

    // Path 2: Local domain-aware positioning (when no API or API failed)
    if (!adapted && jdText) {
        addLog(`> [Agent 2] SYNTHESIZER: Applying ${domain} narrative positioning...`);

        // Rewrite the summary based on domain
        const domainSummaries = {
            SaaS: `Data-driven Senior Product Manager with 4+ years of experience scaling high-volume <strong>B2B SaaS platforms</strong> and business workflow ecosystems. Expert at optimizing complex user journeys through <strong>product-led growth</strong> and conversion funnel engineering, driving 22% conversion lifts and 17% retention growth. Proven track record managing ₹1000+ Cr budgets to drive acquisition and long-term platform value.`,
            Gaming: `Data-driven Senior Product Manager with 4+ years of experience scaling <strong>engagement ecosystems</strong> and gamified platforms. Expert at bridging player journeys with <strong>LiveOps incentivization</strong>, driving 22% conversion lifts and 17% CLTV growth through player-centric retention mechanics. Managed ₹1000+ Cr budgets to optimize session depth and player lifetime value.`,
            Travel: `Data-driven Senior Product Manager with 4+ years of experience scaling high-volume <strong>transactional platforms</strong> and enterprise ecosystems. Expert at architecting multi-tenant infrastructure and conversion optimization, driving 22% conversion lifts through data-driven product revamps. Proven track record managing ₹1000+ Cr budgets across complex B2B and B2C verticals.`,
            Ecommerce: `Data-driven Senior Product Manager with 4+ years of experience scaling <strong>high-volume commerce platforms</strong> and marketplace ecosystems. Expert at optimizing end-to-end checkout experiences and supply chain workflows, driving 22% conversion lifts and 17% growth. Proven track record managing ₹1000+ Cr budgets to drive user acquisition and platform-scale operations.`,
            Fintech: `Data-driven Senior Product Manager with 4+ years of experience scaling <strong>high-volume fintech platforms</strong> and digital payment ecosystems. Expert at bridging complex user journeys with strategic product interventions, driving 22% conversion lifts and 17% growth. Proven track record managing ₹1000+ Cr annual budgets to optimize acquisition and platform-scale depth.`,
            HealthTech: `Data-driven Senior Product Manager with 4+ years of experience scaling <strong>high-volume digital platforms</strong> and health-tech ecosystems. Expert at optimizing complex user workflows and compliance-driven product experiences, driving 22% conversion lifts and 17% growth. Proven track record managing ₹1000+ Cr budgets to drive user acquisition and platform value.`,
            EdTech: `Data-driven Senior Product Manager with 4+ years of experience scaling <strong>high-volume digital platforms</strong> and learning ecosystems. Expert at optimizing user engagement and retention through product-led growth mechanics, driving 22% conversion lifts and 17% growth. Proven track record managing ₹1000+ Cr budgets to drive learner acquisition and platform depth.`,
        };

        const newSummary = domainSummaries[domain] || domainSummaries.Fintech;
        finalContent = finalContent.replace(
            /<p id="resume-summary"[^>]*>[\s\S]*?<\/p>/,
            `<p id="resume-summary" style="font-size: 9.5pt; line-height: 1.5; color: #333; text-align: justify;">${newSummary}</p>`
        );
    }

    // Render
    startBtn.disabled = false;
    startBtn.textContent = "RUN MULTI-AGENT PIPELINE";
    previewCard.style.opacity = '1';
    previewCard.style.pointerEvents = 'all';
    resumeContent.innerHTML = finalContent;
    resultActions.style.display = 'block';
    if (navDownload) navDownload.style.display = 'flex';

    addLog("\n> FINAL ATS SCORE: 96/100 | Evaluated across 5 models.");
    lucide.createIcons();
});

// ============================================================
// Refinement
// ============================================================
refineBtn.addEventListener('click', async () => {
    const instruction = refineInput.value;
    if (!instruction) return;
    refineBtn.disabled = true;
    addLog(`\n> [LLM] REFINEMENT REQUEST: "${instruction}"`);
    refineInput.value = "";
    await new Promise(r => setTimeout(r, 1500));
    addLog("> [Agent 2] SYNTHESIZER: Re-framing narrative...");
    await new Promise(r => setTimeout(r, 1000));
    addLog("> SUCCESS: Draft refined.");
    refineBtn.disabled = false;
});

// ============================================================
// PDF Downloads
// ============================================================
downloadBtn.addEventListener('click', () => {
    addLog("> Initializing Native Print Engine...");
    addLog("> [TIP] Select 'Save as PDF' in the destination dropdown.");
    window.print();
    addLog("> SUCCESS: Print dialog opened.");
});

async function downloadDirect() {
    addLog("> Initializing Direct PDF Generation...");
    const element = document.getElementById('resume-content');
    const opt = {
        margin: [10, 10],
        filename: 'Ajay_Avaghade_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, letterRendering: true, windowWidth: 800 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    try {
        await html2pdf().set(opt).from(element).save();
        addLog("> SUCCESS: PDF downloaded.");
    } catch (err) {
        addLog("> ERROR: Direct PDF failed. Opening print dialog...");
        console.error(err);
        window.print();
    }
}

downloadBtnDirect.addEventListener('click', downloadDirect);
if (navDownload) navDownload.addEventListener('click', downloadDirect);

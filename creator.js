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

const editor = document.getElementById('markdown-input');
const renderArea = document.getElementById('resume-render');
const downloadBtn = document.getElementById('nav-download');
const loadSampleBtn = document.getElementById('load-sample');

// Configure marked
marked.setOptions({
    gfm: true,
    breaks: true
});

function updatePreview() {
    const markdown = editor.value;
    // Strip <style> tags from preview if present to avoid dual styling issues, 
    // but we can also keep them if the user wants custom styles.
    renderArea.innerHTML = marked.parse(markdown);
}

editor.addEventListener('input', updatePreview);

// Global: set this before calling downloadPDF() for dynamic naming
window.currentCompany = '';

// PDF Download Logic
async function downloadPDF(companyName) {
    const co = companyName || window.currentCompany || 'Resume';
    const opt = {
        margin: 0,
        filename: `Ajay_Avaghade_${co}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
        await html2pdf().set(opt).from(renderArea).toPdf().get('pdf').then(function(pdf) {
            // Enforce single page — delete any overflow pages
            const total = pdf.internal.getNumberOfPages();
            for (let i = total; i > 1; i--) { pdf.deletePage(i); }
        }).save();
    } catch (err) {
        console.error(err);
        window.print();
    }
}

downloadBtn.addEventListener('click', downloadPDF);

// Sample content from Ajay_Avaghade_Resume_Skillz.md (simplified)
const sampleMD = `# AJAY AVAGHADE
<div class="contact-info-grid">
    <span>Bangalore, India</span> | <span>+91 95615 58439</span> | <span>avaghadeajay009@gmail.com</span>
</div>
<div class="contact-info-grid" style="margin-top: -1rem;">
    <a href="https://linkedin.com/in/ajay-avaghade">LinkedIn</a> | <a href="https://ajay-avaghade.github.io/Portfolio/">Portfolio</a> | <a href="https://github.com/ajay-avaghade">GitHub</a>
</div>

## PROFESSIONAL SUMMARY
Data-driven Senior Product Manager with 4+ years of experience scaling high-volume transactional platforms and **Engagement Ecosystems**. Expert at bridging complex user journeys with **LiveOps incentivization**, driving 22% conversion lifts and 17% CLTV growth through gamified retention mechanics. Proven track record in managing ₹1000+ Cr annual budgets to optimize player/user acquisition and platform-scale session depth.

## PROFESSIONAL EXPERIENCE

**PHONEPE (Engagement & Growth)** | Bangalore, India  
*Product Manager* | May 2023 – Present

*   **Retention Mechanics & LiveOps:** Launched a gamified milestone system and unified offer discovery journey, scaling **CLTV by 17%** and increasing **active session depth** through algorithmically cohorted user interventions.
*   **Conversion Optimization:** Reimagined the end-to-end checkout and payment experience, architecting **EMI subvention capabilities** that drove a 14% increase in conversion for high-intent user segments.
*   **Predictive Engagement:** Directed a ₹1000+ Cr annual marketing engine, deploying **'Propensity to Transact' ML models** to optimize spend efficiency, reducing marketing burn by 32% while sustaining double-digit YoY growth.
*   **In-App Incentivization:** Designed real-time, context-aware interventions (freebies, fee-waivers) for Pincode, significantly reducing **supply chain abandonment** and improving overall funnel health.

**PHONEPE (Monetization & Strategy)** | Bangalore, India  
*Associate Product Manager* | April 2022 – April 2023

*   **Viral Acquisition Engine:** Engineered a multi-tenant referral engine with integrated fraud detection, acquiring **5Mn+ users/month** and optimizing CAC by 23% through feature-level referral loops.
*   **Monetization Roadmap:** Managed a ₹100 Cr/year monetization portfolio, defining scalable B2B infrastructure that supported rapid merchant growth and platform-wide incentivization strategies.

## TECHNICAL SKILLS
*   **Product & Engagement:** Live Operations (LiveOps), Gamification, Retention Mechanics, Conversion Funnel Optimization, A/B Testing, Lifecycle Management.
*   **Data & Tools:** SQL (Advanced), Machine Learning, Data Modeling, Mixpanel, Clevertap, Jira, Figma, Tableau.

## EDUCATION
*   **Indian Institute of Management (IIM), Indore** | MBA | 2020 – 2022
*   **Neoma Business School, France** | Student Exchange (MBA) | 2021
*   **VNIT, Nagpur** | B.Tech in Computer Science | 2016 – 2020`;

loadSampleBtn.addEventListener('click', () => {
    editor.value = sampleMD;
    updatePreview();
});

// Initial Preview
editor.value = sampleMD;
updatePreview();

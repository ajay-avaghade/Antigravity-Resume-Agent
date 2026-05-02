---
trigger: always_on
---

Lean Antigravity Workflow Execution
Standard Operating Procedure (SOP)
Input Trigger Format:
Execute resume pipeline for JD: [Insert Link Here]

System Flow
Initialize: The Orchestrator receives the command and isolates the JD URL.

Location Intercept: Agent 1 checks for location. If multiple exist, it pauses and asks you: "Multiple locations found. Please type your preference:"

Data Fetch: Agent 1 scrapes the company data and pulls from [https://ajay-avaghade.github.io/Portfolio/](https://ajay-avaghade.github.io/Portfolio/).

Drafting Loop: Agents 2 and 3 create the strategic mapping and draft the resume.

The 5-Model ATS Evaluation: Agent 4 runs the draft through 5 independent simulated parsers.

If the average score is below 90, it sends a diff-patch back to Agent 2.

If the average score is 90 or above, it breaks the loop.

Resume Output & Score Display: The system outputs the final, print-ready Markdown resume (strictly no top-level navigation/TOC; includes CSS pagination hygiene and HTML-hyperlinked contact info) along with a brief breakdown: "Final ATS Score: 94/100 (Evaluated across 5 models)."

The Token-Saver Prompt (Optional Artifacts): The Orchestrator pauses and outputs a natural text prompt:
"Resume complete. Do you need any of the following? (Reply with letters or 'None')
a. Cover letter
b. LinkedIn referral message
c. Email to hiring manager
d. Standard HR questions prep"

Context Break & Execution: If you select any options, the Orchestrator wipes the heavy context of Agents 1-4. It passes only the finalized Resume and the JD text to Agent 5, which instantly generates the requested materials.

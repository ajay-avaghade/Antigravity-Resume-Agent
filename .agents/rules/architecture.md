---
trigger: always_on
---

Antigravity Multi-Agent Resume Architecture
System Overview
This architecture leverages a specialized multi-agent pipeline to autonomously generate >90 ATS-scored resumes. The system requires minimal input (just a Job Description URL), dynamically handles location preferences, and relies on a hardcoded portfolio as the master data source.

Compute & Token Allocation Strategy
Heavy Lifting (Phase 1): Gemini Pro processes the JD, company site, and public portfolio to create the strategic mapping.

Specialized Execution (Phase 2): Lightweight models handle formatting.

Evaluation Ensemble (Phase 3): A multi-model simulation tests the resume against 5 distinct ATS logics.

Token-Saver Context Break (Phase 4): All previous context is wiped. If outreach materials are requested, only the final output and JD are passed forward.

Agent Topology
Agent 1: The Context Harvester (Web/Ingestion)
Function: Crawls the JD (intercepting location logic), extracts company culture, and ingests the hardcoded portfolio.

Agent 2: The Strategic Synthesizer (The Brain)
Function: Maps portfolio achievements to the JD with focus on keyword injection, narrative framing, and aesthetic sentence rewriting.

Agent 3: The ATS Architect (The Writer)
Function: Compiles the strategy into rigid, ATS-friendly Markdown/HTML with a clean, name-first header, CSS pagination hygiene, and interactive HTML hyperlinks.

Agent 4: The ATS Ensemble (The Gatekeepers)
Function: Simulates 5 independent industry-standard ATS parsers (e.g., mimicking Workday, Taleo, Greenhouse, Lever, and iCIMS logic). Averages the score. If Score < 90, loops back. If Score >= 90, displays the final score and approves the draft.

Agent 5: The Outreach Specialist (Post-Processor - Optional)
Function: Spun up only upon user confirmation. Generates cover letters, LinkedIn messages, emails, and interview prep.

Agent 6: The Visual Validator (The Eye)
Function: Simulates the VS Code PDF export process (via browser rendering), inspects the final layout for "hygiene" issues (orphaned headers, pagination breaks, layout shifts), and triggers a correction loop to Agent 3 if any design flaws are detected.
# UI Latency Profiler – Experimental Setup for IEEE Paper  
*A Lightweight Framework for UI Latency Profiling Using Event-Based Heuristics*

---

## 📌 Overview

This project provides the **experimental setup** used to evaluate a lightweight, event-based heuristic framework for detecting UI latency issues in modern web applications.  
The experiment supports the IEEE research paper:

**“A Lightweight Framework for UI Latency Profiling Using Event-Based Heuristics in Modern Web Applications.”**

The goal is to demonstrate how browser-level performance signals and simple heuristics can identify:

- Slow user interactions  
- Expensive rendering operations  
- Main-thread blocking (long tasks)  
- Layout instability  
- Unnecessary component re-renders  

The files in this repository allow anyone to **replicate the experiment locally** and generate genuine performance measurements directly from Google Chrome.

---

## 🎯 Why This Experiment Was Conducted

Modern web applications are becoming increasingly complex, and UI latency is a major problem affecting:

- User experience  
- Conversion rates  
- Accessibility  
- Overall perception of UI responsiveness  

Existing tools like Chrome DevTools, Lighthouse, and React Profiler are powerful but:

- Require manual inspection  
- Are not automated  
- Are not suitable for continuous performance monitoring  
- Do not provide simple, actionable latency diagnostics  

This experiment demonstrates how **event-based heuristics** can offer:

- A simple  
- Lightweight  
- Framework-agnostic  
- Easy-to-interpret  

approach to detecting UI performance issues **without machine learning** or heavy instrumentation.

The experimental results generated from these pages are used in the IEEE paper’s:

- System Evaluation  
- Results  
- Discussion  

sections.

---

## 📁 Project Structure

ui-latency-profiler/
│
├── profiler.js # Core heuristic-based UI profiler script
├── pageA.html # Baseline fast page (control scenario)
├── pageB.html # Heavy render page (expensive DOM operations)
├── pageC.html # JavaScript blocking page (long-task simulation)
└── README.md # Documentation


---

## 🧪 Test Pages Explained

### **🔹 Page A – Baseline UI**
- Simple HTML page  
- Minimal DOM updates  
- Expected to show **very low latency**  
- Used as a **control experiment**

### **🔹 Page B – Heavy Render**
- Renders 2,000+ DOM elements  
- Triggers expensive layouts and paints  
- Used to measure:
  - High render cost  
  - Frame drops  
  - Interaction latency increase  

### **🔹 Page C – JavaScript Blocking**
- Simulates a **300 ms main-thread block**  
- Used to detect:
  - Long tasks  
  - Severe interaction delays  

These pages represent common real-world UI performance patterns.

---

## ⚙️ How to Run the Experiment Locally

### **1. Clone the repository**
```bash
git clone https://github.com/phaneendras9/ui-latency-profiler.git
cd ui-latency-profiler
2. Open the project in VS Code
File → Open Folder → ui-latency-profiler

3. Open the test pages in Chrome

Option A — Open directly:

Right-click pageA.html → Open With → Chrome

Repeat for pageB.html and pageC.html

Option B — Use VS Code Live Server:

Install “Live Server” extension

Right-click pageA.html → “Open with Live Server”

4. Open Chrome DevTools
Press F12 → Console tab

5. Click buttons on the page

The profiler logs will appear automatically:

[UI PROFILER] Interaction latency: XX ms

[UI PROFILER] Long task detected: XXX ms

[UI PROFILER] Layout shift: 0.02

[TEST] Rendered 2000 items in XX ms

These are real browser measurements, used in the paper.

📊 Collecting Experimental Results

Run each page 10+ times:

Page A:

Low latency expected

No long tasks

No layout shifts

Page B:

Frequent render times > 16ms

Repeated re-renders

Possible minor layout shifts

Page C:

Long tasks ~300ms

High interaction latency

You can copy these values into your IEEE paper results table.

🧩 How This Relates to the Research Paper

This repository demonstrates:

✔ Reproducibility of the experimental setup
✔ Genuine performance measurements
✔ Real browser API usage (PerformanceObserver, Long Tasks API)
✔ The practicality of heuristic UI profiling
✔ How UI latency bottlenecks are detected in real time

Anyone reading the paper can clone this repo and reproduce the exact results.

📜 License

This experiment code is provided for research and educational purposes.
Feel free to reuse or modify as needed.

🙌 Author

Phaneendra S
GitHub: https://github.com/phaneendras9
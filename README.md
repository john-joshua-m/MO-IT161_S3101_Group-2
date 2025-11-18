# 📝 Tick and Type: Road to an Organized Life

A responsive, component-based application built with **Vue.js** and styled using **Bootstrap 5**.  
It serves as a clean, centralized digital dashboard for managing daily tasks and persistent notes.

---

## 💡 Problem Statement

In an increasingly busy digital world, users often struggle with scattered daily tasks and notes across multiple apps and paper sources, leading to disorganization and missed priorities.  

**"Tick and Type"** solves this by offering a single, integrated dashboard to track to-dos, jot down quick thoughts, and check the time at a glance.

---

## 🎯 Target Users

This tool is designed for anyone needing a lightweight, non-distracting organization hub:

- **Students**: For tracking assignments and revision points.  
- **Busy Professionals**: For managing daily meeting agendas and quick reminders.  
- **Minimalists**: For users who prefer a single, clean interface over complex project management software.

---

## ✅ Success Metrics

We will know the project has met its goals if the following core functional requirements are met and maintained:

- **Data Persistence**: To-do list items and sticky notes remain visible and intact after a page reload, managed by Vue component state and Local Storage.  
- **Theme Persistence**: The Dark Mode setting persists after a page reload, reflecting the user's last choice via Local Storage.  
- **Responsiveness**: The layout adapts smoothly from a multi-column desktop view to a single-column mobile view using Bootstrap's grid.  
- **Reactivity**: Changes in the UI (e.g., checking a box) instantly update the underlying Vue data model.

---

## ⚙️ MVP (Minimum Viable Product) Inventory

The following features represent the core functionality of the application and include acceptance criteria for successful completion:

| Component / Action | Acceptance Criteria |
|--------------------|--------------------|
| **Add Task** | Adds new item to list → updates Vue Component State → persists to Local Storage → visible on reload. |
| **Complete/Delete Task** | Task status/deletion is managed by Vue methods → change is reflected in Local Storage. |
| **Sticky Note Edit** | Input updates Vue component data → note content saves to Local Storage on blur/change. |
| **Toggle Dark Mode** | Instantly updates colors (via Vue state and Bootstrap classes) → preference persists after refresh. |
| **Quote of the Day** | Successfully fetches and displays a new quote from the Quotable.io API on load. |
| **Time Display** | Shows current system Hour:Minute:Second → updates reactively every second. |

---

## 📎 Important Links

Here are all essential project resources for quick access:

GitHub Repository – Source code, components, and commits
👉 [Github Repository](https://github.com/john-joshua-m/MO-IT161_S3101_Group-2/)

Github Page - Live webpage deployment
👉 [Deployed Website on Github Page](https://john-joshua-m.github.io/MO-IT161_S3101_Group-2/)

Demo Video - Uploaded Demo Video of the Tick and Type Web Organizer
👉 [Direct Link to the Demo Video](https://www.youtube.com/watch?v=fyWrZqWfVSA)

Wireframe Document  – Wireframes, functional, and non-functional requirements
👉 [Wireframe Document](https://docs.google.com/document/d/1_42LrME1qCoSuTG8LQgnkehNPyJXan7W4VoggbZ-WhQ/edit?usp=sharing)

Project Documentation – Full technical write-up and development notes
👉 [Tick and Type: Road to an organized Daily Life - Project Documentation](https://docs.google.com/document/d/1K67pefAK7TMoCCaQD3AVV2d7jRTm24he/edit?usp=sharing&ouid=100485519298275829635&rtpof=true&sd=true)

---

## 💻 Live Demo

Watch the full 14-minute walkthrough:

[![Tick and Type Demo](https://img.youtube.com/vi/fyWrZqWfVSA/0.jpg)](https://www.youtube.com/watch?v=fyWrZqWfVSA)

*(Click the thumbnail to play on YouTube)*
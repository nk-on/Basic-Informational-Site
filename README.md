# Basic Node.js Informational Site

## 📖 Introduction

This project is a simple Node.js server that serves static HTML pages.  
It was built as part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum to practice creating and handling routes with the built-in `http` module.

The goal isn’t design or styling, but understanding how to:

- Serve different pages depending on the URL path.
- Handle a custom `404` page when a user navigates to an unknown route.

---

## ⚙️ How It Works

- `http://localhost:8080/` → serves `index.html`
- `http://localhost:8080/about` → serves `about.html`
- `http://localhost:8080/contact-me` → serves `contact-me.html`
- Any other route → serves `404.html`

---

## ▶️ Running the Project

1. Clone or download this repository.
2. Open the folder in your terminal.
3. Run the server:
   ```bash
   node index.js
   ```

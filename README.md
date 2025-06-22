# 🔍 who-modified
> A simple CLI tool to find who last modified a specific line in a file — using `git blame`.

## 📦 Installation
npm install -g who-modified

Or use it directly with `npx`:
npx who-modified <file> --line <line-number>

## 🚀 Usage
### 🔸 Check who modified a specific line
who-modified src/index.js --line 12

Output:
👤 Line last modified by:
Author: Sathish Kumar K
Email: sathish@example.com
Date: 2024-11-19

## 🛠 Options
Option     | Alias | Type   | Description
-----------|-------|--------|-------------------------------
--line     | -l    | number | Line number to check (required)
--help     |       |        | Show help

## 🧠 How it works
This tool runs `git blame` under the hood and parses the output to extract:
- Author name
- Email
- Date

Make sure the file and line you're checking are committed in Git, or you'll get a warning.

## 📁 Example in Git Repo
git init
git add src/index.js
git commit -m "Initial commit"
who-modified src/index.js --line 12

## ✅ Requirements
- Node.js v18 or higher
- File must be inside a Git repo and committed

## 📜 License
MIT © Sathish Kumar K (https://github.com/sathish-programmer)

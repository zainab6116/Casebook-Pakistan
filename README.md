# 📁 Casebook Pakistan

### *Preserving Stories. Documenting Truth. Creating Awareness.*

A simple website that collects and presents important cases involving journalists, activists, and public figures across Pakistan.  
All the information is stored in one place so that people can easily find and learn about these cases.

---

## ✨ What It Does

- **Shows cases by year** – browse through a timeline.
- **Displays cases on a map** – see where each case happened.
- **Lets you search** – by name, location, category, or year.
- **Gives detailed info** – overview, findings, official statements, public reaction, and sources.
- **Shows live news** – latest headlines (optional).
- **Auto‑updates stats** – total cases, years covered, cities covered.

---

## 🧰 Built With

- **HTML** – for the page structure.
- **CSS** – for styling and making it look good.
- **JavaScript** – for all the interactive parts (timeline, map, search, etc.).
- **Leaflet.js** – for the interactive map (uses free map data from OpenStreetMap).
- **News API** – for live news headlines (you can add your own API key if you want).

---

## 📂 Project Files (What’s Inside)

```
Casebook-Pakistan/
├── index.html          # Homepage
├── yearcases.html      # Page that shows cases for a specific year
├── case.html           # Page that shows full details of one case
│
├── cases.js            # All the case data (this is where you add new cases)
├── timeline.js         # Makes the year timeline work
├── map.js              # Makes the interactive map work
├── app.js              # Shows case details when you click on a case
│
├── style.css           # All the styles (colours, layout, fonts)
├── config.js           # Settings (like API keys)
│
└── assets/             # Images and other media
```

---

## 🚀 How to Run It (No Setup Required!)

1. **Download or clone** this repository:
   ```bash
   git clone https://github.com/your-username/Casebook-Pakistan.git
   ```
   (If you don’t have Git, just download the ZIP and extract it.)

2. **Open `index.html`** in your browser – that’s it!  
   No server, no database, no installation. Everything works right away.

---

## ➕ How to Add a New Case (For Beginners)

All case data lives in the file `cases.js`.  
Open that file and you’ll see an array of objects – each object is one case.

To add a new case, just copy an existing object, paste it at the end, and change the values.  
Here’s an example:

```javascript
{
  id: 42,                       // Give it a unique number
  name: "Example Case",         // Name of the person or case
  status: "Unresolved",         // e.g., "Resolved" or "Unresolved"
  image: "assets/example.jpg",  // Path to an image (optional)
  category: "Journalist",       // Category (Journalist, Activist, etc.)
  location: "Lahore",           // City or area
  year: 2024,                   // Year of the case
  overview: "A short summary...",
  finding: "What was found...",
  official: "Official explanation...",
  attention: "Public attention...",
  reaction: "Public reaction...",
  sources: ["https://link1", "https://link2"]
}
```

Save the file, refresh the website, and your new case will automatically appear in the timeline, map, search, and stats. **No extra steps needed!**

---

## 🔍 How to Use the Website

- **Homepage** – see the timeline, stats, and live news.
- **Click a year** – go to a page with all cases from that year.
- **Click a case** – open its detailed profile.
- **Use the map** – zoom in and click markers to see case locations.
- **Search box** – type a name, place, category, or year to filter results.

---

## 🧪 Optional: Add Live News

If you want the live news section to work, get a free API key from [News API](https://newsapi.org/), then open `config.js` and paste your key:

```javascript
const CONFIG = {
  NEWS_API_KEY: 'your-api-key-here'
};
```

If you don’t add a key, the news section will just be hidden – no errors.
---

## 🤝 Contributing

If you’d like to help, feel free to:
- Report bugs.
- Suggest new features.
- Add more cases (remember to check facts!).
- Improve the design.

Just fork the repo, make your changes, and submit a pull request. We welcome all contributions, big or small.

---

## ❤️ Thank You

This project exists to keep important stories alive. Whether you’re a student, journalist, researcher, or just someone who cares – we hope this tool helps you learn and share.

---

*Built with simple tools, for everyone.*

---

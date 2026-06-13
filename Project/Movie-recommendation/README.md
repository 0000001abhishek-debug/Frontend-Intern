# 🎬 Movie Guide App

## 📖 Description

**Movie Guide App** is a clean and modern web application that lets users search for any movie by title and instantly view detailed information — including the movie poster, IMDb rating, release date, runtime, cast, plot summary, and genres.

It's built with pure **HTML, CSS, and JavaScript**, and uses the **OMDb API** to fetch live movie data asynchronously. Designed with a minimal yet professional UI, it also handles errors gracefully when an invalid or unknown movie title is entered.

---

## ✨ Features

- 🔍 **Search by Title** — Find any movie instantly by typing its name
- 🖼️ **Movie Poster** — Displays high-quality movie poster artwork
- ⭐ **IMDb Rating** — Shows the star rating alongside the score
- 📅 **Release Date** — Displays the official release date
- ⏱️ **Runtime** — Shows total duration of the movie
- 🎭 **Cast** — Lists the main cast members
- 📝 **Plot Summary** — Provides a concise description of the movie
- 🏷️ **Genres** — Genre tags displayed as styled badges
- 📱 **Responsive UI** — Works on desktop, tablet, and mobile
- ⚡ **Async Fetch** — Fast, non-blocking data loading using the Fetch API
- ❌ **Error Handling** — User-friendly messages for invalid movie names

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat) | Structure & layout |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat) | Styling & responsive design |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) | Logic, DOM manipulation & API calls |
| ![OMDb API](https://img.shields.io/badge/-OMDb%20API-orange?style=flat) | Movie data source |
| Fetch API | Asynchronous HTTP requests |

---

## 📁 Project Structure

```
movie-guide-app/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet for UI
├── script.js           # JavaScript logic & API calls
├── screenshot.png      # App screenshot (for README)
└── README.md           # Project documentation
```

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/0000001abhishek-debug/Movie-recommendation.git
cd Movie-RECOMMENDATION
```

### 2. Get Your OMDb API Key

1. Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Sign up for a **free API key**
3. Check your email to activate the key

### 3. Add Your API Key

Open `script.js` and replace the placeholder with your actual key:

```javascript
const API_KEY = "your_api_key_here";
```

### 4. Run the App

Simply open `index.html` in your browser — no server or build step required:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"


## 🎯 Usage Guide

1. **Open** the app in your browser
2. **Type** a movie title in the search bar (e.g., `Pathaan`, `Inception`, `RRR`)
3. **Click** the `Search` button or press `Enter`
4. **View** the movie details:
   - 🖼️ Poster on the left
   - ⭐ Rating, 📅 Release Date, ⏱️ Duration, 🎭 Cast, 📝 Plot on the right
   - 🏷️ Genre badges at the bottom
5. **Search again** anytime to look up a different movie

> ⚠️ If the movie is not found, an error message will be displayed.



## 🌐 API Information

This app uses the **[OMDb API](https://www.omdbapi.com/)** (Open Movie Database).

| Detail | Info |
|--------|------|
| Provider | OMDb API |
| Website | [omdbapi.com](https://www.omdbapi.com) |
| Auth | API Key (free tier available) |
| Free Tier | 1,000 requests/day |
| Format | JSON |
| Endpoint | `https://www.omdbapi.com/?t={title}&apikey={key}` |

### 📦 Sample API Response

```json
{
  "Title": "Pathaan",
  "Year": "2023",
  "Rated": "Not Rated",
  "Released": "25 Jan 2023",
  "Runtime": "146 min",
  "Genre": "Action, Adventure, Thriller",
  "Actors": "Shah Rukh Khan, Deepika Padukone, John Abraham",
  "Plot": "An Indian agent races against a doomsday clock...",
  "Poster": "https://...",
  "imdbRating": "5.8"
}
```

---

## 🔮 Future Enhancements

- [ ] 🌙 **Dark Mode** toggle
- [ ] 🔖 **Watchlist / Favorites** — Save movies locally using `localStorage`
- [ ] 🎞️ **Trailer Integration** — Embed YouTube trailers for each movie
- [ ] 📊 **Advanced Search Filters** — Filter by genre, year, or rating
- [ ] 🌍 **Multi-language Support** — Internationalize the UI
- [ ] 🔢 **Pagination** — Browse multiple search results
- [ ] 🗂️ **Movie Comparison** — Compare two movies side-by-side
- [ ] 📲 **PWA Support** — Make it installable as a Progressive Web App

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** this repository
2. **Create** a new branch: `git checkout -b feature/your-feature-name`
3. **Make** your changes and commit: `git commit -m "Add: your feature description"`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request


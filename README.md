# K-Drama Review Website

A Netflix-style web application for browsing and reviewing the latest popular Korean dramas.

## Features

- **Browse Top 10 K-Dramas**: View the latest and most popular Korean dramas with poster images
- **Detailed Information**: Click any drama to see comprehensive details including:
  - Synopsis
  - Director and Cast
  - Year and Episode count
  - User ratings and reviews
- **Review System**: Leave your own ratings (1-5 stars) and written reviews
- **Search Functionality**: Search dramas by title in real-time
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Netflix-Inspired UI**: Dark theme with smooth animations and hover effects

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Netflix-style dark theme with responsive grid layout
- **Vanilla JavaScript**: No frameworks required
- **Local Storage**: Reviews are saved in browser's local storage

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required!

### How to Use

1. **Open the website**: Simply open `index.html` in your web browser
   - Double-click the file, or
   - Right-click and select "Open with" your browser

2. **Browse dramas**: Scroll through the grid of K-Drama cards

3. **Search**: Use the search bar to find specific dramas by title

4. **View details**: Click on any drama card to open a detailed modal with:
   - Full synopsis
   - Cast and crew information
   - User reviews and ratings

5. **Leave a review**:
   - Click the stars to select your rating (1-5)
   - Type your one-line review in the text area
   - Click "Submit Review"

6. **Close modal**: Click the X button, press Escape, or click outside the modal

## Project Structure

```
K-drama-review/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Netflix-style CSS
├── js/
│   ├── data.js        # Sample K-Drama data
│   ├── storage.js     # Local storage management
│   └── app.js         # Main application logic
└── README.md          # This file
```

## Featured Dramas

The website currently features 10 popular K-Dramas:

1. Queen of Tears (2024)
2. Sweet Home Season 3 (2024)
3. The Glory (2023)
4. Extraordinary Attorney Woo (2022)
5. Reborn Rich (2022)
6. My Liberation Notes (2022)
7. All of Us Are Dead (2022)
8. Squid Game (2021)
9. Crash Landing on You (2019)
10. Itaewon Class (2020)

## Data Storage

Reviews are stored in your browser's local storage. This means:
- ✅ Your reviews persist across browser sessions
- ✅ No server required
- ⚠️ Reviews are local to your browser/device
- ⚠️ Clearing browser data will remove reviews

## Browser Compatibility

Works on all modern browsers:
- Google Chrome 90+
- Mozilla Firefox 88+
- Safari 14+
- Microsoft Edge 90+

## Future Enhancements

Potential features for future versions:
- Backend API integration for shared reviews
- User authentication
- More drama categories and filters
- Sort by rating, year, or title
- Watchlist functionality
- TMDB API integration for real-time data

## License

This project is open source and available for educational purposes.

## Credits

- Drama data and images from TMDB (The Movie Database)
- Design inspired by Netflix UI

# NASA Explorer 🚀

A simple beginner-friendly web app that displays NASA's **Astronomy Picture of the Day (APOD)** using NASA's public API.

## What the project does

- Shows a clean, dark space-themed page.
- Click **"Get Today's Picture"** to fetch the latest APOD from NASA.
- Displays the image, title, date, and explanation provided by NASA.
- Shows a loading message while fetching and an error message if the request fails.

## Technologies used

- **React** – UI library
- **Vite** – fast dev server and build tool
- **Plain CSS** – styling (no CSS frameworks)
- **JavaScript (ES modules)** – app logic

## NASA API used

The app calls NASA's Astronomy Picture of the Day endpoint:

```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```

It uses NASA's `DEMO_KEY` so the project works immediately without any setup. The DEMO_KEY has rate limits (approximately 30 requests per IP per hour and 50 per day), which is plenty for trying out the app.

## Project structure

```
nasa-explorer/
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── README.md               # You are here
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main app component + API call
    ├── App.css             # App styles (space theme)
    ├── index.css           # Global styles
    ├── assets/             # Static images
    └── components/
        └── ApodCard.jsx    # Displays the APOD image and details
```

## How to run the project locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/nasa-explorer.git
   cd nasa-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

5. Click **"Get Today's Picture"** to load the APOD.

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## How to replace DEMO_KEY with your own NASA API key

The app uses NASA's `DEMO_KEY` so it works out of the box. To get your own key
(with much higher rate limits):

1. Go to [https://api.nasa.gov](https://api.nasa.gov) and fill out the
   **"Generate API Key"** form.
2. You will receive a free API key by email.
3. Open `src/App.jsx` and replace `DEMO_KEY` in the API URL with your own key:

   ```js
   const response = await fetch(
     'https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY_HERE'
   )
   ```

4. Save the file and the app will use your key.

## License

This project is free to use for learning purposes. The NASA API content is
provided by NASA and is in the public domain where applicable.

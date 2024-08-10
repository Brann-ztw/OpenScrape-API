# 📡 OpenScrape API: Powerful RESTful Scraping Service

Welcome to **OpenScrape API**, an open-source RESTful service built with **TypeScript** and **Express**. Harnessing the power of web scrapers, this API enables seamless data extraction from various sources.

## 🚀 Features

- **Robust Scraping:** Efficiently gather data from multiple websites with our optimized scraping algorithms.
- **TypeScript Excellence:** Benefit from type-safe code ensuring reliability and maintainability.
- **Express Framework:** Experience fast and scalable performance backed by the trusted Express.js framework.
- **Open-Source:** Join our community-driven project and contribute to its evolution.

## 🌐 Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Brann-ztw/OpenScrape-API.git
   ```
2. **Install Dependencies:**
   ```bash
   cd openscrape-api
   npm install
   ```
3. **Run the Server:**
   ```bash
   npm run start
   ```
4. **Explore the Endpoints:** Access the API documentation to discover available routes and functionalities.

<!-- ## ⚠️ Note

You can replace `localhost` with your server's domain name. The repository is deployed, and you can make requests to the main URL of the repository: [API URL](YOUR_API_URL_HERE). -->

## 📚 API Endpoints

### YouTube Download Endpoint

- **`GET /download/yt/?url=<YouTube URL>`**: Fetch video/audio details from a YouTube URL. 🎥
  - **Parameters:**
    - `url`: The YouTube video URL. 🌐
  - **Response:**
    - `title`: The title of the YouTube video. 🏷️
    - `thumbnail`: The URL of the video’s thumbnail image. 🖼️
    - `downloadLink`: A link to download the video/audio. ⬇️

### Instagram Reels Download Endpoint

- **`GET /download/ig/?url=<Instagram URL>`**: Fetch video details from an Instagram Reel URL. 📸
  - **Parameters:**
    - `url`: The Instagram Reel video URL. 🌐
  - **Response:**
    - `thumbnail`: The URL of the Reel’s thumbnail image. 🖼️
    - `downloadLink`:  A link to download the Reel video. ⬇️

### Spotify Download Endpoint

- **`GET /api/download/spotify/?url=<Spotify URL>`**: Download the audio from a Spotify song. 🎵
  - **Parameters:**
    - `url`: The Spotify song URL. 🌐
  - **Response:**
    - `title`: The title of the song. 🏷️
    - `artist`: The artist of the song. 🎤
    - `image`: The URL of the song’s cover image. 🖼️
    - `downloadLink`: A link to download the audio. ⬇️

### Mediafire Download Endpoint

- **`GET /api/download/mediafire/?url=<Mediafire URL>`**: Download a file from Mediafire. 📂
  - **Parameters:**
    - `url`: The Mediafire file URL. 🌐
  - **Response:**
    - `fileName`: The name of the file. 🏷️
    - `fileType`: The type of the file. 🗂️
    - `fileSize`: The size of the file. 📏
    - `downloadLink`: A link to download the file. ⬇️

### TikTok Download Endpoint

- **`GET /api/download/tiktok/?url=<TikTok URL>`**: Download a video from TikTok. 🎬
  - **Parameters:**
    - `url`: The TikTok video URL. 🌐
  - **Response:**
    - `downloadLink`: A link to download the video in HD. ⬇️

### Pinterest Search Endpoint

- **`GET /api/search/pinterest/?search=<Search Term>`**: Search for images on Pinterest by topic. 🔍
  - **Parameters:**
    - `search`: The search term for Pinterest images. 🌐
  - **Response:**
    - `imageUrl`: The URL of the image. 🖼️

### npmj Search Endpoint

- **`GET /api/search/npmj/?search=<Library Name>&limit=<Result Limit>`**: Search for npm packages by name and limit results. 📦
  - **Parameters:**
    - `search`: The name of the npm library. 🔍
    - `limit`: The maximum number of results to return. 📊
  - **Response:**
    - `libraryName`: The name of the npm library. 🏷️
    - `author`: The author of the library. 🧑‍💻
    - `description`: A brief description of the library. 📝


## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Empower your applications with dynamic data extraction using **OpenScrape API**! 🌟
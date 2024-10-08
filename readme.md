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

- **`GET /api/download/yt/?url=<YouTube URL>`**: Fetch video/audio details from a YouTube URL. 🎥
  - **Parameters:**
    - `url`: The YouTube video URL. 🌐
  - **Response:**
    - `title`: The title of the YouTube video. 🏷️
    - `thumbnail`: The URL of the video’s thumbnail image. 🖼️
    - `downloadLink`: A link to download the video/audio. ⬇️

### Instagram Reels Download Endpoint

- **`GET /api/download/ig/?url=<Instagram URL>`**: Fetch video details from an Instagram Reel URL. 📸
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

### Npmj Search Endpoint

- **`GET /api/search/npmj/?search=<Library Name>&limit=<Result Limit>`**: Search for npm packages by name and limit results. 📦
  - **Parameters:**
    - `search`: The name of the npm library. 🔍
    - `limit`: The maximum number of results to return. 📊
  - **Response:**
    - `libraryName`: The name of the npm library. 🏷️
    - `author`: The author of the library. 🧑‍💻
    - `description`: A brief description of the library. 📝


## ⚠️ Error Responses

When using the **OpenScrape API**, you might encounter the following error responses. Each error is designed to help you troubleshoot and correct your API requests:

### 1. URL is not defined ❌

- **Description:** This error occurs when the endpoint requires a query parameter named `url`, but it is not provided.
- **Solution:** Ensure that you include the `url` query parameter in your request.
  - Example: `/api/download/yt/?url=<YouTube URL>`

### 2. Invalid URL ❌

- **Description:** This error occurs when the provided `url` is not valid for the endpoint.
- **Solution:** Verify that the URL you are using is correct and compatible with the endpoint you are calling.

### 3. Internal server error 🔧

- **Description:** This error indicates a server-side issue, possibly within the host or scraper.
- **Solution:** If the error persists, report the issue to the developers. 
  - Example Messages: "Internal server error" or "An error occurred during the process."

### 4. Search or Limit is not defined 🔍

- **Description:** This error occurs when the endpoint requires two query parameters, `search` and `limit`, and they are not provided.
- **Solution:** Ensure that both `search` and `limit` query parameters are included in your request.
  - Example: `/api/search/npmj/?search=<Library Name>&limit=<Result Limit>`

### 5. There are no results for that limit 🚫

- **Description:** This error occurs when the `limit` parameter is set too high, resulting in no search results.
- **Solution:** Adjust the `limit` to a lower value that matches the available search results.

### 6. Search is not defined 🔍

- **Description:** This error occurs when the endpoint requires a query parameter named `search`, but it is not provided.
- **Solution:** Make sure to include the `search` query parameter in your request.
  - Example: `/api/search/pinterest/?search=<Search Term>`


## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Empower your applications with dynamic data extraction using **OpenScrape API**! 🌟
# ArtisanAI

Transform your handmade products into market-ready masterpieces with AI-powered posters and storytelling videos.

**Live Demo - [ArtisanAI](https://artisan-ai-eight.vercel.app/)**

---

## 📖 About

Artisan AI is a web application that enables artisans and creators to convert their handmade items into compelling visual content — including AI-generated posters, storytelling videos, and enhanced product images — to help them reach larger audiences and showcase their craftsmanship in the global digital marketplace.

---

## 📌 Features

- Generate promotional/advertising posters of product through AI.  
- Create AI-driven storytelling videos highlighting product journeys or features.  
- Enhance product's images with AI for better visualization.  
- An AI-powered chatbot to assist users for content creation queries.
- Dashboard for managing content, tracking generated assets.  
- Responsive UI for both desktop and mobile.

---

## 🛠️ Tech Stack

| Component      | Technology / Framework        |
|----------------|-------------------------------|
| Frontend       | React, Vite, Tailwind CSS     |
| Backend        | Node.js, Express              |
| Database       | MongoDB, Cloudinary           |
| AI Models      | Gemini                        |
| Authentication | JWT                           |

---  

## 🗂️ Project Structure

   ```bash
   ArtisanAI/
   
   ├── backend/
   │ ├── controllers/                 # Express route controllers for API
   │ ├── models/                      # Mongoose models (User, Images, etc.)
   │ ├── routes/                      # Express routes
   │ ├── middlewares/                 # Auth & other middleware
   │ ├── uploads/                     # Store Images
   │ ├── server.js                    # Main backend file
   │ └── package.json
   │
   ├── frontend/
   │ ├── public/                      #Store static images
   │ ├── src/
   │ │ ├── components/                # Reusable UI components (Navbar, Footer, etc.)
   │ │ │ ├──dashboard                 # main dashboard page
   │ │ │ ├── home                     #  landing page
   │ │ │ ├── Image                    # Context API for state management
   │ │ │ ├── Login                    # login Component
   │ │ │ ├── Poster                   # poster making component
   │ │ │ ├── Sign up                  # sign-up component
   │ │ │ └── Video                    # video making component
   │ │ ├── app.css
   │ │ ├── app.jsx
   │ │ ├── main.jsx
   │ │ └── index.css
   │ ├── axiosConfig.js               # Define diff URLs
   │ ├── index.html
   │ └── package.json
   │
   └── README.md
   ```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sudhanshu248/Connectify.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Connectify
   ```

3. Install dependencies for frontend:
   ```bash
   cd frontend
   npm install
   ```
   Install dependencies for backend:
   ```bash
   cd backend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add required variables such as `PORT`, `MONGO_URL`, etc.

5. Start the development servers for frontend:
   ```bash
   cd frontend
   npm run dev
   ```
   Start the development servers for backend:
   ```bash
   cd backend
   npm start
   ```

---

**[ArtisanAI](https://artisan-ai-eight.vercel.app/)** - AI-powered marketing tools for handmade products.

# ArtisanAI

Transform your handmade products into market-ready masterpieces with AI-powered posters and storytelling videos.

---

## About

ArtisanAI is a web application that lets artisans and creators convert their handmade items into compelling visual content — AI-generated posters, videos with storytelling, and other promotional media — to help them reach larger audiences and showcase their craftsmanship in the best possible way.

---

## Features

- Upload images and/or descriptions of handmade products.  
- Generate promotional posters through AI.  
- Create storytelling videos highlighting product journeys or features.  
- User authentication and profile management.  
- Dashboard for managing content, tracking generated assets.  
- Responsive UI for both desktop and mobile.  

---

## Tech Stack

| Component      | Technology / Framework        |
|----------------|-------------------------------|
| Frontend       | React, Tailwind CSS |
| Backend        | Node.js, Express              |
| Database       | MongoDB                       |
| AI Models      | Gemini                        |
| Authentication | JWT                           |
| Other tools    | (e.g. cloud storage, video encoding, etc.) |

---

## Getting Started

### Prerequisites

- Node.js (version X.X.X)  
- npm or yarn  
- (If used) a cloud API key for AI image/video service  
- (If used) storage service credentials (e.g. AWS S3, Google Cloud Storage)  

## Project Structure

backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── server.js
└── package.json


├── ArtisanAI/
│   ├── backend/
│   │   ├── controllers/      # Express route controllers for API
│   │   ├── models/           # Mongoose models (User, Images, etc.)
│   │   ├── routes/           # Express routes
│   │   ├── middlewares/      # Auth & other middleware
│   │   ├── utils/            # Utility functions
│   │   ├── server.js         # Entry point for backend
│   │   └── package.json
│   │
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/   # Reusable UI components (Navbar, Footer, etc.)
│   │   │   ├── pages/        # Main pages (Dashboard, Login, etc.)
│   │   │   ├── context/      # Context API for state management
│   │   │   ├── services/     # API calls using Axios
│   │   │   ├── App.js
│   │   │   └── index.js
│   │   └── package.json
│   │
│   ├── .env.example          # Example environment variables
│   ├── README.md
│   └── package.json          # Root package for monorepo setup

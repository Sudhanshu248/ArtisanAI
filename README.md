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

## Project Structure
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
##

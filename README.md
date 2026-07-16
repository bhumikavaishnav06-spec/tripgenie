# ✈️ TripGenie – AI Travel Planner

TripGenie is a full-stack AI-powered travel planning application that helps users create personalized travel itineraries based on their destination, trip duration, budget, and number of travelers. It combines the power of Google Gemini AI with real-time weather information to provide a smarter travel planning experience.

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 User Registration & Login
- 🤖 AI-generated Travel Itinerary using Google Gemini
- 🌤️ Real-time Weather Information (OpenWeather API)
- 💾 Save & Manage Trips
- 📋 Dashboard with Recent Trips
- 👤 User Profile Management
- 📱 Fully Responsive UI
- ⚡ Fast React + Vite Frontend
- 🌐 RESTful API Backend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

### APIs
- Google Gemini AI API
- OpenWeather API

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```
TripGenie/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/bhumikavaishnav06-spec/tripgenie.git
```

### Navigate to the project

```bash
cd tripgenie
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder and add:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

---

## 📸 Screenshots

> Add screenshots of:
- Home Page
- Dashboard
- AI Trip Generator
- Weather Information
- Saved Trips
- Profile

---

## 🎯 Future Improvements

- Google Maps Integration
- PDF Itinerary Download
- Trip Sharing
- Hotel Booking Integration
- Flight Search
- Expense Tracker
- Dark Mode

---

## 👩‍💻 Author

**Bhumika Vaishnav**

- GitHub: https://github.com/bhumikavaishnav06-spec
- LinkedIn: *(Add your LinkedIn profile link here)*

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

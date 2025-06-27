# 🗨️ LingoLink – Language Exchange Platform

**LingoLink** is a full-stack language learning and chatting platform designed to connect users across the globe based on their native and learning languages. Built using the **MERN** stack with a clean, responsive UI powered by **Tailwind CSS** and **DaisyUI**, the app helps users find language partners, chat, and even make video calls — all from one place.

---

## 🚀 Features

- 🧩 **MERN-Based Architecture**  
  Built using MongoDB, Express, React, and Node.js for scalable and performant development.

- 💬 **Real-Time Messaging (Custom Implementation)**  
  Chat with your friends with an intuitive and dynamic messaging interface.

- 👥 **Friend Requests & Connections**  
  Send, receive, and manage friend requests to build your language network.

- 🟢 **Online Status Tracking**  
  See who’s currently online and available to chat or call.

- 🎨 **Dynamic Theme Selector**  
  Switch between multiple UI themes in real-time using DaisyUI themes.

- 🔐 **JWT Authentication & Secure Routing**  
  Protect user data and routes using secure authentication with JSON Web Tokens.

- 📲 **Responsive UI with TailwindCSS & DaisyUI**  
  Mobile-friendly and visually consistent interface built for accessibility and speed.

- ⚙️ **Global State Management via Zustand**  
  Lightweight and efficient state management across the app.

- 📸 **Cloudinary Integration**  
  Upload and manage user profile images with Cloudinary's media API.

- 📹 **Video Calling (Peer-to-Peer)**  
  Connect with your language partners through high-quality video chat using WebRTC.

- 🚫 **Centralized Error Handling**  
  Smooth UX with unified error responses across the frontend and backend.

---

## 🖼️ Preview Screens

### 🔐 Login Page  
Simple and secure user login screen.  
![Login](./frontend/public/Screenshot%202025-06-27%20105511.png)

### 📝 Signup Page  
New users can easily register with all necessary fields.  
![Signup](./frontend/public/Screenshot%202025-06-27%20105554.png)

### 🌍 Onboarding Page  
Select your native and target languages to get personalized friend suggestions.  
![Onboarding](./frontend/public/Screenshot%202025-06-27%20105729.png)

### 🏠 Home Page  
Shows recent chats and allows navigation to other sections.  
![Home](./frontend/public/Screenshot%202025-06-27%20103256.png)

### 👥 Friends Page  
View your current friends.  
![Friends](./frontend/public/Screenshot%202025-06-27%20103315.png)

### 🔔 Notifications Page  
Displays friend requests and new connection alerts.  
![Notifications](./frontend/public/Screenshot%202025-06-27%20103416.png)

### 💬 Chat Page  
Modern chat interface for seamless text-based conversations.  
![Chat](./frontend/public/Screenshot%202025-06-27%20112157.png)

### 🎥 Video Calling Page  
Initiate and join one-on-one video calls.  
![Video Call](./frontend/public/Screenshot%202025-06-27%20112526.png)

### 🎨 Theme Selector Page  
Personalize your UI with a live theme preview and selection.  
![Theme Selector](./frontend/public/Screenshot%202025-06-27%20103340.png)
---

## 🧪 .env Setup

### Backend (`/backend`)

```
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`/frontend`)

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
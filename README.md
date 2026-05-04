# 🚀 Team Task Manager

A full-stack MERN application for efficient team task management with authentication, task tracking, dashboard analytics, and live deployment.

---

# 🌐 Live Demo

## Frontend

Deployed on Vercel

## Backend

Deployed on Render

---

# 📌 Features

* 🔐 User Authentication (JWT Based)
* 🛡️ Password Hashing using bcrypt
* 📝 Create Tasks
* 📋 View All Tasks
* 🔄 Update Task Status
* 📊 Dynamic Dashboard Analytics
* ⏰ Overdue Task Tracking
* 🚪 Logout Functionality
* 📱 Responsive UI
* ☁️ Full Deployment (Frontend + Backend)

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas / Railway MongoDB

---

# 📷 Screenshots

## Login Page

<img width="1917" height="975" alt="Screenshot 2026-05-04 135405" src="https://github.com/user-attachments/assets/1d64d798-e7f4-4438-9a22-af1d668e6887" />


## Dashboard

<img width="1901" height="914" alt="Screenshot 2026-05-04 155854" src="https://github.com/user-attachments/assets/ab59f082-11ab-4f0c-96bd-1e89b9b81d36" />


## Task Analytics

<img width="1918" height="926" alt="Screenshot 2026-05-04 155901" src="https://github.com/user-attachments/assets/ce3c58df-45e6-4578-b7f2-07db16c9fe07" />


---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/iyang0123/team-task-manager-eai.git
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

Create `.env` file inside server folder:

```env
PORT=5000
MONGO_URI= The_url
JWT_SECRET= The_secret_key
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 📂 Project Structure

```bash
team-task-manager-eai/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── routes/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

# 🔑 Authentication Flow

1. User registers using email & password.
2. Password is encrypted using bcrypt.
3. JWT token is generated during login.
4. Protected routes use token verification middleware.
5. Authenticated users can manage tasks securely.

---

# 📊 Dashboard Analytics

The dashboard dynamically tracks:

* Total Tasks
* To Do Tasks
* In Progress Tasks
* Completed Tasks
* Overdue Tasks

All statistics update automatically in real time.

---

# 🚀 Future Improvements

* Team Collaboration
* Drag & Drop Kanban Board
* Email Notifications
* Due Date Calendar
* File Attachments
* Role-Based Access Control
* Dark Mode
* Search & Filters

---

# 🧠 Key Learnings

Through this project, I gained hands-on experience in:

* MERN Stack Development
* REST API Design
* JWT Authentication
* MongoDB Integration
* Frontend & Backend Deployment
* State Management
* API Integration
* Full Stack Project Structure

---

# 👨‍💻 Author

## Taniya Gupta

* GitHub: [https://github.com/iyang0123](https://github.com/iyang0123)
* LinkedIn: [https://www.linkedin.com/in/taniya-775502285/]

---

# ⭐ If you liked this project

Give this repository a star on GitHub ⭐

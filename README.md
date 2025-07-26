# ReactGenerator - AI-Powered JSX Component Generator

ReactGenerator is a full-stack AI-based platform that generates and refines JSX React components using natural language prompts. It leverages the **Google Gemini API** to assist developers in creating and editing Tailwind CSS-based components with live preview.

## 🗂️ Project Structure

ReactGenerator/
├── backend/
└── frontend/

## ✨ Features
+

- 🧠 Generate JSX components using natural language prompts
- 🔁 Refine components iteratively with follow-up inputs
- 🧑‍💻 Built-in code editor with live JSX preview
- ✅ User Authentication using JWT and cookies
- 💾 Save code sessions with titles and auto-save support
- 📂 Organized full-stack structure

## 🔹 Backend

- Node.js + Express.js
- MongoDB + Mongoose
- Google Gemini API integration
- JWT + Cookies for authentication
- dotenv, bcryptjs, cookie-parser

## 🔹 Frontend

- React + Vite
- Tailwind CSS
- React CodeMirror (JSX code editor)
- React Router DOM v7
- Toast notifications (React Toastify)
- Responsive UI with live preview and session saving

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ReactGenerator.git
cd ReactGenerator
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_gemini_api_key

Run the backend:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```


## 📦 Deployment

* Frontend: Deployed on [Vercel](https://vercel.com)
* Backend: Deployed on [Vercel](https://vercel.com)


## 👨‍💻 Author

* **Deepak Singh Bagaria**
* BTech CSE @ LPU
* Portfolio: https://deep7311.github.io/

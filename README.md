🍔 Food Reels – Frontend

The Food Reels Frontend is a responsive web application built using modern UI technologies.
It allows users to browse short food clips, view recipes, interact with posts, and explore food creators.

🚀 Features

🎥 Watch short food reels
🍽️ View recipe details
❤️ Like & save food reels
👤 User login/signup (JWT-based)
🔄 Smooth UI/UX with responsive design
🌐 Integrated with backend API
⚡ Fast rendering & optimized assets

🛠️ Tech Stack

React.js
React Router DOM
Axios
CSS

frontend/
│── public/
│── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.js
│   ├── main.jsx
│── package.json
│── README.md

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/kuragayalaanil/FoodReels/tree/main/Frontend
cd food-reels-frontend

2️⃣Install dependencies
npm install

3️⃣ Create a .env file
PORT=
MONGO_URI=""
JWT_SECRET=""
IMGKIT_PUBLIC_KEY=
IMGKIT_PRIVATE_KEY=
IMGKIT_URL_ENDPOINT=

4️⃣Start the development server
npm run dev

✅Your app will run at: 
http://localhost:5173/

🔗 API Integration

The frontend interacts with your backend using endpoints like:

POST /api/user/register
POST /api/user/login
POST /api/food-partner/register
POST /api/food-partner/login
POST /api/foods/create-food (requires JWT cookie)

_______________________________________________________________

🍔 Food Reels – Backend (Node.js + Express + MongoDB)

The Food Reels Backend is a REST API powering the Food Reels application.
It handles authentication, reel management, likes, user profiles, and more.

🚀 Features

🔐 User Authentication (JWT)
🍽️ Upload & manage food reels
👍 Like/Unlike reels
📚 Fetch food categories & creators
🗂️ MongoDB database connection
🧩 Modular route & controller structure

🛠️ Tech Stack

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Multer / Cloudinary (if used)
dotenv

📁 Folder Structure

backend/
│── src/
│   ├── config/
│   │    └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── server.js
│── .env
│── package.json
│── README.md

⚙️ Installation & Setup

1️⃣ Clone the repository
https://github.com/kuragayalaanil/FoodReels/tree/main/Backend

2️⃣⚙️ Installation & Setup
npm install

3️⃣ Create .env file

4️⃣ Start the server
npm run dev

5️⃣ Server will run at:
http://localhost:3000/

📘 API Endpoints
🔐 Auth Routes - User
| Method | Endpoint                  | Description   |
| ------ | --------------------      | ------------- |
| POST   | `/api/auth/user/register` | Register user |
| POST   | `/api/auth/user/login`    | Login user    |
| GET    | `/api/auth/user/logout`   | Logout user   |

🔐 Auth Routes - Food Partner
| Method | Endpoint                          | Description          |
| ------ | --------------------              | -------------        |
| POST   | `api/food/food-partner/register`  | Register FoodPartner |
| POST   | `api/food/food-partner/login`     | Login user           |
| GET    | `api/food/food-partner/logout`    | Logout user          |

🎥 Reel Routes - Food Items
| Method | Endpoint                          | Description        |
| ------ | ---------------------             | ------------------ |
| POST   | `api/food/food/create-food`       | Register FoodPartner |
| GET    | `api/food/food/fooditems`         |  Reels Feed         |


🤝 Contributing

Feel free to contribute via pull requests.





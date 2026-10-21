Backend Final Exam 🚀

A backend application built using Node.js, Express.js, and MongoDB. The project follows a modular structure to organize routes, controllers, models, database configuration, and authentication middleware.

🎥 Project Video
Watch the recorded project demonstration here:
https://drive.google.com/file/d/1oYLtz2D3bdSx0aA6JduyYu8tGCOGTyIN/view?usp=sharing

Replace the link above with your Google Drive, YouTube, or other video-sharing link.
🛠️ Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JSON Web Token (JWT)
bcrypt
dotenv
📁 Project Structure
backend-final-exam/
├── config/
│   └── db.js
├── controllers/
├── middleware/
│   └── authentication/
├── model/
├── routes/
├── server.js
├── package.json
├── package-lock.json
└── README.md

✨ Features
REST API development using Express.js
MongoDB database integration
Modular routes and controllers
Authentication middleware
Password hashing support using bcrypt
JWT authentication support
Environment variable configuration
📋 Prerequisites

Before running the project, make sure you have installed:

Node.js
npm
MongoDB
⚙️ Installation and Setup
1. Clone the Repository
git clone https://github.com/janvi-jain/backend-final-exam.git

2. Navigate to the Project Folder
cd backend-final-exam

3. Install Dependencies
npm install

4. Configure Environment Variables

Create a .env file in the root directory and configure the environment variables required by your application.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Use the exact variable names expected by your source code. Do not upload your actual secrets to GitHub.

5. Run the Application
npm start


If your package.json uses a different start script, run the appropriate command.

The application will run on the configured port, for example:

http://localhost:5000

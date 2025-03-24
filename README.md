# The Lost Realm - MERN Text Adventure

A magical, web-based text adventure game built with the MERN stack (MongoDB, Express.js, React, Node.js) and powered by the Gemini API for dynamic storytelling.

---

## 🌟 Overview

**The Lost Realm** invites you to embark on an immersive journey through a fantasy world where every choice shapes your adventure. Powered by the Gemini API, the game generates vivid locations and choices on the fly, creating a unique experience each time you play. With its intuitive, fantasy-themed UI, it’s perfect for both casual players and developers looking to explore full-stack development with AI integration.

---

## ✨ Features

- **Stunning Fantasy UI**: A welcoming landing page and immersive game interface with a medieval aesthetic.
- **Dynamic Storytelling**: Locations and choices are generated in real-time by the Gemini 1.5 Flash model.
- **User-Friendly Design**: Simple navigation, clear instructions, and responsive layout for all devices.
- **Free to Run**: Leverages the Gemini API free tier (1,500 requests/day) for development and testing.
- **Full-Stack Showcase**: Built with MERN, demonstrating API integration, state management, and modern web design.

---

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing-page.png)  
*Welcome to your adventure! Click "Play Now" to begin.*

### Gameplay
![Gameplay](screenshots/gameplay.png)  
*Explore dynamic locations and make choices to shape your journey.*

---

## 🚀 Setup Instructions

To run **The Lost Realm** locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/the-lost-realm.git
cd the-lost-realm

## Set Up the Backend
Navigate to the server folder:
bash

Collapse

Wrap

Copy
cd server
Install dependencies:
bash

Collapse

Wrap

Copy
npm install
Create a .env file and add your Gemini API key:
env

Collapse

Wrap

Copy
GEMINI_API_KEY=your_api_key_here
Start the backend server:
bash

Collapse

Wrap

Copy
npm start
3. Set Up the Frontend
Navigate to the client folder:
bash

Collapse

Wrap

Copy
cd ../client
Install dependencies:
bash

Collapse

Wrap

Copy
npm install
Start the React app:
bash

Collapse

Wrap

Copy
npm start
4. Play the Game
Open your browser and go to http://localhost:3000.
Click "Play Now" to begin your adventure!
🎮 How to Play
Start: Click "Play Now" on the landing page.
Explore: Read the description of your current location.
Choose: Click one of the three choices to progress.
Restart: Use the "Restart Journey" button to begin a new adventure.
For more details, check the "How to Play" section on the landing page.

🛠️ Tech Stack
Frontend: React.js with CSS for a fantasy-themed UI.
Backend: Node.js and Express.js for handling API requests.
AI Integration: Gemini API (Gemini 1.5 Flash) for generating dynamic content.
Other Tools: Axios for API calls, dotenv for environment variables.
🤝 Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome to enhance the UI, add new features, or improve the game logic.
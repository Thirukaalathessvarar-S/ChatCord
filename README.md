# ChatCord

ChatCord is a real-time chat application built with Node.js, Express, and Socket.io. It allows multiple users to join a chat room, send messages, and receive updates in real-time. The app is designed with a focus on simplicity and functionality, making it easy to understand and expand.

## Features

- **Real-time Messaging:** Users can send and receive messages instantly using Socket.io.
- **Multiple Rooms:** Users can join different rooms and chat with others in the same room.
- **Notifications:** New users joining or leaving the chat will trigger notifications.
- **User Interface:** Simple and responsive UI built with HTML and CSS.

## Technologies Used

- **Backend:** Node.js, Express
- **WebSocket Library:** Socket.io
- **Frontend:** HTML, CSS, JavaScript
- **Version Control:** Git

## Installation

Follow these steps to get a local copy of the project up and running:

1. Clone the repository:
   ```bash
   git clone https://github.com/Thirukaalathessvarar-S/ChatCord.git
   ```
2. Navigate into the project directory:
   ```bash
   cd ChatCord
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`

## Usage
- **Enter a username and choose a room to join.**
- **Start chatting with other users in the same room.**
- **The system will notify when users join or leave the room.**

## Project structure
ChatCord/ ├── public/ │ ├── css/ │ │ └── style.css # Styling for the frontend │ ├── js/ │ │ └── main.js # Client-side JavaScript for handling chat functionality │ └── index.html # Main HTML file for the chat interface ├── utils/ │ ├── users.js # Helper functions for managing users and rooms ├── views/ │ └── layout.ejs # Template for rendering views (if using EJS templating) ├── server.js # Main server file (Node.js + Express + Socket.io) ├── package.json # Lists dependencies and project metadata ├── package-lock.json # Exact version lock file for installed packages └── 

- public/: Contains the frontend assets such as CSS, JavaScript, and HTML files.
- server.js: The main server file for handling routes and socket connections.

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.

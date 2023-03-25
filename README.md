# React-Server-Test2 Branch Instructions

- In client folder, create .env file and add below variable
  - `VITE_API_URL=http://localhost:5000/`
- In server folder, create config.env file in config folder with below variables.
  - `PORT=5000`
    `DB_STRING=<Your MONGO_URI string>`
- You can adjust the port numbers if you run into any errors, these work in my case.
- cd into both client and server folder and run `npm install` inside both to install reqd dependencies.
- Additionally, in the server folder, run `npm install mongodb --save`
- If you want to work on the front end, cd into the client folder and type: `npm run dev `to fire up the React app.
- If you want to work on the back end, cd into the server folder and type: `npm start `to fire up the server
- If you want to work on both the frontend and backend, cd into the server folder and type: `npm dev-start`. This will fire up the server and the React app. It will run the React app from the server.
- Also you can run both separately in two terminals

## Changes

#### March 19, 2023

- Added calendar link to landing page
- Added Appt model to server
- Added route, controller to server
- Reconfigured Signup logic in server to work with frontend

#### March 25, 2023

- Renamed variables in the createApptSlice to better identify what is being done
- Fixed error when clicking Calendar link on Landing page
- Removed testComponents folder from client side, wasn't needed
- Added rest of appt fields on the Appt Schema

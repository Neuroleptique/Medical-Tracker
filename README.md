# Medical-Tracker

This is a full-stack web application built using the MERN stack designed to help users monitor their health and medical conditions. This app allows users to track their medications, set reminders for appointments, track their symptoms, and provide medical professionals with accurate and up-to-date information about their health.

## How does this app work?

The Medical-Tracker application allow users to enter their health related infomation and track all their medical appointments, prescriptions and other data.
The Medical Tracker application has the following features:

- User registration and login
- Dashboard to view upcoming appointments and medications.
- Ability to contact medical professionals
- Ability to locate Pharmacy / Medical centres for appointments.
- Ability to add, edit, and delete appointments.
- Ability to add, edit, and delete medications.
- Medical history tracking.
- User profile management.
- Secure authentication.

**Link to project:** work in progess

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, Express, MongoDB, TailwindCSS, Redux, ViteJS

- MongoDB: A NoSQL document database used to store user data and medical information.
- Express.js: A web application framework used to create the backend REST API.
- React: A JavaScript library used to create the frontend UI components.
- Node.js: A JavaScript runtime used to run the backend server and API.
- Mongoose: An Object Data Modeling (ODM) library used to interact with MongoDB.
- bcrypt: A password hashing library used to securely store user passwords.
- Passport: A modular authentication middleware for Node. js applications.
- TailwindCSS : A CSS library used for styling.

## To run the Medical Tracker application, you need to have the following installed on your machine via Terminal:

- Node.js and npm (Node Package Manager)
- MongoDB
  To get started, follow these steps:

1. Clone the repository using git clone `repository-url`
2. Navigate to the project directory using `cd medical-tracker`
3. `cd` to both `client` and `server` folder to install the dependencies using `npm install`
4. Create a `.env` file in the `server/config` folder and add the following as `key: value`

- PORT = 3000
- DB_STRING = `your MongoDB database URI`

5. To start the client side development:

- `cd client` to client folder and using `npm run dev` and follow the prompt link from your terminal to view the developing site in your browser.
- For server side `cd server` then use `npm run dev-start`. The application will be accessible at http://localhost:3000

## Lessons Learned:

Mongoose Schema, React

## License

The Medical Tracker application is open source and licensed under the MIT License.

## Updates Mar 29, 2023

- ui updates to login/signup form
- on successful login/registration, user is redirected to Dashboard page
- in client/src/features/auth/authservice file, change the PORT of the localhost in register and login functions according to your setup
- to test, cd into client, run npm-install, then cd into server and run npm install
- open two terminals, one in client folder and one in server folder
- in the client, run command npm run dev
- in the server, run command npm start
- if no errors in terminal and you see the React app, you should be gtg.
-

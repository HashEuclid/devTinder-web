# DevTinder-webapp
- Create a Vite + React application.
- Remove unnecessary code and create a Hello World app.
- Install Tailwind CSS
- Install DaisyUI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate component file
- Install react-router-dom
- Create BrowserRouter > Routes > Route = / Body > RouteChildren
- Create an Outlet in Body Component
- Create a Footer Component
- Create a Login Page
- Install Axios
- CORS - install CORS to the backend => add middleware to app with configurations: origin: "Whitelisting urls" and credentials:true
- Whenever making API call so pass axios => {credentials: true}
- Install Redux toolkit -- install npm install @reduxjs/toolkit
- configureStore => Provider => createSlice => add reducer to store
- Add redux dev tools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user login
- Refactor the code to add constants file + create a components folder


## Component design
- body
    NavBar
    Route = / => Feed
    Route = /login => Login
    Route = /connections => Connections
    Route = /profile => Profile

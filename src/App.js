import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './compontents/Login/index';
import SignUp from './compontents/SignUp';
import Home from './compontents/Home';
import Profile from './compontents/Profile';
import Loginfacebook from './compontents/Login/login_facebook'
import Spinner from './compontents/Spinner';
import Editprofile from './compontents/Profile/Editprofile';



function App() {

  const [spinner, setspinner] = useState(null);

  return (
    <>
      {spinner ? (<Spinner />) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tofacebook" element={<Loginfacebook />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/editprofile' element={<Editprofile />} />
        </Routes>
      )}

    </>
  );
}

export default App;





// class App extends React.Component {

//   state = {
//     loading: true
//   };

//   componentDidMount() {
//     demoAsyncCall().then(() => this.setState({ loading: false }));
//   }

//   render() {
//     const { loading } = this.state;

//     if (loading) { // if your component doesn't have to wait for async data, remove this block 
//       return null; // render null when app is not ready
//     }
//   }

// }

// function demoAsyncCall() {
//   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );


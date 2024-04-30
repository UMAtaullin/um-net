import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import Messenger from './components/Messenger/Messenger';

const App = (props) => {
  debugger;
  return (
      <div className='App'>
        <Header />

        <Navbar />

        <div className='App-content'>
          <Routes>
            <Route path='/messages/'
              element={<Messenger
                store={props.store}
                />}
            />
            <Route
              path='/profile'
              element={<Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
  )
  }


export default App;

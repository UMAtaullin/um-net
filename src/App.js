import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Messenger from './components/Messenger/Messenger';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Navbar />

        <div className='App-content'>
          <Routes>
            <Route path='/messages/' element={<Messenger />} />
            <Route
              path='/profile'
              element={<Profile postsData={props.postsData} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
  }


export default App;

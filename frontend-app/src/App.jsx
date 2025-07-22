import React from 'react'
import Menubar from './components/Menubar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserSyncHandler from './components/UserSyncHandler';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Result from './pages/Result';
import BuyCredits from './pages/BuyCredits';

const App = () => {
  return (
    <div>
      <UserSyncHandler />
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<BuyCredits/>} />
        <Route path="/result" element={
          <>
            <SignedIn>
              <Result />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
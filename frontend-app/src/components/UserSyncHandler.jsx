import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);

  const { backendUrl, loadUserCredits } = useContext(AppContext);

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced) {
        return;
      }

      try {
        const token = await getToken();
        console.log("JWT Token", token);

        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl: user.imageUrl
        };

        await axios.post(backendUrl + "/users", userData, { headers: { "Authorization": `Bearer ${token}` } });
        setSynced(true);

        await loadUserCredits();
      } catch (error) {
        console.log("User sync failed.", error);
        toast.error("Unable to create account. Please try again")
      }
    }
    saveUser();
  }, [isLoaded, isSignedIn, getToken, user, synced])


  return null;
}

export default UserSyncHandler;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuthContext } from '../../contexts';
import { Storage } from '../../utils';

import './AccountsPage.css';
import axios from 'axios';

export const AccountsPage = () => {
  const [userData, setUserData] = useState<any>(null);
  const TOKEN_KEY = 'accessToken';
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();

  const signOutHandler = () => {
        Storage.remove(TOKEN_KEY);
        navigate('/');
        setAuthState({});
  };

  //fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
          const response = await axios.post('https://prometheus-xlri-production.up.railway.app/auth/getUserDetails', authState.username, {
            headers: {
              'Content-Type': 'text/plain',
            },
          });
          const {name, email, about} = response.data;
          setUserData({name, email, about});
        };
    
      if (authState.username) {
        fetchUserData();          
      }
    }, [authState.username]);
  // redirect if user is not logged in
  useEffect(() => {
    if (!authState.username) {
      navigate('/signin');
    }
  }, [authState.username, navigate]);
  return (
    <>
      <div className="info__container">
        <div className='card'>
          <h3>Welcome, {userData?.name}</h3>
          <h5>Here are your details</h5>
          <div>Email: {userData?.email}</div>
          <div>Roll No.: {userData?.about}</div>
          <div className='btn-outline-secondary btn rounded' onClick={signOutHandler}>
          <span>Sign Out </span>
          <FaSignOutAlt />
        </div>
        </div>
      </div>
    </>
  );
};

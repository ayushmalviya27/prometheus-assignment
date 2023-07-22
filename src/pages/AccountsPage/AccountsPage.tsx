import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuthContext } from '../../contexts';
import { Storage } from '../../utils';

import './AccountsPage.css';

export const AccountsPage = () => {
  const TOKEN_KEY = 'accessToken';
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();

  const signOutHandler = () => {
        Storage.remove(TOKEN_KEY);
        navigate('/');
        setAuthState({});
  };
  // redirect if user is not logged in
  useEffect(() => {
    if (!authState.username) {
      navigate('/signin');
    }
  }, [authState.username, navigate]);
  return (
    <>
      <div className="accounts__container">
        <div>Accounts Page</div>
        <div>
          <span>Sign Out </span>
          <FaSignOutAlt onClick={signOutHandler} />
        </div>
      </div>
      <div className="info__container">
        <div className='card'>
          <h3>Welcome, {authState.username}</h3>
        </div>
      </div>
    </>
  );
};

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { AuthService } from '../../services';
import { SignInForm } from './SignInForm';
import { useAuthContext } from '../../contexts';
import Logo from '../../assets/prometheus-logo.png';
import './SignInPage.css';

type Credentials = {
  email: string;
  password: string;
}
export const SignInPage = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();

  const handleSubmit = async (credentials: Credentials) => {
    try {
      const result = await axios.post('https://prometheus-xlri-production.up.railway.app/auth/login', {...credentials});
      if (result.data) {
        const { username } = result.data;
        AuthService.setAccessToken(username);
        setAuthState({ ...authState, username });
      }
    } catch (error: any) {
      if(error.response.status === 401) {
        toast.error('Invalid Credentials');
      }
      console.log(error);
    }
  };

  // redirect if user is already logged in
  useEffect(() => {
    if (authState.username) {
      navigate('/accounts');
    }
  }, [authState.username, navigate]);

  return (
    <>
      <ToastContainer />
      <main className="h-screen flex flex-col">
        <div className="flex-grow-1" />
        <div className="signInPage py-4 px-2">
          <div className="container">
            <img
              src={Logo}
              alt="logo"
              width="190px"
              className="container__logo"
            />
          </div>
          <div className="signInForm container py-4 px-2">
            <SignInForm onSubmit={handleSubmit} />
          </div>
        </div>
        <div className="flex-grow-2" />
      </main>
    </>
  );
};

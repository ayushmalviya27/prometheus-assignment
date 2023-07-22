import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthService } from '../../services';
import { SignUpForm } from './SignUpForm';
import { useAuthContext } from '../../contexts';
import './SignUpPage.css';
import { FormEntity } from '../../models';
import axios from 'axios';
import Logo from '../../assets/prometheus-logo.png';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();

  const handleSubmit = async (formEntity: FormEntity) => {
    console.log(formEntity);
    const result = await axios.post('https://prometheus-xlri-production.up.railway.app/auth/create-user', {...formEntity, about: formEntity.rollnumber});
    try {  
      if (result.data) {
          const { username } = result.data;
          AuthService.setAccessToken(username);
          toast.success('Sign up successful');
          setAuthState({ ...authState, username });
      }
    } catch (error) {
      console.log(error);
    };
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
        <div className="signUpPage py-4 px-2">
          <div className="container">
            <img
              src={Logo}
              alt="logo"
              width="190px"
              className="container__logo"
            />
          </div>
          <div className="signUpForm container py-4 px-2">
            <SignUpForm onSubmit={handleSubmit} />
          </div>
        </div>
        <div className="flex-grow-2" />
      </main>
    </>
  );
};

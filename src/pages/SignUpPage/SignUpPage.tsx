import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services';
import { SignUpForm } from './SignUpForm';
import { useAuthContext } from '../../contexts';
import './SignUpPage.css';
import { FormEntity } from '../../models';
import axios from 'axios';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const logo = '../../assets/prometheus-logo.png';
  const { authState, setAuthState } = useAuthContext();

  /* istanbul ignore next */
  const handleSubmit = async (formEntity: FormEntity) => {
    console.log(formEntity);
    const result = await axios.post('https://prometheus-xlri-production.up.railway.app/auth/create-user', {...formEntity, about: formEntity.rollnumber});
    try {  
      if (result.data) {
          const { username } = result.data;
          console.log(result.data);
          AuthService.setAccessToken(username);
          //@ts-ignore
          setAuthState({ ...authState, username });
      }
    } catch (error) {
      console.log(error);
    
  };
  };

  // redirect if user is already logged in
  /* istanbul ignore next */
  useEffect(() => {
    if (authState.username) {
      navigate('/accounts');
    }
  }, [authState.username, navigate]);

  return (
    <main className="h-screen flex flex-col">
      <div className="flex-grow-1" />
      <div className="signUpPage py-4 px-2">
        <div className="container">
          <img
            src={logo}
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
  );
};

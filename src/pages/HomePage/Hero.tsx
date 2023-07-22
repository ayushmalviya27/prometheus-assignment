import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/prometheus-logo.png';
import './Hero.css';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-neutral-light py-4 px-2">
      <div className="hero__container container">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" width="190px" className="hero__logo" />
          <button
            className="btn-sm mt-2"
            aria-label="Sign in"
            type="submit"
            data-testid="sign-in-button"
            onClick={() => navigate('/signin')}
          >
            Sign in
          </button>
        </div>
        <p className="hero__slogan">
          Join the House of Gods.
        </p>
      </div>
    </div>
  );
};

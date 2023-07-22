import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  NotFoundPage,
  SignInPage,
  AccountsPage,
  SignUpPage,
} from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/accounts" element={<AccountsPage />} />
    </Routes>
  );
};

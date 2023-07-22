import { Storage } from '../utils';

const TOKEN_KEY = 'accessToken';

const getAccessToken = () => {
  return Storage.get(TOKEN_KEY);
};

const setAccessToken = (accessToken: string) => {
  return Storage.set(TOKEN_KEY, accessToken);
};

export const AuthService = {
  getAccessToken,
  setAccessToken,
};

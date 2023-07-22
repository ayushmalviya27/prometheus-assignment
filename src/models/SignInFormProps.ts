export interface Credentials {
  email: string;
  password: string;
}

export interface SignInFormProps {
  signInError?: string;
  onSubmit: (credentials: Credentials) => void;
}

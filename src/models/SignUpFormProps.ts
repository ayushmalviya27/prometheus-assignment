export interface FormEntity {
  email: string;
  name: string;
  rollnumber: string;
  password: string;
  confirmPassword: string | undefined;
}

export interface SignUpFormProps {
  signUpError?: string;
  onSubmit: (formEntity: FormEntity) => void;
}

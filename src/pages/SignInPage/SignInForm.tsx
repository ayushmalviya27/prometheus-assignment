import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '../../components';
import { SignInFormProps, Credentials } from '../../models';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const SignInForm = ({ signInError, onSubmit }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {signInError !== undefined ? (
            <div className="text-error mb-3">{signInError}</div>
          ) : null}
          <div className="mb-3">
            <TextField
              id="email"
              {...register('email')}
              label="Email"
              error={errors.email?.message}
            />
          </div>

          <div className="mb-5">
            <TextField
              id="password"
              {...register('password')}
              label="Password"
              type="password"
              error={errors.password?.message}
            />
          </div>

          <button
            className="btn-primary btn-lg w-full mb-3"
            aria-label="Sign in"
            type="submit"
          >
            Sign in
          </button>

          <NavLink
            className="signin-form__sign-up"
            aria-label="Sign up"
            to="/signup"
            end
          >
            Sign up
          </NavLink>
        </form>
      </div>
    </main>
  );
};

import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '../../components';
import { SignUpFormProps, FormEntity } from '../../models';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  rollnumber: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export const SignUpForm = ({ signUpError, onSubmit }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEntity>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {signUpError !== undefined ? (
            <div className="text-error mb-3">{signUpError}</div>
          ) : null}
          <div className="mb-3">
            <TextField
              id="name"
              {...register('name')}
              label="Full Name"
              error={errors.name?.message}
            />
          </div>

          <div className="mb-3">
            <TextField
              id="email"
              {...register('email')}
              label="Email"
              error={errors.email?.message}
            />
          </div>

          <div className="mb-3">
            <TextField
              id="rollnumber"
              {...register('rollnumber')}
              label="Roll No."
              error={errors.rollnumber?.message}
            />
          </div>

          <div className="mb-3">
            <TextField
              id="password"
              {...register('password')}
              label="Password"
              type="password"
              error={errors.password?.message}
            />
          </div>

          <div className="mb-5">
            <TextField
              id="confirm-password"
              {...register('confirmPassword')}
              label="Confirm Password"
              type="password"
              error={errors.confirmPassword?.message}
            />
          </div>

          <button
            className="btn-primary btn-lg w-full mb-3"
            aria-label="Sign up"
            type="submit"
          >
            Sign up
          </button>

          <NavLink
            className="signup-form__sign-in"
            aria-label="Sign in"
            to="/signin"
            end
          >
            Sign in
          </NavLink>
        </form>
      </div>
    </main>
  );
};

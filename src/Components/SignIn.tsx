import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '../app/services/auth';
import { AuthResponse } from '../utils/AuthResponse';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptions } from '../utils/toastOptions';
import 'react-toastify/dist/ReactToastify.css';

type UserInput = {
	email: string;
	password: string;
};

const SignIn: React.FC = () => {
	const navigate = useNavigate();
	const [login] = useLoginMutation();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<UserInput>();

	const onSubmit: SubmitHandler<UserInput> = async (data) => {
		const res = (await login(data)
			.unwrap()
			.then((res) => {
				toast.success('Logged in sucessfully', toastOptions);
				navigate('/');
                localStorage.setItem('token', res.data);
				return res;
			})
			.catch((err: any) => {
				toast.error(err.data.errors[0] || "Incorrect Credentials", toastOptions);
			})) as AuthResponse;
		console.log(res.data);
	};

	return (
		<div className="signin-client">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Sign In</h2>
				<label htmlFor="username">
					Email:
					<input {...register('email', { required: true })} />
					{errors.email && <span>Email is required</span>}
				</label>
				<label htmlFor="password">
					Password:
					<input
						type="password"
						{...register('password', { required: true })}
					/>
					{errors.password && (
						<span>
							Password is required and must be at least 6 characters long
						</span>
					)}
				</label>
				<button type="submit">Sign In</button>
            </form>
            <ToastContainer />
		</div>
	);
};

export default SignIn;

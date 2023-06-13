// import { FcGoogle } from 'react-icons/fc';
import { BsEyeSlashFill, BsEyeFill} from 'react-icons/bs';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../shared/SocialLogin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext, auth } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';



const Login = () => {
  const {setUser, setLoading} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
      const {email, password} = data;
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((result)=>{
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: 'success',
          title: 'user logged in successfully',
          showCancelButton: true,
          timer: 1000
        })
        navigate(from)
      })
      .catch((error)=>{
        Swal.fire({
          icon: 'error',
          title: `${error.message}`,
          showCancelButton: true,
          timer: 1000
        })
      })
    }
  return (
    <>
    <Helmet>
        <title>Login || summer camp</title>
    </Helmet>
    <div className="hero min-h-screen bg-nav bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-2xl font-semibold">Login Here!</h2>
            <div className="form-control bg-nav">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })} 
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered w-full"
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
              </div>
            </div>
            <small>New User! <Link className='text-blue-800' to={'/signup'}>Register First</Link></small>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <div className="divider">OR</div>
              {/* AfterAssignment: use fb, twitter and github */}
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

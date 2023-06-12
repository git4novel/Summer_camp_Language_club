// import React from 'r
import { useContext, useState } from "react";
import { AuthContext, auth } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import SocialLogin from "../../shared/SocialLogin";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const { updateUserProfile, setUser, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      if(data.password !== data.confirm){
        setError('Confirm Password should be similar to Password Field');
        return;
      }
      setLoading(true)
      createUserWithEmailAndPassword(auth, data.email, data.password).then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser)
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      });
    };

    return (
       <>
       <Helmet>
        <title>Sign Up || Summer camp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-50">
            <h1 className="text-5xl font-bold m-4">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <h3 className="font-bold text-xl">SignUp Here!</h3>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email Field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one Uppercase and special character
                  </p>
                )}
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register("confirm", {
                    required: true,
                  })}
                  placeholder="Confirm password"
                  className="input input-bordered w-full"
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
                </div>
                <small className="text-sm text-red-600">{error}</small>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
                <label className="label">
                <p>
                <small>
                  Already a user! <Link className="text-blue-800" to={"/login"}>Go Login</Link>
                </small>
                </p>
                </label>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <div className="divider">Or</div>
            <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
       </>
    );
};

export default SignUp;
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <Link to={'/'}><button className="text-white lg:top-12 px-4 btn btn-warning mx-auto text-center">Go Back Home</button>
           </Link>
           <img className="mx-auto " src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1686588746~exp=1686589346~hmac=a2458098f6c7920a354b332709960d4c7661eebd2be03ddc3d04a329870e80e4" alt="" />
        </div>
    );
};

export default ErrorPage;
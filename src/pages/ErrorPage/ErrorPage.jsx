import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="relative mx-auto">
            <Link to={'/'}><button className="absolute top-4 -translate-x-1/2 text-white lg:top-12 px-4 btn btn-warning mx-auto w-1/2 text-center">Go Back Home</button>
           </Link>
           <img className="mx-auto rounded-xl" src="https://i.ibb.co/8282mFZ/10412432-3735.jpg" alt="" />
        </div>
    )}
export default ErrorPage;
import Banner from "./Banner/Banner";
import '../../layouts/Main.css'
import PopularClass from "./Popular Class/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import StudentReviews from "./StudentReview/StudentReviews";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <PopularClass></PopularClass>
            {/* extra section */}
            <PopularInstructor></PopularInstructor>
            <StudentReviews></StudentReviews>
            </div>
        </div>
    );
};

export default Home;
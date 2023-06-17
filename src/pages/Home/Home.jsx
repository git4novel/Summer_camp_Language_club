import Banner from "./Banner/Banner";
import '../../layouts/Main.css'
import PopularClass from "./Popular Class/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import StudentReviews from "./StudentReview/StudentReviews";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <PopularClass></PopularClass>
            {/* extra section */}
            <PopularInstructor></PopularInstructor>
            <StudentReviews></StudentReviews>
        </div>
    );
};

export default Home;
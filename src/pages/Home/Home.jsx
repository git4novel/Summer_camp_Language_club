import Banner from "./Banner/Banner";
import '../../layouts/Main.css'
import PopularClass from "./Popular Class/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import StudentReviews from "./StudentReview/StudentReviews";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            {/* extra section */}
            <StudentReviews></StudentReviews>
        </div>
    );
};

export default Home;
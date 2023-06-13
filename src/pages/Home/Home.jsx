import Banner from "./Banner/Banner";
import '../../layouts/Main.css'
import PopularClass from "./Popular Class/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;
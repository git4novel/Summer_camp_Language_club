import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {  BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    pic: "https://i.ibb.co/Kjg1tjv/girl.jpg",
    course: "English Language",
    review: "The English course was fantastic. I improved my speaking skills and gained confidence in conversations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    pic: "https://i.ibb.co/tPHSbYW/boy.jpg",
    course: "Spanish Language",
    review: "I had a great experience learning Spanish. The classes were interactive, and the teachers were supportive.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    pic: "https://i.ibb.co/SfL1pp0/boyud.jpg",
    course: "Mandarin Chinese",
    review: "Learning Mandarin was challenging but rewarding. The course material was comprehensive, and I can now communicate effectively in Chinese.",
  },
  {
    id: 4,
    name: "Emily Wilson",
    pic: "https://i.ibb.co/PZ2r686/istockphoto-1199088542-612x612.jpg",
    course: "French Language",
    review: "The French course exceeded my expectations. The instructors were knowledgeable, and the learning environment was engaging.",
  },
];

const StudentReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const review = reviewsData[currentReviewIndex];

  return (
    <>
    <Fade>
    <p className="text-center text-3xl font-bold review-text mt-4">Let's here the Thoughts <br />Of Our Students</p>
    </Fade>
    <Slide>
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-center mb-4">
      </div>
      <div className="bg-white shadow-xl border rounded-lg p-6 relative">
        <div className="flex items-center mb-4">
          <img
            src={review.pic}
            alt="User"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-2xl font-semibold">{review.name}</h3>
            <p className="text-gray-800 italic">{review.course}</p>
          </div>
          <button
          className="absolute left-1 top-1/2 text-yellow-400"
          onClick={handlePreviousReview}
          disabled={currentReviewIndex === 0}
        >
          <BsFillArrowLeftCircleFill/>
        </button>
        <button
          className="absolute right-1 top-1/2 text-yellow-400"
          onClick={handleNextReview}
          disabled={currentReviewIndex === reviewsData.length - 1}
        >
          <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
        </button>
        </div>
        <p className="font-semibold">{review.review}</p>
      </div>
    </div>
    </Slide>
    </>
  );
};

export default StudentReviews;

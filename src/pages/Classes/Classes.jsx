import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  // Fetch classes data
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((classes) => {
        setClasses(classes);
      });
  }, []);

  return (
    <>
    <Helmet>
      <title>Classes | LinguaViva</title>
    </Helmet>
    <div className="mt-6  grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1296px] mx-auto">
      {classes.map((cls) => (
        <div className="flex " key={cls.Name}>
          <div className="flex flex-col border p-3 rounded-md bg-white shadow-2xl w-full">
            <div className="h-48 ">
              <img
                src={cls.ClassImg}
                className="object-cover w-full h-full rounded-t-md"
                alt={cls.Name}
              />
            </div>
            <div
              className={
                cls.availableSeat === 0
                  ? " bg-red-200 flex flex-col justify-between flex-grow"
                  : "bg-nav flex flex-col justify-between flex-grow"
              }
            >
              <div className="">
                <h1 className="text-3xl md:text-5xl font-bold mb-2 lg:mb-4">
                  {cls.Name}
                </h1>
                <p className="mb-3 italic font-semibold">
                  Instructor: {cls.InstructorName}
                </p>
                <p className="italic font-semibold">
                  Available Seats: {cls.availableSeat}
                </p>
                <p className="mb-4 italic font-semibold">
                  Available Seats: {cls.price}$
                </p>
              </div>
              <button
                className={cls.availableSeat === 0 ? "disable" : "w-full"}
              >
                <AwesomeButton
                  className="w-full disabled"
                  type={cls.availableSeat === 0 ? "disabled" : "secondary"}
                >
                  Select
                </AwesomeButton>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Classes;

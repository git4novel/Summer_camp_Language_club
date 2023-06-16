import { useContext, useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Classes = () => {
  // Fetch classes data
  const [classes, setClasses] = useState([]);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://summercamp-ten.vercel.app/classes")
      .then((res) => res.json())
      .then((classes) => {
        setClasses(classes);
      });
  }, []);

  const AddToSelectedClass = (cls) => {
    const { ClassImg, price, availableSeat, Name, _id } = cls;
    if (user && user.email) {
      const item = {
        itemId: _id,
        Name,
        ClassImg,
        availableSeat,
        price,
        email: user.email,
      };
      fetch("https://summercamp-ten.vercel.app/studentclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success...",
              text: "Class inserted Successfully!",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to add class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
                  onClick={() => AddToSelectedClass(cls)}
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

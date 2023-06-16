import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summercamp-ten.vercel.app/instructors")
      .then((res) => res.json())
      .then((instructors) => {
        setInstructors(instructors);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Instructors | LinguaViva</title>
      </Helmet>
      <div className="grid py-7 bg-slate-300 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-3">
        {instructors.map((ins) => (
          <div
            key={ins._id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden flex"
          >
            <div className="w-1/2">
              <img
                src={ins.InstructorImg}
                alt="Instructor"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="pt-4 pl-2 pr-3 w-1/2">
              <h2 className="text-xl font-semibold mb-2">{ins.Name}</h2>
              <p className="text-gray-800 font-serif mb-5 ">{ins.email}</p>
              <p className="text-gray-600 italic mb-1 font-semibold">
                Number of Classes: {ins.ClassNumber}
              </p>
              <p className="text-gray-600 italic mb-1 font-semibold">
                Classes: {ins.classesName.join(", ")}
              </p>
              <div className="flex justify-end">
                <button className="bg-blue-500 absolute bottom-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Classes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructors;

/* import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("https://summercamp-ten.vercel.app/instructors")
          .then((res) => res.json())
          .then((instructors) => {
            setInstructors(instructors);
          });
      }, []);
    return (
        <>
        <Helmet>
            <title>Instructors | LinguaViva</title>
        </Helmet>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
            {
                instructors.map(ins=>(
                    <div key={ins._id} className="card card-side bg-base-100 space-x-2 space-y-2 shadow-xl">
                    <figure><img className="rounded" src={ins.InstructorImg} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">New movie is released!</h2>
                      <p>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                      </div>
                    </div>
                  </div> 
                ))
            }
        </div>
        </>
    );
};

export default Instructors; */

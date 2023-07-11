
import { useEffect } from "react";
import { useState } from "react";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://summercamp-ten.vercel.app/popularclass")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="my-12 max-w-7xl mx-auto">
      <p className="basic-font text-3xl mb-4 mt-5 lg:text-5xl text-center">
        Popular Classes Here in Academy
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {classes.map((cls) => (
          <div
            key={cls._id}
            className="card  md:full bg-base-100 hover:shadow-lg shadow-xl"
          >
            <figure>
              <img className="object-cover w-full h-52 lg:h-64 rounded-t-md" src={cls.ClassImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cls.Name}!</h2>
              <p>Teacher: {cls.InstructorName}</p>
              <p className="text-blue-500">Admitted Student: {cls.admitted}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;

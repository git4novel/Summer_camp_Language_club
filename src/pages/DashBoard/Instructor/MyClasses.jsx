// import React from 'react';
import { RxUpdate } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://summercamp-ten.vercel.app/classes?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the retrieved data
        console.log(data);
        setClasses(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div className="m-3 p-3">
      <h1>{user.displayName}: Added Class</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Class Seat</th>            
              <th>Status</th>
              <th>total enrolled</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((myClass, index) => (
              <tr key={myClass._id} className="bg-base-200 py-2 m-2 gap-1">
                <td>{index + 1}</td>
                <td>{myClass.Name}</td>
                <td>{myClass.price}</td>
                <td>{myClass.availableSeat}</td>
                <td>{myClass.pendingStatus}</td>
                <td>{myClass.enrolled? myClass.enrolled : 0 }</td>
                <td>{myClass.feedback ? myClass.feedback : "nothing"}</td>
                <td>
                  <button className="btn btn-ghost bg-yellow-400 text-white">
                    <RxUpdate />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/allclasses");
    console.log(res.data);
    return res.data;
  });

  const handleApprove = (cls) => {
    fetch(`https://summercamp-ten.vercel.app/classes/approve/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${cls.Name} is approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (cls) => {
    fetch(`https://summercamp-ten.vercel.app/classes/deny/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${cls.Name} is approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }; 
  
  const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback message
  const [selectedClass, setSelectedClass] = useState(null); // State for selected class

  const handleFeedback = () => {
    if (selectedClass) {
      fetch(`https://summercamp-ten.vercel.app/classes/feedback/${selectedClass._id}`, {
        method: "PATCH",
        body: JSON.stringify({ message: feedbackMessage }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "question",
              title: `${selectedClass.Name} is given feedback`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    // Set the feedback message
    const feedbackTextArea = document.getElementById("feedbackTextArea");
    setFeedbackMessage(feedbackTextArea.value);
    // Close the modal
    const myModal = document.getElementById("my_modal_1");
    myModal.close();
    // Call handleFeedback
    handleFeedback();
  };


  return (
    <div className="p-3 m-3">
      <h4 className="text-xl font-semibold text-center">Manage Users</h4>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>status</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((cls) => (
              <tr key={cls._id}>
                {/* classname and Img */}
                <td>
                  <p>{cls?.Name}</p>
                  <img className="w-12 rounded-md" src={cls.ClassImg} alt="" />
                </td>
                {/* instructor name and email */}
                <td>
                  <p>{cls.InstructorName}</p>
                  <p>{cls.email}</p>
                </td>
                <td>{cls?.availableseat}</td>
                <td>{cls?.price}</td>
                <td>{cls?.pendingStatus}</td>
                <td>
                  {cls.pendingStatus === ("approved" || "denied") ? (
                    <div className="flex flex-col gap-1">
                      <button className="btn btn-disabled btn-sm text-sm">
                        Approve
                      </button>
                      <button className="btn btn-disabled  btn-sm text-sm">
                        Deny
                      </button>
                      <button className="btn btn-disabled  btn-sm text-sm">
                        Feedback
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => handleApprove(cls)}
                        className="btn btn-success  btn-sm text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(cls)}
                        className="btn btn-primary  btn-sm text-sm"
                      >
                        Deny
                      </button>
                      <button
                        onClick={() => {
                            setSelectedClass(cls);
                            const myModal = document.getElementById("my_modal_1");
                            myModal.showModal();
                          }}
                        className="btn btn-secondary  btn-sm text-sm"
                      >
                        Feedback
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {/* Feedback modal */}
       <dialog id="my_modal_1" className="modal">
        <form onSubmit={handleModalSubmit} className="modal-box">
          <h3 className="font-bold text-lg">Feedback</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <textarea id="feedbackTextArea" name="feedback" className="bg-gray-300"></textarea>
          <div className="modal-action">
            <button type="submit" className="btn">
              Send Feedback
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;

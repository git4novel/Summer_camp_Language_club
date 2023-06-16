import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';
import useAddedClass from "../../../hooks/useAddedClass";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MySelectedClass = () => {
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [classes, refetch] = useAddedClass();
  const [paymentValue, setPaymentValue] = useState(0);

  const handleDelete = (myClass) => {
    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You can't revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/studentclass/${myClass._id}`)
          .then(res => {
            console.log('deleted res', res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'Your class deleted.',
                'success'
              )
            }
          })
      }
    })
  }

  const handlePayment = (myClass) => {
    navigate('/dashboard/payment', {
      state: { amount: myClass.price } // Pass the payment value in the state object
    });
  }

  return (
    <div className="my-4 mx-2">
      <h4>My selected Class</h4>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Class Name</th>
              <th>Class Seat</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((myClass, index) => (
              <tr key={myClass._id} className="bg-base-200 my-2">
                <td>{index+1}</td>
                <td>{myClass.Name}</td>
                <td>{myClass.availableSeat}</td>
                <td>{myClass.price}</td>
                <td>
                  <button
                    className='btn bg-warning font-semibold text-white'
                    onClick={() => handlePayment(myClass)}
                  >
                    <FaAmazonPay />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-ghost bg-red-600 text-white"
                    onClick={() => handleDelete(myClass)}
                  >
                    <FaTrashAlt />
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

export default MySelectedClass;

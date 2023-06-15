import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';
import useAddedClass from "../../../hooks/useAddedClass";
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MySelectedClass = () => {

  const [axiosSecure] = useAxiosSecure()
  const [classes, refetch] = useAddedClass();


  const handleDelete = (myclass) =>{
    Swal.fire({
      title: 'Are you sure to delete?',
      text: "You Cant revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          axiosSecure.delete(`/studentclass/${myclass._id}`)
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

  return (
    <div className="my-4 mx-2">
      <h4>My selected Class</h4>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Class Name</th>
              <th>Class Seat</th>
              <th>Favorite Color</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((myClass, index) => <tr key={myClass._id} className="bg-base-200">
                <td>
                  {index+1}
                </td>
                 <td>{myClass.Name}</td> 
                 <td>{myClass.availableSeat}</td>
                 <td>{myClass.price}</td>
                 <td>
                  <Link to={'/dashboard/payment'}>
                  <button className='btn bg-warning font-semibold text-white'>
                    <FaAmazonPay/>
                  </button>
                  </Link>
                 </td>
                 <td>
                 <button onClick={() => handleDelete(myClass)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                 </td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;


import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAddedClass from "../../../hooks/useAddedClass";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);

  const [classes, refetch] = useAddedClass()

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


{/* <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody> */}
        {/* <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
import { FaTrashAlt } from "react-icons/fa";

const PaymentHistory = () => {
    return (
        <div>
            <h3>All Payment history is here</h3>
            <div className="my-4 mx-2">
        <h4>My Enrolled Class Class</h4>
  
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
                <tr className="bg-base-200">
                  <td>+1</td>
                  <td>myClass.Name</td>
                  <td>myClass.availableSeat</td>
                  <td>yClass.price</td>
                  <td>
                   <h3>he</h3>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
                <br />
                <tr className="bg-base-200">
                  <td>+1</td>
                  <td>myClass.Name</td>
                  <td>myClass.availableSeat</td>
                  <td>yClass.price</td>
                  <td>
                   <h3>he</h3>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default PaymentHistory;
import React from "react";

function EmployeeTable({
  employees,
  handleEdit,
  handleDelete,
}) {

  return (

    <div className="table-container">

      <h2>All Employees</h2>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp, index) => (

            <tr key={emp.employeeId}>

              <td>{emp.employeeId}</td>

              <td>
                {emp.firstName} {emp.lastName}
              </td>

              <td>{emp.department}</td>

              <td>{emp.designation}</td>

              <td>₹{emp.salary}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(index)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(
                      emp.employeeId
                    )
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default EmployeeTable;
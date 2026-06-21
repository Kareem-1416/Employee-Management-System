import React from "react";

function EmployeeForm({
  employee,
  handleChange,
  handleDOBChange,
  handleSubmit,
  editIndex,
}) {

  return (

    <div className="form-container">

      <h2>
        {editIndex !== null
          ? "Update Employee"
          : "Add Employee"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={employee.employeeId}
            onChange={handleChange}
            placeholder="MAHIYA01"
            disabled={editIndex !== null}
            required
          />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            placeholder="Syed"
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            placeholder="Kareem"
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleDOBChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            value={employee.age}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={employee.bloodGroup}
            onChange={handleChange}
            placeholder="B+"
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            placeholder="Software Development"
          />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            placeholder="Software Engineer"
          />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="50000"
          />
        </div>

        <div className="form-group">
          <label>Bonus</label>
          <input
            type="number"
            name="bonus"
            value={employee.bonus}
            onChange={handleChange}
            placeholder="5000"
          />
        </div>

        <div className="form-group">
          <label>Incentive</label>
          <input
            type="number"
            name="incentive"
            value={employee.incentive}
            onChange={handleChange}
            placeholder="3000"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            placeholder="996688****"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="kareemsyed.official@gmail.com"
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={employee.address}
            onChange={handleChange}
            placeholder="Hyderabad, Telangana"
          />
        </div>

        <button
          className="submit-btn"
          type="submit"
        >
          {editIndex !== null
            ? "Update Employee"
            : "Add Employee"}
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;
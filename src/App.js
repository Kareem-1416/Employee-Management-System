import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import SearchEmployee from "./components/SearchEmployee";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeService from "./services/EmployeeService";

function App() {

  const [employees, setEmployees] = useState([]);
  const [showEmployees, setShowEmployees] = useState(false);

  const [searchId, setSearchId] = useState("");
  const [searchedEmployee, setSearchedEmployee] = useState(null);

  const [editIndex, setEditIndex] = useState(null);

  const [employee, setEmployee] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    dob: "",
    age: "",
    bloodGroup: "",
    department: "",
    designation: "",
    salary: "",
    bonus: "",
    incentive: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleDOBChange = (e) => {
    const dob = new Date(e.target.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 &&
        today.getDate() < dob.getDate())
    ) {
      age--;
    }

    setEmployee({
      ...employee,
      dob: e.target.value,
      age: age,
    });
  };

  const clearForm = () => {
    setEmployee({
      employeeId: "",
      firstName: "",
      lastName: "",
      dob: "",
      age: "",
      bloodGroup: "",
      department: "",
      designation: "",
      salary: "",
      bonus: "",
      incentive: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (editIndex !== null) {

        await EmployeeService.updateEmployee(
          employee.employeeId,
          employee
        );

        setEditIndex(null);

      } else {

        await EmployeeService.addEmployee(
          employee
        );
      }

      fetchEmployees();
      clearForm();

      alert("Employee Saved Successfully");

    } catch (error) {

      console.error(error);
      alert("Error Saving Employee");
    }
  };

  const handleDelete = async (employeeId) => {

    try {

      await EmployeeService.deleteEmployee(
        employeeId
      );

      fetchEmployees();

      alert("Employee Deleted Successfully");

    } catch (error) {

      console.error(error);
      alert("Delete Failed");
    }
  };

  const handleEdit = (index) => {

    setEmployee(employees[index]);

    setEditIndex(index);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const searchEmployee = async () => {

    if (!searchId) {
      alert("Please Enter Employee ID");
      return;
    }

    try {

      const response =
        await EmployeeService.getEmployeeById(
          searchId
        );

      setSearchedEmployee(response.data);

    } catch (error) {

      console.error(error);

      alert("Employee Not Found");

      setSearchedEmployee(null);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <SearchEmployee
          searchId={searchId}
          setSearchId={setSearchId}
          searchEmployee={searchEmployee}
          setShowEmployees={setShowEmployees}
        />

        {searchedEmployee && (

          <div className="employee-card animate-card">

            <h2>Employee Details</h2>

            <div className="details-grid">

              <p>
                <strong>ID:</strong>{" "}
                {searchedEmployee.employeeId}
              </p>

              <p>
                <strong>Name:</strong>{" "}
                {searchedEmployee.firstName}{" "}
                {searchedEmployee.lastName}
              </p>

              <p>
                <strong>Age:</strong>{" "}
                {searchedEmployee.age}
              </p>

              <p>
                <strong>Blood Group:</strong>{" "}
                {searchedEmployee.bloodGroup}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {searchedEmployee.department}
              </p>

              <p>
                <strong>Designation:</strong>{" "}
                {searchedEmployee.designation}
              </p>

              <p>
                <strong>Salary:</strong> ₹
                {searchedEmployee.salary}
              </p>

              <p>
                <strong>Bonus:</strong> ₹
                {searchedEmployee.bonus}
              </p>

              <p>
                <strong>Incentive:</strong> ₹
                {searchedEmployee.incentive}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {searchedEmployee.phone}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {searchedEmployee.email}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {searchedEmployee.address}
              </p>

            </div>

          </div>

        )}

        <EmployeeForm
          employee={employee}
          handleChange={handleChange}
          handleDOBChange={handleDOBChange}
          handleSubmit={handleSubmit}
          editIndex={editIndex}
        />

        {showEmployees && (

          <EmployeeTable
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />

        )}

      </div>
    </>
  );
}

export default App;
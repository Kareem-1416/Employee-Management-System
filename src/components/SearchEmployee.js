import React from "react";

function SearchEmployee({
  searchId,
  setSearchId,
  searchEmployee,
  setShowEmployees,
}) {

  return (

    <div className="search-section">

      <input
        type="text"
        className="search-input"
        placeholder="Enter Employee ID (Example: EMP101)"
        value={searchId}
        onChange={(e) =>
          setSearchId(e.target.value)
        }
      />

      <button
        className="search-btn"
        onClick={searchEmployee}
      >
        Search Employee
      </button>

      <button
        className="all-btn"
        onClick={() =>
          setShowEmployees(true)
        }
      >
        Get All Employees
      </button>

    </div>

  );
}

export default SearchEmployee;
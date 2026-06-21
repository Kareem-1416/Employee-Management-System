package com.employee.management.service;



import java.util.List;
import java.util.Optional;

import com.employee.management.entities.Employee;

public interface EmployeeService {

    // Add Employee
    Employee addEmployee(Employee employee);

    // Get All Employees
    List<Employee> getAllEmployees();

    // Get Employee By ID
    Optional<Employee> getEmployeeById(String employeeId);

    // Update Employee
    Employee updateEmployee(String employeeId, Employee employee);

    // Delete Employee
    void deleteEmployee(String employeeId);

}
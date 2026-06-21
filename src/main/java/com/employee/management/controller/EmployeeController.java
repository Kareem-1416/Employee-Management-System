package com.employee.management.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.employee.management.entities.Employee;
import com.employee.management.service.EmployeeService;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Add Employee
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    // Get All Employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // Get Employee By ID
    @GetMapping("/{employeeId}")
    public Optional<Employee> getEmployeeById(
            @PathVariable String employeeId) {

        return employeeService.getEmployeeById(employeeId);
    }

    // Update Employee
    @PutMapping("/{employeeId}")
    public Employee updateEmployee(
            @PathVariable String employeeId,
            @RequestBody Employee employee) {

        return employeeService.updateEmployee(employeeId, employee);
    }

    // Delete Employee
    @DeleteMapping("/{employeeId}")
    public String deleteEmployee(
            @PathVariable String employeeId) {

        employeeService.deleteEmployee(employeeId);

        return "Employee Deleted Successfully";
    }
}

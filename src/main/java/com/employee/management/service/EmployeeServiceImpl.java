package com.employee.management.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Employee;
import com.employee.management.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> getEmployeeById(String employeeId) {
        return employeeRepository.findById(employeeId);
    }

    @Override
    public Employee updateEmployee(String employeeId, Employee employee) {

        Optional<Employee> existingEmployee =
                employeeRepository.findById(employeeId);

        if (existingEmployee.isPresent()) {

            Employee emp = existingEmployee.get();

            emp.setFirstName(employee.getFirstName());
            emp.setLastName(employee.getLastName());
            emp.setDob(employee.getDob());
            emp.setAge(employee.getAge());
            emp.setBloodGroup(employee.getBloodGroup());
            emp.setDepartment(employee.getDepartment());
            emp.setDesignation(employee.getDesignation());
            emp.setSalary(employee.getSalary());
            emp.setBonus(employee.getBonus());
            emp.setIncentive(employee.getIncentive());
            emp.setPhone(employee.getPhone());
            emp.setEmail(employee.getEmail());
            emp.setAddress(employee.getAddress());

            return employeeRepository.save(emp);
        }

        return null;
    }

    @Override
    public void deleteEmployee(String employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
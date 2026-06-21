import axios from "axios";

const BASE_URL = "http://localhost:8080/employees";

class EmployeeService {

    getAllEmployees() {
        return axios.get(BASE_URL);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${BASE_URL}/${employeeId}`);
    }

    addEmployee(employee) {
        return axios.post(BASE_URL, employee);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(
            `${BASE_URL}/${employeeId}`,
            employee
        );
    }

    deleteEmployee(employeeId) {
        return axios.delete(
            `${BASE_URL}/${employeeId}`
        );
    }
}

export default new EmployeeService();
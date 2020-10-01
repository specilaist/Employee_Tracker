class Employee {
      constructor(firstName, lastName, role, managerId) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.role = role;
            this.manager = managerId
      }
};

module.exports = Employee;
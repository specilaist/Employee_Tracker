const Employee = require('./Employee');

class Manager extends Employee {
      constructor(firstName, lastName, role, managerId, manager) {
            super(firstName, lastName, role, managerId)
            this.manager = manager
      }
};

module.exports = Manager;
const Employee = require('./employeeClass/Employee');
// const Manager = require('./employeeClass/Manager');
const inquirer = require('inquirer');
const mySql = require('mysql');
const connection = require('./connection');

const employeeLog = [];

const startApp = () => {
      inquirer.prompt([
            {
                  name: 'start',
                  type: 'confirm',
                  message: 'Would you like to create a new Employee?',
            },
            {
                  name: 'action',
                  type: 'rawlist',
                  message: 'Please pick an action you would like to run',
                  choices: ['Create a new employee', 'Add departments', 'View departments', 'Update employee roles', 'View combined budget', 'View employees by manager', 'Update employee managers', ]
            }
      ]).then((answer) => {
            if (answer.action === 'Create a new employee') {
                  newEmployee();
            }
            
      });
};

function newEmployee() {
      inquirer.prompt([
            {
                  name: 'firstName',
                  type: 'input',
                  message: 'Please input your First Name'
            },
            {
                  name: 'lastName',
                  type: 'input',
                  message: 'Please input your Last Name'

            },
            {
                  name: 'role',
                  type: 'input',
                  message: 'Please tell us your role'
            },
            {
                  name: 'managerId',
                  type: 'input',
                  message: 'What is your manager Id?'
            }

      ]).then((answer) => {
            const employee = new Employee(answer.firstName, answer.lastName, answer.role, answer. managerId);
            console.log(employee);
            employeeLog.push(employee);
      })
};

startApp();

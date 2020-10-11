const Employee = require('./employeeClass/Employee');
// const Manager = require('./employeeClass/Manager');
const inquirer = require('inquirer');
const mySql = require('mysql');
const table = require('console.table');
const connection = require('./connection');
const employeeQuery = require('./queries/employeeQuery');

const employeeLog = [];

const startApp = () => {
      inquirer.prompt([
            {
                  name: 'start',
                  type: 'confirm',
                  message: 'Would you like to enter the database?'
            },
            {
                  name: 'action',
                  type: 'list',
                  message: 'Please pick an action you would like to run',
                  choices: ['Create a new employee', 'Add departments', 'View departments', 'Update employee roles', 'View combined budget', 'View employees by manager', 'Update employee managers', ]
            }
      ]).then((answer) => {
            switch(answer.action) {
                  case 'Create a new employee':
                      newEmployee();
                      break;
                  case 'Add departments':
                      addDepartments();
                      break;
                  case 'View departments':
                      viewDepartments();
                      break;
                  case 'Update employee roles':
                      updateRoles();
                      break;
                  case 'View combined budget':
                      viewBudget();
                      break;
                  case 'View employees by manager':
                      viewManager();
                      break;
                  case 'Update employee managers':
                      updateManager();
                      break;
                  default:
                      connection.end();
            }
       
      });
};

function newEmployee() {
      inquirer.prompt([
            {
                  name: 'first_name',
                  type: 'input',
                  message: 'Please input your First Name'
            },
            {
                  name: 'last_name',
                  type: 'input',
                  message: 'Please input your Last Name'

            },
            {
                  name: 'role_id',
                  type: 'input',
                  message: 'Please tell us your role'
            },
            {
                  name: 'manager_id',
                  type: 'input',
                  message: 'What is your manager Id?'
            }

      ]).then((answer) => {
            const employee = new Employee(answer.first_name, answer.last_name, answer.role_id, answer. manager_id);
            console.table(employee);
            const queries = "SELECT * FROM employees"
            connection.query(queries, function(err, res) {
                  if(err) throw err;
                  console.table(res);
            })
            employeeLog.push(employee);
            employeeQuery(answer);
      })
};

const addDepartments = () => {
  inquirer.prompt([
    {
      name: 'department',
      type: 'input',
      message: 'Please create a new department'
    }
  ]).then((answer) => {
    console.log(answer);
    const queries = "INSERT INTO department SET ?;";
    connection.query(queries, (err, employee))

  })
};

const viewDepartments = () => {
  const queries = "SELECT * FROM department;";
  connection.query(queries, (err, employee) => {
    if (err) throw err;
    console.table(employee)
  });
  startApp();
};

const viewBudget = () => {
  const queries = "SELECT * FROM role;";
  connection.query(queries, (err, budget) => {
    if (err) throw err;
    console.table(budget)
  });
  startApp();
};

const viewManager = () => {
  const queries = "SELECT * FROM employees;";
  connection.query(queries, (err, employee))
};

const updateManager = () => {
  inquirer.prompt([
    {
      name: 'department',
      type: 'input',
      message: 'Please create a new department'
    }
  ]).then((answer) => {
    console.log(answer);
    const queries = "UPDATE  SET ?;";
    connection.query(queries, (err, employee))

  })
  const queries = "SELECT * FROM employees;";
  connection.query(queries, (err, employee))
};

// const updateRoles = () => {
//   connection.query("SELECT * FROM auctions;", (err, employees) => {

//   }
//   inquirer.prompt([
//     {
//       name: 'department',
//       type: 'input',
//       message: 'Please create a new department'
//     }
//   ]).then((answer) => {
//     console.log(answer);
//     const queries = "INSERT INTO employees SET ?;";
//     connection.query(queries, (err, employee))

//   })
//   const queries = "SELECT * FROM employees;";
//   connection.query(queries, (err, employee))
// };


startApp();

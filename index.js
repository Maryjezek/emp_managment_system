const mysql = require('mysql2');
const table = require('console.table');


const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQLpassword
  password: 'rootroot',
  database: 'company'
});

const inquirer = require("inquirer");


const promptUser = () => {
  return inquirer.prompt([
    //First question
    {
      type: "list",
      name: "what",
      message: "What do you want to view? (select only one to apply)",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
    },
  ]).then(choice => {
    switch(choice.what){
      case 'view all departments':
        let queryString = "SELECT * from department";
        db.query(queryString, (error, result) => {
          if(error) {
            throw error;
          }
            console.table(result);
            promptUser();
        });
        break;
        case 'view all roles':
          let queryString2 = "SELECT * from role_table";
          db.query(queryString2, (error, result) => {
            if(error) {
              throw error;
            }
              console.table(result);
              promptUser();
          });
          break;
          case 'view all employees':
            let queryString3 = "SELECT * from employees";
            db.query(queryString3, (error, result) => {
              if(error) {
                throw error;
              }
                console.table(result);
                promptUser();
            });
            break;
          case 'add a department':
              return inquirer
          .prompt([
            {
              type: "input",
              name: "department_name",
              message: "Enter the new department name? (Required)",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the department name!");
                  return false;
                }
              },
            },
          ]).then(params => {
              let queryString4 = `INSERT INTO department (dep_name) VALUES (?)`;
              db.query(queryString4, params.department_name, (error, result) => {
                if(error) {
                  throw error;
                }
                let queryString = "SELECT * from department";
                db.query(queryString, (error, result) => {
                  if(error) {
                    throw error;
                  }
                  console.table(result);
                  promptUser();
                });
              });
              });
              
         break;  
            //adding new condition 
        case 'add a role':
              return inquirer
            .prompt([
            {
              type: "input",
              name: "role",
              message: "Enter the new role title? (Required)",
            },
            {
              type: "input",
              name: "role_salary",
              message: "Enter the new role salary? (Required)",
            },
            {
              type: "input",
              name: "role_depid",
              message: "Enter the new role department id? (Required)",
            },

            ]).then(params => {
              
              let queryString4 = `INSERT INTO role_table (title, salary, department_id) VALUES (?,?,?)`;
              const allOfIt = [params.role, params.role_salary, params.role_depid];
              console.log(allOfIt);
              db.query(queryString4, allOfIt, (error, result) => {
                if(error) {
                  throw error;
                }
                let queryString = "SELECT * from role_table";
                db.query(queryString, (error, result) => {
                  if(error) {
                    throw error;
                  }
                  console.table(result);
                  promptUser();
                });
              });
              });
              
            break;  
            //adding new condition 
            case 'add an employee':
              return inquirer
            .prompt([
            {
              type: "input",
              name: "first_name",
              message: "Enter the first name? (Required)",
            },
            {
              type: "input",
              name: "last_name",
              message: "Enter the last name? (Required)",
            },
            {
              type: "input",
              name: "role_id",
              message: "Enter the new role id? (Required)",
            },
            {
              type: "input",
              name: "manager_id",
              message: "Enter the manager id? (Required)",
            },

            ]).then(params => {
              
              let queryString4 = `INSERT INTO employees  (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
              const allOfIt = [params.first_name, params.last_name, params.role_id, params.manager_id ];
              console.log(allOfIt);
              db.query(queryString4, allOfIt, (error, result) => {
                if(error) {
                  throw error;
                }
                let queryString = "SELECT * from employees";
                db.query(queryString, (error, result) => {
                  if(error) {
                    throw error;
                  }
                  console.table(result);
                  promptUser();
                });
              });
              });
              
            break;  
            //adding update condition 








    
/*do not remove anything below here*/

      };

 
});
  
};
promptUser();  
 
 

    /*
                case 'add an employee':
                  let queryString6 = "SELECT * from employees";
                  db.query(queryString6, (error, result) => {
                    if(error) {
                      throw error;
                    }
                      console.table(result);
                      promptUser();
                  });
                  break;
                  case 'update an employee role':
                    let queryString7 = "SELECT * from employees";
                    db.query(queryString7, (error, result) => {
                      if(error) {
                        throw error;
                      }
                        console.table(result);
                        promptUser();
                    });
                    break; */




      
/*       default:
        // maybe delete later
        break; */

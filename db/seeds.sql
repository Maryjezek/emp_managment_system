
INSERT INTO department
  (dep_name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role_table
  (title, salary, department_id  )
VALUES
  ('Salesperson', 30000.00, 1 ),
  ('Lead Engineer', 60000.00, 2),
  ('Software Engineer', 70000.00, 2),
  ('Account Manager', 80000.00, 3),
  ('Accountant', 50000.00, 3),
  ('Legal Team Lead', 100000.00, 4),
  ('Lawyer', 100000.00, 4);



INSERT INTO employees
  (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL ),
  ('Jack', 'London', 2, 1 ),
  ('Robert', 'Bruce', 3, 1 ),
  ('Peter', 'Greenaway', 4, NULL),
  ('Derek', 'Jarman', 4, 4),
  ('Paolo', 'Pasolini', 1, 4),
  ('Heathcote', 'Williams', 3, NULL),
  ('Sandy', 'Powell', 4, NULL);
  
  
  /*
  ('Emil', 'Zola', 8, 108),
  ('Sissy', 'Coalpits', 9, 109),
  ('Antoinette', 'Capet', 10, 110),
  ('Samuel', 'Delany', 11, 111),
  ('Tony', 'Duvert', 12, 112),
  ('Dennis', 'Cooper', 13, 113),
  ('Monica', 'Bellucci', 14, 114),
  ('Samuel', 'Johnson', 15, 115),
  ('John', 'Dryden', 16, 116),
  ('Alexander', 'Pope', 17, 117),
  ('Lionel', 'Johnson', 18, 118),
  ('Aubrey', 'Beardsley', 19, 119),
  ('Tulse', 'Luper', 20, 120),
  ('William', 'Morris', 21, 121),
  ('George', 'Shaw', 22, 122),
  ('Arnold', 'Bennett', 23, 123),
  ('Algernon', 'Blackwood', 24, 124);
*/

  
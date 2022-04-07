USE hr;

-- 1

SELECT
  emp.FIRST_NAME AS 'Empregado',
  man.FIRST_NAME AS 'Gerente'
FROM
  employees AS emp
INNER JOIN
  employees AS man
    ON
      emp.DEPARTMENT_ID <> man.DEPARTMENT_ID;
-- 2

SELECT
  CONCAT(man.FIRST_NAME, ' ', man.LAST_NAME) AS 'Gerente',
  COUNT(*) AS 'qtd'
FROM
  employees AS man
INNER JOIN
  employees AS emp
    ON
      man.EMPLOYEE_ID = emp.MANAGER_ID
GROUP BY
  man.EMPLOYEE_ID;
SELECT MAX(SALARY)
FROM hr.employees;
SELECT MAX(SALARY) - MIN(SALARY)
FROM hr.employees;
SELECT JOB_ID, AVG(SALARY)
FROM hr.employees
GROUP BY JOB_ID;
SELECT SUM(SALARY)
FROM hr.employees;
SELECT
	ROUND(MAX(SALARY), 2) AS 'Maior salario',
    ROUND(MIN(SALARY), 2) AS 'Menor salario',
    ROUND(SUM(SALARY), 2) AS 'Soma de todos os salarios',
    ROUND(AVG(SALARY), 2) AS 'Media dos salarios'
FROM hr.employees;
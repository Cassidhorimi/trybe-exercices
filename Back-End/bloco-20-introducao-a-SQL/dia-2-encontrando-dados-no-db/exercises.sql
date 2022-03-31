SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT 3 * 3;
SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists
ORDER BY Name ASC;
SELECT * FROM Scientists.Projects
ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS frase FROM Scientists.Projects;
SELECT * FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;
SELECT DISTINCT Scientist FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;
SELECT Name FROM Scientists.Projects
ORDER BY Hours
LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects
ORDER BY Hours
LIMIT 5;
SELECT CONCAT('Existem ', COUNT(SSN), ' cientistas na tabela Scientists.') AS frase FROM Scientists;
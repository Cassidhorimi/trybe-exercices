SELECT * FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE actor_id = 12;

SELECT * FROM sakila.actor;

SELECT * FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

SELECT * FROM sakila.actor;

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

SELECT * FROM sakila.film_text;

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film_category;
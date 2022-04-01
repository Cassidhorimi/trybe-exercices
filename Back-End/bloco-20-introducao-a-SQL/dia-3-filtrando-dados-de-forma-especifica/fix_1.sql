SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND first_name <> 'KENNETH'
ORDER BY first_name;
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'R'
AND rating <> 'NC-17'
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;
SELECT COUNT(*) AS ativos FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS FALSE;
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
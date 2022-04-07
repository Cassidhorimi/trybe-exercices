-- 1

SELECT
  act.actor_id,
  act.first_name,
  fil.film_id
FROM
  sakila.actor AS act
INNER JOIN
	film_actor AS fil
    ON
      act.actor_id = fil.actor_id;
    
-- 2

SELECT
	sta.first_name,
  sta.last_name,
  adr.address
FROM
	sakila.staff AS sta
INNER JOIN
	address AS adr
    ON
      sta.address_id = adr.address_id;
    
-- 3

SELECT
	cus.customer_id,
  cus.first_name,
  cus.email,
  adr.address_id,
  adr.address
FROM
	sakila.customer AS cus
INNER JOIN
	address AS adr
    ON
      cus.address_id = adr.address_id
ORDER BY
	cus.first_name DESC
LIMIT 100;

-- 4

SELECT
	cus.customer_id,
  cus.email,
  adr.address_id,
  adr.address,
  adr.district
FROM 
	sakila.customer AS cus
INNER JOIN 
	address AS adr
    ON 
      cus.address_id = adr.address_id
WHERE 
	adr.district = 'California' 
AND 
	cus.first_name LIKE '%rene%';
    
-- 5

SELECT
	cus.first_name,
  COUNT(adr.address) AS `qtd`
FROM
	sakila.customer AS cus
INNER JOIN
	sakila.address AS adr
    ON
      cus.address_id = adr.address_id
WHERE
	cus.active = 1
GROUP BY
	cus.customer_id
ORDER BY
	first_name DESC,
  last_name DESC;
    
-- 6 

SELECT 
	sta.first_name,
  sta.last_name,
  AVG(pay.amount) AS `payment`
FROM
	sakila.staff AS sta
INNER JOIN
	payment AS pay
    ON
      sta.staff_id = pay.staff_id
WHERE
	YEAR(pay.payment_date) = 2006
GROUP BY
	sta.first_name,
  sta.last_name;

-- 7

SELECT
  act.actor_id, 
  act.first_name,
  act.last_name,
  fil.film_id, 
  fil.title
FROM
  sakila.actor AS act
INNER JOIN
  sakila.film_actor AS fil_act
    ON 
      act.actor_id = fil_act.actor_id
INNER JOIN
  sakila.film AS fil
    ON
	    fil.film_id = fil_act.film_id;
    SELECT rating, AVG(`length`) AS media_duracao
    FROM sakila.film
    GROUP BY rating
    HAVING media_duracao BETWEEN 115.0 AND 121.50
    ORDER BY media_duracao DESC;
	SELECT rating, SUM(replacement_cost) AS custo
    FROM sakila.film
    GROUP BY rating
    HAVING custo > 3950.50
    ORDER BY custo;
USE Pixar;

-- 1

SELECT
  mov.title,
  box.domestic_sales,
  international_sales
FROM
  Movies AS mov
INNER JOIN
  BoxOffice AS box
    ON
      mov.id = box.movie_id;
      
-- 2

USE Pixar;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;
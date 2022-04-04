INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES ('CASSID', 'HORIMI', 5, 'cassid@teste.com', 2, 3, 'Cassid', '8cb2237x0679ca88db6464eaq60da96345523964', now()),
('LUANA', 'ROGELIN', 6, 'luana@teste.com', 2, 3, 'Luana', '8cb2237p0679ca88db6464eaq60da96345523965', now());
INSERT INTO sakila.actor (first_name, last_name)
SELECT sakila.customer.first_name, sakila.customer.last_name
FROM sakila.customer
LIMIT 5;
INSERT IGNORE INTO sakila.category (`name`, last_update)
VALUES ('Dance', now()),
('Bibliographer', now()),
('Thriller', now());
INSERT IGNORE INTO sakila.store (manager_staff_id, address_id, last_update)
VALUES (3, 3, now());
SELECT * FROM sakila.store;
SELECT * FROM sakila.category;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;
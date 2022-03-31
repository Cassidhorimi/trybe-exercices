USE faculdade;
SELECT nome FROM biblioteca;
SELECT COUNT(*) FROM biblioteca;
SELECT nome FROM biblioteca
WHERE nome != 'Um livro do Ano' AND nome != 'Novas conquistas novas responsabilidades'
LIMIT 2;
SELECT nome FROM biblioteca
ORDER BY nome, ano_lancamento DESC;
SELECT * FROM biblioteca
ORDER BY quantidade DESC
LIMIT 1 OFFSET 1;
SELECT * FROM biblioteca
ORDER BY vendas DESC
LIMIT 3;
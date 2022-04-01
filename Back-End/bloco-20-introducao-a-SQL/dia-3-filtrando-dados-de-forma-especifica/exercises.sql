SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;
SELECT * FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco > 15 AND Preco < 40
ORDER BY Preco;
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
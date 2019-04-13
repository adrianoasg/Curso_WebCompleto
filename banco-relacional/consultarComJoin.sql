SELECT e.nome as Estado,
    c.nome as Cidade,
    e.regiao as Regiao
FROM estados e, cidades c
where e.id = c.estado_id;

SELECT 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
FROM estados e 
INNER JOIN cidades c 
    on e.id = c.estado_id;


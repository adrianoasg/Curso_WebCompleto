ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 56640593000105),
    ('Vale', 00704307000173),
    ('Cielo', 70484085000106);

DESC empresas;
DESC prefeitos;

SELECT * FROM empresas

SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 7, 1),
    (1, 8, 0),
    (2, 7, 0),
    (2, 8, 1);

SELECT * FROM empresas_unidades


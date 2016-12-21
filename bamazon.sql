CREATE DATABASE products;

USE products;


CREATE TABLE items (
	id INTEGER(30) AUTO_INCREMENT NOT NULL,
    item_id INTEGER(15) NOT NULL,
    product_name VARCHAR (20) NOT NULL,
    department_name VARCHAR(15) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    
    PRIMARY KEY(id)


);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "almonds", "grocery", 10, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "peanuts", "grocery", 5, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "cashews", "grocery", 15, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "socks", "clothing", 15, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "hats", "clothing", 10, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "gloves", "clothing", 10, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "laptop", "electronics", 1000, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "desktop", "electronics", 500, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "dongle", "electronics", 15, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "snowboard", "sports", 200, 20)

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "tent", "sports", 100, 20)
CREATE DATABASE products;

USE products;


CREATE TABLE items (
    item_id INTEGER(15) AUTO_INCREMENT NULL,
    product_name VARCHAR (20) NOT NULL,
    department_name VARCHAR(15) NOT NULL,
    price INTEGER(4) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    
    PRIMARY KEY(item_id)


);

INSERT INTO items (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "almonds", "grocery", 10, 20)
       ,(1, "peanuts", "grocery", 5, 20)
       ,(2, "cashews", "grocery", 15, 20)
       ,(3, "socks", "clothing", 15, 20)
	   ,(4, "hats", "clothing", 10, 20)
       ,(5, "gloves", "clothing", 10, 20)
       ,(6, "laptop", "electronics", 1000, 20)
       ,(7, "desktop", "electronics", 500, 20)
       ,(8, "dongle", "electronics", 15, 20)
       ,(9, "snowboard", "sports", 200, 20)
	   ,(10, "tent", "sports", 100, 20);
       
SELECT * FROM items
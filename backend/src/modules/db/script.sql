DROP TABLE IF EXISTS loan;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS buy;
DROP TABLE IF EXISTS associate;

CREATE TABLE associate(
	id 		SERIAL			 PRIMARY KEY,
	name		VARCHAR(50) 		NOT NULL,
	email 		VARCHAR(30),
	phone 		VARCHAR(12),
	address	VARCHAR(50),
  	password	VARCHAR(12)		
);


CREATE TABLE buy(
	id 		SERIAL		 PRIMARY KEY,
	price		VARCHAR(5),
	date		DATE		
);


CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  buyinfo INTEGER,
  title VARCHAR(50) NOT NULL,
  author VARCHAR(50),
  description VARCHAR(120),
  publisher VARCHAR(50),
  cover VARCHAR(100),
  FOREIGN KEY (buyinfo) REFERENCES buy (id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);


CREATE TABLE loan(
	id		SERIAL			 PRIMARY KEY,
	associateid 	INTEGER,
	bookid		INTEGER,
	duration	INTEGER,
	status	 	VARCHAR(60),
	createat	DATE,
  	updateat	DATE,
	
	FOREIGN KEY (associateid) REFERENCES associate (id),
	FOREIGN KEY (bookid) REFERENCES book (id)
		ON UPDATE CASCADE
		ON DELETE SET NULL
);




--  Populate the Associate table
INSERT INTO associate (name, email, phone, address, password) VALUES
  ('John Doe', 'johndoe@example.com', '555-1234', '123 Main St', 'password123'),
  ('Jane Smith', 'janesmith@example.com', '555-5678', '456 Oak Ave', 'password456'),
  ('Bob Johnson', 'bobjohnson@example.com', '555-9012', '789 Elm St', 'password789');

-- Populate buy

INSERT INTO buy (price, date) VALUES
  ('29.99', '2022-01-01'),
  ('19.99', '2022-02-15'),
  ('14.99', '2022-03-30');

-- Populate book

INSERT INTO book (buyinfo, title, author, description, publisher, cover) VALUES
  (1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'A story of the decadent excesses of the Roaring Twenties', 'Scribner', 'https://example.com/greatgatsby.jpg'),
  (2, 'To Kill a Mockingbird', 'Harper Lee', 'A classic tale of racial injustice and the loss of innocence in the Deep South', 'J.B. Lippincott & Co.', 'https://example.com/tokillamockingbird.jpg'),
  (3, '1984', 'George Orwell', 'A dystopian novel about a totalitarian regime and the power of language and propaganda', 'Secker & Warburg', 'https://example.com/1984.jpg');


-- populate loan

INSERT INTO loan (associateid, bookid, duration, status, createat, updateat) VALUES
  (1, 1, 14, 'returned', '2022-01-10', '2022-01-11'),
  (2, 2, 7, 'borrowed', '2022-02-20', '2022-02-21'),
  (3, 3, 21, 'borrowed', '2022-03-31', '2022-04-01');



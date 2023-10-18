CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  email VARCHAR(100)
);

ALTER TABLE usuarios ADD COLUMN edad INT;
INSERT INTO usuarios (nombre, email,edad)
VALUES
    ('Laura López', 'laura@example.com',32);

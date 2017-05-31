DELIMITER $$
DROP PROCEDURE IF EXISTS GetAllProducts;
$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllProducts`(IN todoId INTEGER)
BEGIN
	SELECT name FROM todos where id = todoId;
END
$$
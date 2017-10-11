
-- --------------------
-- Table structure for `practice`
-- --------------------
DROP TABLE IF EXISTS `maillist`;
CREATE TABLE `maillist` (
    `id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
    `telephone` VARCHAR(20) NOT NULL,
	`company` VARCHAR(50),
	`email` VARCHAR(50),
	`mgroup` VARCHAR(50),
	`comments` VARCHAR(50)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `maillist` VALUES (1,'刘德华','13856241251','谷歌','ldh@163.com','开源','影坛巨星');
INSERT INTO `maillist` VALUES (2,'周杰伦','15263258412','百度','zjl@163.com','开源','歌手');
INSERT INTO `maillist` VALUES (3,'范晓萱','15245632586','搜狗','fxx@163.com','开源','洗澡歌');
INSERT INTO `maillist` VALUES (4,'孙悟空','13562569854','搜狐','swk@163.com','西经','大师兄');
INSERT INTO `maillist` VALUES (5,'唐三藏','13569652688','网易','tsz@163.com','西经','取西经');
INSERT INTO `maillist` VALUES (6,'刘德华','13856241251','谷歌','ldh@163.com','开源','影坛巨星');
INSERT INTO `maillist` VALUES (7,'周杰伦','15263258412','百度','zjl@163.com','开源','歌手');
INSERT INTO `maillist` VALUES (8,'范晓萱','15245632586','搜狗','fxx@163.com','开源','洗澡歌');
INSERT INTO `maillist` VALUES (9,'孙悟空','13562569854','搜狐','swk@163.com','西经','大师兄');
INSERT INTO `maillist` VALUES (10,'唐三藏','13569652688','网易','tsz@163.com','西经','取西经');
INSERT INTO `maillist` VALUES (11,'刘德华','13856241251','谷歌','ldh@163.com','开源','影坛巨星');
INSERT INTO `maillist` VALUES (12,'周杰伦','15263258412','百度','zjl@163.com','开源','歌手');
INSERT INTO `maillist` VALUES (13,'范晓萱','15245632586','搜狗','fxx@163.com','开源','洗澡歌');
INSERT INTO `maillist` VALUES (14,'孙悟空','13562569854','搜狐','swk@163.com','西经','大师兄');
INSERT INTO `maillist` VALUES (15,'唐三藏','13569652688','网易','tsz@163.com','西经','取西经');
DROP TABLE IF EXISTS `ABOUT`;

CREATE TABLE `ABOUT` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ABOUT` WRITE;
/*!40000 ALTER TABLE `ABOUT` DISABLE KEYS */;

INSERT INTO `ABOUT` (`id`, `content`)
VALUES
	(1,'喵喵喵~');

/*!40000 ALTER TABLE `ABOUT` ENABLE KEYS */;
UNLOCK TABLES;



DROP TABLE IF EXISTS `ARTICLE`;

CREATE TABLE `ARTICLE` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT '',
  `tags` varchar(255) DEFAULT '',
  `createTime` datetime NOT NULL,
  `publishTime` datetime NOT NULL,
  `content` longtext NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ARTICLE` WRITE;
/*!40000 ALTER TABLE `ARTICLE` DISABLE KEYS */;

INSERT INTO `ARTICLE` (`id`, `title`, `tags`, `createTime`, `publishTime`, `content`, `isPublished`)
VALUES
	(220,'欢迎来到neil  Blog!','Blog','2018-01-02 16:05:45','2018-01-02 16:07:26','Enjoy ur self here!\n\n<!-- more -->\n\n```js\nconsole.log(\'Hello World!\')\n```',1);

/*!40000 ALTER TABLE `ARTICLE` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `USER`;

CREATE TABLE `USER` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;

INSERT INTO `USER` (`id`, `user`, `password`)
VALUES
	(1,'Neil','aa45f19ddc13bb122728e1a8983c2b7e');

UNLOCK TABLES;




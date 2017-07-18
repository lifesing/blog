/*
* 数据库脚本
*/

/*
* 用户表
*/
CREATE TABLE `lifesing_user` (
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `nickname` varchar(100) DEFAULT NULL COMMENT '昵称',
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户主键',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `email` varchar(255) DEFAULT NULL COMMENT '电子邮箱',
  `image` varchar(255) DEFAULT NULL COMMENT '用户头像地址',
  `website` varchar(100) DEFAULT NULL COMMENT '个人站点地址',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1为管理员 2为普通用户',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1为有效  2 为禁用',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  `create_ip` varchar(20) DEFAULT NULL COMMENT '创建ip',
  `created_by` int(11) DEFAULT NULL COMMENT '创建人',
  `last_login_at` datetime DEFAULT NULL COMMENT '上次登录时间',
  `last_login_ip` varchar(20) DEFAULT NULL COMMENT '上次登录ip',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

/*
* 文章表
*/
CREATE TABLE `lifesing_post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章唯一主键',
  `user_id` int(10) DEFAULT NULL COMMENT '作者id',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `pathname` varchar(100) DEFAULT NULL COMMENT '访问路径',
  `summary` longtext COMMENT '摘要',
  `markdown` longtext COMMENT 'markdown格式内容',
  `content` longtext COMMENT 'html格式内容',
  `image` varchar(150) DEFAULT NULL COMMENT '博文配图',
  `allow_comment` tinyint(4) DEFAULT NULL COMMENT '是否允许评论 1 为允许， 0 为不允许',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `is_public` tinyint(4) DEFAULT NULL COMMENT '1 为公开，0 为不公开',
  `type` tinyint(4) DEFAULT NULL COMMENT '0 为文章，1 为页面',
  `status` tinyint(4) DEFAULT NULL COMMENT '0 草稿，1 待审核，2 已拒绝，3 已经发布',
  PRIMARY KEY (`id`),
  KEY `created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

/*
* 标签表
*/
CREATE TABLE `lifesing_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '标签主键id',
  `name` varchar(50) DEFAULT NULL COMMENT '标签名称',
  `pathname` varchar(200) DEFAULT NULL COMMENT '访问路径',
  `description` longtext COMMENT '标签描述',
  `image` varchar(255) DEFAULT NULL COMMENT '标签配图',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `created_by` int(10) DEFAULT NULL COMMENT '创建人id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

/*
* 分类表
*/
CREATE TABLE `lifesing_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '分类唯一主键',
  `name` varchar(150) DEFAULT NULL COMMENT '分类名称',
  `pid` int(10) DEFAULT NULL COMMENT '父节点id',
  `pathname` varchar(200) DEFAULT NULL COMMENT '访问链接',
  `description` longtext COMMENT '分类描述',
  `image` varchar(255) DEFAULT NULL COMMENT '分类配图',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `created_by` int(11) DEFAULT NULL COMMENT '创建人id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

/*
* 标签文章关联表
*/
CREATE TABLE `lifesing_post_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文章和标签关联表主键',
  `post_id` int(10) DEFAULT NULL COMMENT '文章id',
  `tag_id` int(10) DEFAULT NULL COMMENT '标签id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_tag` (`post_id`,`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

/*
* 分类和文章关联表
*/
CREATE TABLE `lifesing_post_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '分类和文章关联表主键',
  `post_id` int(10) DEFAULT NULL COMMENT '文章id',
  `category_id` int(10) DEFAULT NULL COMMENT '分类id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_category` (`post_id`,`categoty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

/*
* 存储字典表
*/
CREATE TABLE `lifesing_options` (
  `key` varchar(200) NOT NULL COMMENT '存储选项key',
  `value` text COMMENT '存储选项保存值',
  `description` varchar(255) DEFAULT NULL COMMENT '存储项目说明',
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8







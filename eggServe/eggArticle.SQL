create database egg_article;

use egg_article;

drop table if exists article;
create table article (
                         id int(10) not null auto_increment,
                         img text default '' comment '缩略图',
                         title varchar(80) default '' comment '文章标题',
                         summary varchar(300) default '' comment '文章简介',
                         content text default '' comment '文章内容',
                         createTime timestamp default CURRENT_TIMESTAMP comment '发布时间',
                         primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(img,title,summary,content)
values ('图片','标题','简介','内容');

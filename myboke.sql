-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 08 月 28 日 11:59
-- 服务器版本: 5.5.47
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `myboke`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `birthday` datetime NOT NULL,
  `desc` char(255) DEFAULT NULL,
  `thumb` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` char(100) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` text NOT NULL,
  `look` int(20) NOT NULL DEFAULT '0',
  `thumb` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=gbk AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `time`, `content`, `look`, `thumb`) VALUES
(1, ' 我的第一篇文章！', '2018-08-27 02:47:48', '首先声明:月入8000以上请略过本文我知道看我博客的人中有蛮多对技术热爱的穷学生你们很多人也都有创业赚钱的想法我觉得吧，首先别想那么多，先把最基础的网上赚很多人...', 10, '图片'),
(2, '我的第二篇文章！', '2018-08-27 03:24:19', '关于你，2012年的九月，那是我们认识的季节，在四十多平米的教室里，我认识了你。我们是同学，彼此都还不熟悉的同学。那一句个子还高嘛，是我关注你的开始，有意无意的从四组向一组瞟你，小心翼翼的眼神怕你发现，却又怕你不明白，一点点的喜欢不敢声张。后来的打过来骂过去，后来聊天的默契，互道的晚安，才明白原来就是喜欢，没有其他。确定是喜欢，可是还是不敢声张。只因当初在人群中你说了一句，从此，你便住在了心里。不敢轻易靠近打扰，是怕自己扰了你的生活步调；不敢轻易对你开口言爱，是怕那样做是一种冒犯，是一种伤害我们关系的因素。\r\n\r\n　　 关于你。就是因为我的害怕，我亲眼看你走向她。我喜欢你是事实，你有女朋友也是事实。我以为我不说出口就会保持这样的朋友关系，却还是她赶了个巧，那应该是个寒假，你有女朋友了，我还是听说，我那么爱，却还是无果。于是我和她之间就莫名其妙的就多少有了敌人的感觉，或许就是别人口中的那样，世界上完全不相干的两个女人，会因为一个男人要么很友好，要么是仇恨。关于她我做不到友好，但也不是仇恨，只是你选择了她，我就希望她好好爱你，照顾你，连我的份也一起爱了。自爱上你的那天起，思念便成了戒不掉的瘾。你的一言一笑，一颦一蹙，无不牵动我的心，百千尘思，唯念一缕；万千红颜，唯恋一人。我愿意一生漂泊浪迹在你的故事里，甘愿为你鞍前马后，马首是瞻，即使你从未给我一句承诺，即使你从未给我半分爱情，依然无悔无怨。\r\n\r\n　　 关于你。一场高考，考散了我们，毕业了会不会就是终生最后一见，很高兴，我们不是。各奔东西了，你们继续上了大学，值得欣慰的是，你们也是异地，这样不能算是我心机，只能说是恰巧，你们的安排恰合我意。后来也有听说，她从她的城市去看你，而那时的我能说什么呢。她是真心爱你，这是事实。我也曾和闺蜜说过，一生至少该有一次，为了某个人而忘了自己，不求有结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇到你。今生遇见你，我觉得是幸福的，尽管这幸福交杂着万般痛苦。我也曾幻想着悄悄地去到你的学校，在某个阳光明媚的下午，在你去教室的路上和你来场偶遇，精心准备的偶遇，。可是我还来不及去和你偶遇，你们就毕了业。爱是种很玄的东西，说不清，道不明，剪不断，理还乱。世上，有种爱明知没有结果，却依然坚守原地，不舍离去，哪怕握不住你的一丝余温，依然选择默默为你守候。一路来去，心门只为你独开，山城只为你独驻，白天只为你旖旎，黑夜只为你流连。因为爱你，哪怕心入住荒岛，还是会以最深情的眼神，看着你幸福。\r\n\r\n　　 关于你。一次聊天，我说我要回家了，你说你也要回家了，我没有想过在这个季节，我们会同在我们的城市，可是即使我们在同一个城市又怎样，最远的距离就是，我们在同一个城市却感觉离得如此遥远。突然听说你们分手了，我心里的感觉就连我自己也说不出来，我本应该高兴，可我却高兴不起来，四年，你们一路走来有分有和，算是真爱，为什么我会高兴不起来，大概是已经习惯了默默地喜欢着你，不求结果。我们也有说过要约，那晚终于约了，见面第一眼，真的此时的心情，我是很激动的，有欢喜的成分，也有些担心，担心的是我怕我不能把我最好的状态展现给你，更多的还是感动，能和你并肩走着，是上学时我想都不敢想的事情。如果我是风中的叶子，便希望能以最美的姿态落下，因为不想让你看到我的忧伤，也许是这世上的美，都有些苍凉，缘是云水深处无言的守候，是一纸素笺的暖，是光阴写意最美的诗行。我们围着公园绕了一圈，原以为会尴尬，会词穷，可是你一句我一句，我们沐浴在晚风中，我是享受这样的感觉，直到你送我到楼下，你要离开，多想给你一个拥抱，把我有多爱你告诉你。可是我还是没有，只是默默看着你离开的背影，在黑夜慢慢远去直到消失在拐角处。我多么希望，你能懂我沉默，懂我无声，懂我的欲言又止。有时你看不见我，是因为我悄悄藏在了你身后；有时你听不见我，是因为我偷偷用静默伪装了自己。其实我害怕寂寞，但却因为你会让自己陷进很深的寂寞；其实也害怕孤独，但因为你山高水远，而我又无能为力。纵然你有万事牵绊，只要你需要，我一定会义无反顾。\r\n\r\n　　 关于你。你说你要去当兵了，其实心里是一些欢喜，因为在部队，你可能不会喜欢上别人，而我就想抱着这种侥幸的心理等你，脱开了别人的束缚，不知道这次我算不算迟到，告诉你，我喜欢你，告诉你，我会等你，等你回来。你走的时候我可能不会去送你，但是你要告诉我你在哪个城市，我会去看你。\r\n\r\n　　 人生，有多少别离，就会有多少相逢，喧嚣的尘世，总有一些孤独的灵魂，走在寂寞的路上，爱你，便是一缕暗香，穿过茫茫人海，幽幽而来，如花间清露，润人心田。它静静地流淌在光阴中，让相见或不见，天涯或咫尺，都变成一场欣喜和期待。因为爱你，岁月，将不再写意迷茫；因为爱你，人生将不再枯燥；因为爱你，所有的千回百转都是值得。', 0, '图片');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
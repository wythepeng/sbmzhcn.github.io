---
title: create-cron-job-on-centos
tags:
  - crontab
id: 313914
categories:
  - Linux
date: 2014-10-13 13:17:13
---

crontab命令常见于Unix和类Unix的操作系统之中，用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将其存放于“crontab”文件中，以供之后读取和执行。通常，crontab储存的指令被守护进程激活， crond常常在后台运行，每一分钟检查是否有预定的作业需要执行。这类作业一般称为cron jobs。crontab文件包含送交cron守护进程的一系列作业和指令。每个用户可以拥有自己的crontab文件；同时，操作系统保存一个针对整个系统的crontab文件，该文件通常存放于/etc或者/etc之下的子目录中，而这个文件只能由系统管理员来修改。crontab文件的每一行均遵守特定的格式，由空格或tab分隔为数个领域，每个领域可以放置单一或多个数值。

crontab的命令如下

-e 表示编辑当前的crontab
-l  表示列表显示当前的crontab任务
-r  表示删除当前用户的crontab
-i  表示删除crontab时给予提示信息

创建定时任务使用命令 crontab -e , 它有一定的规则：

 分钟 小时 日 月 星期 命令
<pre class="lang:default decode:true " >* * * * * command to be executed
- - - - -
| | | | |
| | | | ----- 星期（一周中的星期几） (0 - 7) (周日=0 or 7)
| | | ------- 月 (1 - 12)
| | --------- 日（每月中的第几天） (1 - 31)
| ----------- 小时 (0 - 23)
------------- 分钟 (0 - 59)</pre> 

*/1 * * * * root  /opt/bin/test-cron.sh //表示每隔一分钟执行一次脚本

修改crontab之后，记得执行/etc/init.d/cron restart重启cron服务。。。
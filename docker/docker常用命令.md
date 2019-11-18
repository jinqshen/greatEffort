### Docker常用命令

##### 生命周期

- `docker run <options> <image> <command> <args>`创建一个新的容器并运行一个命令

  `options`:

  - `-a stdin`:指定标准输入输出内容类型，可选STDIN/STDOUT/STDERR三项
  - `-d`:后台运行容器
  - `-i`:以交互模式运行容器，通常与`-t`同时使用
  - `-P`:随机端口映射，容器内部端口随机映射到主机的端口
  - `-p`:指定端口映射，格式为：`主机(宿主)端口:容器端口`
  - `-t`:为容器重新分配一个伪输入终端，通常与`-i`同时使用
  - `--name="xxxx"`:为容器指定一个名称
  - `--dns 8.8.8.8`:指定容器使用的DNS服务器，默认和宿主一致
  - `dns-search example.com`:指定容器DNS搜索域名，默认和宿主一致
  - `-h "mars"`:指定容器的hostname
  - `-e username="ritchie"`:设置环境变量
  - `--volume, -v`:绑定一个卷

  demo:

  - `docker run --name mynginx -d nginx:latest`

  使用nginx:latest镜像以后台模式启动容器，并命名为mynginx

  - `docker run -P -d nginx:latest`

  使用nginx:latest镜像以后台模式启动一个容器，并将容器的默认端口映射到主机随机端口

  - `docker run -p 80:80 -v /data:/data -d nginx:latest`

  使用nginx:latest镜像以后台模式启动一个容器，并将容器的80端口映射到主机的80端口，主机的目录/data映射到容器的/data

  - `docker run -it nginx:latest /bin/bash`

  使用nginx:latest以交互模式启动一个容器，在容器内执行/bin/bash命令

- `docker start <options> <containerName>`启动一个或多个已经被停止的容器

- `docker stop <options> <containerName>`停止一个或多个运行中的容器

- `docker restart <options> <containerName>`重启容器

- `docker kill <options> <containerName>` 杀掉一个运行中的容器

  `options`:

  - `-s`:向容器发送一个信号

  demo:

  - `docker kill -s KILL mynginx`

  杀死运行中的容器mynginx

- `docker rm <options> <containerName>`:删除一个或多个容器

  `options`:

  - `-f`:通过SIGKILL信号强制删除一个运行中的容器
  - `-l`:移除容器间的网络连接，而非容器本身
  - `-v`:删除与容器关联的卷

  demo:

  - `docker rm -f db01 db02`

  强制删除容器db01、db02

- `docker pause <options> <containerName>`暂停容器中的所有进程

- `docker unpause <options> <containName>`恢复容器中的所有进程

- `docker create <options> <image> <command> <args>`创建一个新的容器但不启动它

- `docker exec <options> <containerName> <command> <args>`在运行的容器中执行命令，进入容器

  `options`:

  - `-d`:分离模式，在后台运行
  - `-i`:及时没有附加也保持STDIN打开
  - `-t`:分配一个伪终端

##### 容器操作

- `docker ps <options>`列出容器

  `options`:

  - `-a`:显示所有的容器，包括未运行的
  - `-f`:根据条件过滤显示的内容
  - `--format`:指定返回值的模板文件
  - `-l`:显示最近创建的容器
  - `-n`:列出最近创建的容器
  - `--no-trunc`:不截断输出
  - `-q`:静默模式，只显示容器编号
  - `-s`:显示总的文件大小

- `docker inspect <options> <containerName|ID>`获取容器/镜像的元数据

  `options`:

  - `-f`:指定返回值的模板文件
  - `-s`:显示总的文件大小
  - `--type`:为指定类型返回JSON

- `docker top <options> <cotainerName> <ps options>`查看容器中运行的进程信息，支持ps命令参数

- `docker attach <optios> <containerName>`:连接到正在运行中的容器，退出的时候会停止容器，可以加上参数`--sig-proxy=false`来确保退出不会停止容器

- `docker events <options>`从服务器获取实时事件

  `options`:

  - `-f`:根据条件过滤事件
  - `--since`:从指定的时间戳后显示所有事件
  - `--until`:流水事件显示到指定的时间为止

- `docker logs <options> <containerName>`获取容器的日志

  `options`:

  - `-f`:跟踪日志输出
  - `--since`:显示某个开始时间的所有日志
  - `-t`:显示时间戳
  - `--tail`:仅列出最新N条容器日志

- `docker wait <options> <containerName>`阻塞运行直到容器停止，然后打印出他的退出代码

- `docker export <options> <containerName>`将文件系统作为一个tar归档文件导出到STDOUT

  `options`:

  - `-o`:将输入内容写到文件

- `docker port <options> <containerName>`列出指定的容器端口映射

##### 容器rootfs命令

- `docker commit <options> <containerName> <Repository:tag>`

  `options`:

  - `-a`:提交的镜像作者
  - `-c`:使用Dockerfile指令来创建镜像
  - `-m`:提交时的说明文字
  - `-p`:在`commit`时，将容器暂停

- `docker cp <options> <containerName>`

# 初始化仓库

1. git init
2. git add .
3. git commit -m "some illustration"

# 远程操作

1. 在github上创建一个远程仓库，比如 https://github.com/wingedSF/NM.git

2. git remote add origin https://github.com/wingedSF/NM.git ，可将本地仓库关联到github的远程仓库
   
3. git push -u origin master   把本地仓库内容推送到远程仓库  ，第一次推送，需要带着 -u  这个参数，去关联主机
   
4. 如果以后commit后，再次推送，只需git push

5.git clone https://github.com/wingedSF/NM.git ， 拉取远程仓库上的代码


# commit时的问题 ， Please enter a commit message to explain why this merge is necessary.

## git 在pull或者合并分支的时候有时会遇到这个界面。可以不管(直接下面3,4步)，如果要输入解释的话就需要:

1.按键盘字母 i 进入insert模式

2.修改最上面那行黄色合并信息,可以不修改

3.按键盘左上角"Esc"

4.输入":wq",注意是冒号+wq,按回车键即可

## $ git push

### fatal: unable to access 'https://github.com/wingedSF/NM.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connectn to github.com:443
只需要 在git Bash 输入 git config --global --unset https.proxy    或者  git config --global --unset http.proxy，根据仓库是http 还是https而定

# 使用 git 分支开发

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>  （在此之前，git切换到master，git merge dev）

删除分支：git branch -d <name>


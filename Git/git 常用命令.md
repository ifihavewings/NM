# 初始化仓库

1. git init
2. git add .
3. git commit -m "some illustration"

# 远程操作

1. 在github上创建一个远程仓库，比如 https://github.com/wingedSF/NM.git

2. git remote add origin https://github.com/wingedSF/NM.git ，可将本地仓库关联到github的远程仓库
   
3. git push -u origin master   把本地仓库内容推送到远程仓库  ，第一次推送，需要带着 -u  这个参数，
   
4. 如果以后commit后，再次推送，只需git push

5.git clone https://github.com/wingedSF/NM.git ， 拉取远程仓库上的代码

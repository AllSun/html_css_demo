# 常用git命令

`git init`

`git add -A/filename`

`git commit -m "show message"`

`git status`

`git diff filename`

`git log`

`git reflog`

`git log --pretty=oneline`

`git log --pretty=oneline --abbrev`

`git log --pretty=oneline -commit`

`git reset --hard HEAD^`

`git reset --hard [Version`]

`git reset HEAD`    文件名  暂存区

`git checkout filename`  文件名 工作区 


`git rm filename`

`git commit -m "show message" `

`git merge --no-ff -m "message" [branch name]`

* fast forward 模式会丢失分支信息，用此语句可保留分支情况

`git remote add origin [branch]`

`git push -u origin master`

`git push origin master`

`-u` 参数说明：

这样git才能知道当前test下的remote和merge的信息，如果你在git push的时候没有带入-u参数，那么config中就不会有branch "test"这一项。

`git remote -v`

`git remote rm origin`

`git remote`

`git clone [origin respo name]`

`git checkout -b`

`git switch -c`

`git checkout [branch name]`

`git switch [branch name]`

`git merge [branch name]`

`git branch -d [branch name]`

`git branch`

`git branch [branch name]`

# bug分支

`git stash`

* 隐藏目前冲突的修改信息，恢复到最原始版本

`git stash list`

`git stash apply [version]`

`git stash drop [version]`

`git stash pop`

`git cherry-pick [commit version]`

`git branch -D [branch name]`

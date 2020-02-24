@cd D:\yuandaima\GitHub
@echo Creating project folder........
@mkdir %1%
@cd %1%
@git init
@echo ## This project needs a proper Readme file, right?>README.md
@git add README.md
@git commit -m 'project_init'
@echo Creating project on github........
@python D:\yuandaima\Python\newResportory\create.py %1%
@echo Connecting.......
@git remote add origin git@github.com:Tokunaga-X/%1%.git
@git push -u origin master
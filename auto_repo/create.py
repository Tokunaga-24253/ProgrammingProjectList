import requests
import sys
data = {
    "name": sys.argv[1]
}
r = requests.post('https://api.github.com/user/repos',
                  auth=('Tokunaga-X', '951753qweasd2846'),
                  json=data)
if r.status_code == 200 | r.status_code == 201:
    print('Successfuly creating new repository on github!')
else:
    print('Failed  to create new repository on github, maybe your have the same name.')
    print(r.text)

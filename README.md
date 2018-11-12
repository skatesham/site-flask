# site-flask
O site desenvolvido é disponibilizado com um servidor Flask

Esse possui uma estrutura de diretórios de um servidor web
e reutilização de templates HTML

## Estrutura dos diretórios
![alt text](https://raw.githubusercontent.com/skatesham/site-flask/master/app/static/img/readme/estrutura.png)

## Criando e executando um ambiente virtual Python 3 em Unix Dist
Na raiz do repositório execute os comandos
```
$ python3 -m venv env
$ source env/bin/activate
```

## Configurando e executando o Flask
Com o ambiente virtual executado, na raiz do repositório execute os comandos
```
$ pip3 install -r requirements.txt
$ export FLASK_APP=run.py
$ export FLASK_ENV=development
$ flask run
```

## Screenshots do site desenvolvido

Página Inicial

![alt text](https://raw.githubusercontent.com/skatesham/site-flask/master/app/static/img/readme/home.png)

Página Sobre

![alt text](https://raw.githubusercontent.com/skatesham/site-flask/master/app/static/img/readme/sobre.png)

## Frameworks de execução no cliente
- Bootstrap 4.1.3
- Fontawesome 5.4.1
- Jquery 3.3.1
- Popper 1.14.3

[Fonte base de desenvolvimento](https://scotch.io/tutorials/getting-started-with-flask-a-python-microframework)

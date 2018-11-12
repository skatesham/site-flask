from flask import Flask
app = Flask(__name__)

@app.route('/hello')
def hello_world():
    return 'Server Flask is running fine!'

@app.route('/')
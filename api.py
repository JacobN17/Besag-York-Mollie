from flask import Flask, render_template
from bym2 import generate_model

app = Flask(__name__)

path = './datasets/mod-starbucks.csv'
html = './model/example2.html'


@app.route('/', methods=['POST', 'GET'])
def hello_world():
    # code lol
    return render_template(html)


app.run()

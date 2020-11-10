from flask import Flask

# Init app
app = Flask(__name__)


@app.route('/', methods=['GET'])
def get():
    return 'Hello from Flask!!!'


# Run Server
if __name__ == '__main__':
    app.run(debug=True)

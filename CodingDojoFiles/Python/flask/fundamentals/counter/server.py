# pipenv install flask

from flask import Flask, render_template, session, redirect
app = Flask(__name__)
app.secret_key="qwertyuiop"

# counter
@app.route('/')
def index():
    if "count" not in session:
        session["count"] = 0
    else:
        session['count'] += 1
    return render_template("index.html")

# sets the counter to 0 // clears counter 
@app.route('/destroy')
def destroy():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)
from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/home/<name>')
def home_page(name):
    return render_template("index.html")#, content=name, user_names = ["tim,jim,bob"])

@app.route("/user_profile")
def user(name):
    return f"Hello! {name}"

@app.route("/admin")
def admin_user():
    return redirect(url_for("user", name="admin_name"))

if __name__ == "__main__":
    app.run(debug=True)


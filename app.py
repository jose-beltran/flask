from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    data={
        'titulo':'Unisys'
    }
    return render_template('index.html', data=data)

@app.route('/documentar')
def documentar():
    data={
        'titulo':'Documentar caso'
    }
    return render_template('documentar.html', data=data)

@app.route('/historial')
def historial():
    data={
        'titulo':'Documentar caso'
    }
    return render_template('historial.html', data=data)

@app.route('/plantillas')
def plantillas():
    data={
        'titulo':'Documentar caso'
    }
    return render_template('plantillas.html', data=data)

"""@app.route('/plantillas-usd/guardar', methods=['POST'])
def plantillas_guardar():
    print(request.form['name'])
    print(request.form['case'])
    print(request.form['hour'])
    print(request.form['date'])
    return redirect('/plantillas-usd')
"""
if __name__ == '__main__':
    app.run(debug=True)
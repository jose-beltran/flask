from flask import Flask, render_template, request, request, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    # return "Hola Mundo"
    cursos = ['PHP', 'Python', 'Java', 'Kotlin', 'Dart', 'JavaScript']
    data={
        'titulo':'Index',
        'bienvenido':'Saludos',
        'cursos':cursos,
        'numero_cursos':len(cursos)
    }
    return render_template('index.html', data=data)


@app.route('/contacto/<nombre>')
def contacto(nombre):
    data = {
        'titulo':'Contacto',
        'nombre': nombre
    }
    return render_template('contacto.html', data=data)

def query_string():
    print(request)
    print(request.args)
    print(request.args.get('param1'))
    return "Ok"

def page_not_found(error):
    # return render_template('404.html'), 404
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.add_url_rule('/query_string',view_func=query_string)
    app.register_error_handler(404, page_not_found)
    app.run(debug=True)
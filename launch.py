from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='html', template_folder='.')

@app.route('/')
def main():
    html_files = [f for f in os.listdir('html') if f.endswith('.html')]
    return render_template('main.html', html_files=html_files)

@app.route('/html/<path:path>')
def serve_html(path):
    return send_from_directory('html', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8120)

from flask import Flask, render_template, send_from_directory
import os
from pathlib import Path

app = Flask(__name__, static_folder='html', template_folder='.')

@app.route('/')
def main():
    html_dir = 'html'
    html_files = [Path(f) for f in os.listdir(html_dir) if f.endswith('.html')]
    print(html_files)
    sorted_html_files = sorted(html_files, key=lambda x: (html_dir / x).stat().st_mtime, reverse=True)
    return render_template('main.html', sorted_html_files=sorted_html_files)

@app.route('/html/<path:path>')
def serve_html(path):
    return send_from_directory('html', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8120)

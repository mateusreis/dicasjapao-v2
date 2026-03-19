#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8181
DIRECTORY = "/var/www/html/dicasjapao"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

os.chdir(DIRECTORY)

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"Servidor rodando em http://localhost:{PORT}")
    print(f"Servindo arquivos de: {DIRECTORY}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor parado.")

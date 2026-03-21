#!/usr/bin/env python3
import http.server
import ssl
import socketserver
import os
import subprocess

PORT = 8443
DIRECTORY = "/var/www/html/dicasjapao-v2"
CERT_FILE = "/tmp/cert.pem"
KEY_FILE = "/tmp/key.pem"

# Gera cert self-signed se não existir
if not os.path.exists(CERT_FILE):
    subprocess.run([
        "openssl", "req", "-x509", "-newkey", "rsa:2048",
        "-keyout", KEY_FILE, "-out", CERT_FILE,
        "-days", "365", "-nodes",
        "-subj", "/CN=localhost"
    ], check=True)

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

os.chdir(DIRECTORY)

import signal, sys

def kill_existing():
    import subprocess
    result = subprocess.run(['lsof', '-ti', f':{PORT}'], capture_output=True, text=True)
    for pid in result.stdout.split():
        if pid != str(os.getpid()):
            os.kill(int(pid), signal.SIGTERM)

kill_existing()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ctx.load_cert_chain(CERT_FILE, KEY_FILE)
    httpd.socket = ctx.wrap_socket(httpd.socket, server_side=True)
    print(f"Servidor HTTPS rodando em https://0.0.0.0:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor parado.")

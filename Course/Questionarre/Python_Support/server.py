import http.server
import json
import os
import sys
import threading
import urllib.parse
from http import HTTPStatus

# Učitaj glavnu skriptu (koju ćemo kasnije modificirati da ima main funkciju)
# Ovo će raditi samo ako je generate_anki_from_wrong.py u istom folderu i ima funkciju main()
try:
    from generate_anki_from_wrong import main as generate_main
except ImportError:
    # Ako nije dostupna, definiraj dummy
    def generate_main():
        print("generate_anki_from_wrong not available, cannot auto-run")
        return {"status": "error", "message": "Generator not available"}

# Konfiguracija
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WRONG_JSON = os.path.join(BASE_DIR, "wrong_terms.json")

class ExportHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        if parsed_path.path != '/export':
            self.send_error(HTTPStatus.NOT_FOUND, "Endpoint not found")
            return

        content_length = int(self.headers.get('Content-Length', 0))
        if content_length == 0:
            self.send_error(HTTPStatus.BAD_REQUEST, "Empty body")
            return

        post_data = self.rfile.read(content_length)
        try:
            payload = json.loads(post_data)
        except json.JSONDecodeError:
            self.send_error(HTTPStatus.BAD_REQUEST, "Invalid JSON")
            return

        # Spremi u wrong_terms.json
        try:
            with open(WRONG_JSON, 'w', encoding='utf-8') as f:
                json.dump(payload, f, indent=2, ensure_ascii=False)
        except Exception as e:
            self.send_error(HTTPStatus.INTERNAL_SERVER_ERROR, f"Failed to write file: {e}")
            return

        # Pokreni generiranje kartica (u pozadinskoj niti da ne blokiramo odgovor)
        def run_generator():
            try:
                result = generate_main()  # očekujemo da main vraća nešto (dict)
                print("Generator finished:", result)
            except Exception as e:
                print("Generator error:", e)

        thread = threading.Thread(target=run_generator)
        thread.daemon = True
        thread.start()

        # Vrati odmah odgovor
        self.send_response(HTTPStatus.OK)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        response = {"status": "ok", "message": "File saved, generator started"}
        self.wfile.write(json.dumps(response).encode())

    def log_message(self, format, *args):
        # tiši rad
        pass

def run_server(port=8000):
    server_address = ('', port)
    httpd = http.server.HTTPServer(server_address, ExportHandler)
    print(f"Local server listening on http://localhost:{port}")
    print("Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == '__main__':
    run_server()

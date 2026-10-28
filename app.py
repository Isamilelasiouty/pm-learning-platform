#!/usr/bin/env python3
"""
منصة التعلم والتحول المهني إلى إدارة المنتجات - Backend Server
المستفيد: إسماعيل العسيوطي
Server: Python 3 Standard Library HTTP Server with REST API
"""

import json
import os
import sys
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
PROGRESS_FILE = BASE_DIR / "progress.json"

DEFAULT_PROGRESS = {
    "completed_weeks": [],
    "completed_projects": [],
    "notes": {},
    "rice_items": [
        {
            "id": 1,
            "name": "محرك التنبيهات الفورية عبر البريد (SEO GPS)",
            "reach": 1200,
            "impact": 3.0,
            "confidence": 1.0,
            "effort": 1.0,
            "score": 3600
        },
        {
            "id": 2,
            "name": "تصدير التقارير بضغطة زر واحدة (CSV/PDF)",
            "reach": 800,
            "impact": 2.0,
            "confidence": 0.8,
            "effort": 0.5,
            "score": 2560
        },
        {
            "id": 3,
            "name": "توليد توصيات الإصلاح بالذكاء الاصطناعي",
            "reach": 900,
            "impact": 2.0,
            "confidence": 0.5,
            "effort": 1.0,
            "score": 900
        },
        {
            "id": 4,
            "name": "تكامل التذاكر المباشر مع Jira",
            "reach": 400,
            "impact": 2.0,
            "confidence": 0.8,
            "effort": 1.5,
            "score": 426
        }
    ],
    "skills_assessment": {}
}


def load_progress():
    if not PROGRESS_FILE.exists():
        save_progress(DEFAULT_PROGRESS)
        return DEFAULT_PROGRESS
    try:
        with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"[ERROR] Failed to read progress.json: {e}")
        return DEFAULT_PROGRESS


def save_progress(data):
    try:
        with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"[ERROR] Failed to save progress.json: {e}")
        return False


class PMLearningHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        # Root goes to index.html
        if path in ["/", "/index.html"]:
            self.send_file(BASE_DIR / "index.html", "text/html; charset=utf-8")
            return

        # API Endpoints
        if path == "/api/status":
            self.send_json({
                "status": "online",
                "app": "PM Learning Hub",
                "user": "Ismail El-Asyouty",
                "target": "Product Manager (SaaS & AI)",
                "total_weeks": 24
            })
            return

        if path == "/api/progress":
            self.send_json(load_progress())
            return

        if path.startswith("/api/module/"):
            filename = path.replace("/api/module/", "")
            file_path = BASE_DIR / filename
            if file_path.exists() and file_path.suffix == ".md":
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                self.send_json({"name": filename, "content": content})
                return
            else:
                self.send_error(404, "Module not found")
                return

        if path == "/api/modules":
            modules = []
            for p in sorted(BASE_DIR.glob("*.md")):
                modules.append({
                    "filename": p.name,
                    "title": p.stem,
                    "size_bytes": p.stat().st_size
                })
            templates = []
            t_dir = BASE_DIR / "templates"
            if t_dir.exists():
                for p in sorted(t_dir.glob("*.md")):
                    templates.append({
                        "filename": f"templates/{p.name}",
                        "title": p.stem,
                        "size_bytes": p.stat().st_size
                    })
            self.send_json({"modules": modules, "templates": templates})
            return

        # Default static file handling
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/progress":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode("utf-8"))
                current = load_progress()
                current.update(data)
                save_progress(current)
                self.send_json({"success": True, "saved_at": "updated"})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, status=400)
            return

        self.send_error(404, "Endpoint not found")

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def send_file(self, file_path, content_type):
        if not file_path.exists():
            self.send_error(404, "File not found")
            return
        with open(file_path, "rb") as f:
            content = f.read()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)


def run_server(port=8080):
    server_address = ("127.0.0.1", port)
    httpd = HTTPServer(server_address, PMLearningHandler)
    print(f"[INFO] PM Learning Platform Server running at http://127.0.0.1:{port}/")
    print(f"[INFO] Press Ctrl+C to stop the server.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[INFO] Server stopped gracefully.")
        httpd.server_close()


if __name__ == "__main__":
    port = 8080
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        port = int(sys.argv[1])
    run_server(port)

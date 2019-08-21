mkdir -p .\lib
xcopy src lib /s /e /Y
babel .\src --out-dir .\lib
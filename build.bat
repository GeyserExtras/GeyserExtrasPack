@echo off
color 2
del GeyserExtrasPack.mcpack > nul

echo Compiling UI...

START /w cmd /c npx tsc > nul
node .\build\UI.js > nul
RMDIR /S /Q "build" > nul

echo Copying resources...
ROBOCOPY "src/pack" ".build/" /e > nul 
DEL uuid > nul

echo Building mcpack...

"C:\Program Files\7-Zip\7z.exe" a GeyserExtrasPack.mcpack ./.build/* -tzip > nul

RMDIR /S /Q ".build" > nul
echo ============================================================
echo GeyserExtrasPack successfully built! Closing in 5 seconds...
echo ============================================================
ping 127.0.0.1 -n 5 > nul
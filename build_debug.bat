@echo off
color 2
del GeyserExtrasPack.mcpack > nul

echo Compiling UI...

START /w cmd /c npx tsc > nul
node .\build\UI.js > nul
RMDIR /S /Q "build" > nul

echo Copying resources to .build/....
ROBOCOPY "src/pack" ".build/" /e > nul 
DEL uuid > nul
echo ============================================================
echo GeyserExtrasPack successfully built! Closing in 5 seconds...
echo ============================================================
ping 127.0.0.1 -n 5 > nul
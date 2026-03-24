# 🚀 Quick Deploy Script (run this in your project root)

@echo off
echo 🚀 Starting PixelChat Deployment...

REM Check if git is clean
git status --porcelain >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git status check failed
    exit /b 1
)

REM Push to GitHub
echo 📤 Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Git push failed
    exit /b 1
)

echo ✅ Code pushed to GitHub!
echo.
echo 🌐 Next steps:
echo 1. Go to https://railway.app and connect your GitHub repo
echo 2. Go to https://vercel.com and import your GitHub repo
echo 3. Set environment variables in both dashboards
echo 4. Your app will auto-deploy on every push!
echo.
echo 🎉 Deployment setup complete!
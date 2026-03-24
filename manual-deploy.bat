@echo off
echo 🚀 PixelChat Manual Deployment Script
echo.

REM Install CLIs if not present
where railway >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 Installing Railway CLI...
    npm install -g @railway/cli
)

where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 Installing Vercel CLI...
    npm install -g vercel
)

echo.
echo 🔧 Deploying Backend...
cd backend
railway login
railway deploy

echo.
echo 🎨 Deploying Frontend...
cd ../frontend
vercel login
vercel --prod

echo.
echo ✅ Deployment complete!
echo Check your Railway and Vercel dashboards for the URLs.
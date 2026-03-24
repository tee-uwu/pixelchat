# 🚀 PixelChat Deployment Guide

## Overview
PixelChat is a fullstack real-time chat application with pixel art theming. This guide will help you deploy both the frontend and backend to production.

## Architecture
- **Frontend**: React + Vite (deployed to Vercel)
- **Backend**: Node.js + Express + Socket.io (deployed to Railway)
- **Database**: MongoDB Atlas
- **File Storage**: Cloudinary

## Prerequisites
- Railway account (for backend)
- Vercel account (for frontend)
- MongoDB Atlas account
- Cloudinary account

## Step 1: Environment Setup

### Backend Environment Variables
1. Copy `backend/.env.example` to `backend/.env`
2. Fill in your production values:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   NODE_ENV=production
   CLIENT_URL=https://your-vercel-frontend-url.vercel.app
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

### Frontend Environment Variables
1. Copy `frontend/.env.example` to `frontend/.env`
2. Fill in your production values:
   ```env
   VITE_API_BASE_URL=https://your-railway-backend-url.up.railway.app/api
   VITE_SOCKET_BASE_URL=https://your-railway-backend-url.up.railway.app
   ```

## Step 2: Deploy Backend (Railway)

### Option A: Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Navigate to backend directory
cd backend

# Deploy
railway deploy
```

### Option B: Railway Dashboard
1. Go to [Railway.app](https://railway.app)
2. Create new project
3. Connect your GitHub repository
4. Set environment variables in Railway dashboard
5. Deploy

### Option C: Using the deploy script
```bash
npm run deploy:backend
```

## Step 3: Deploy Frontend (Vercel)

### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel --prod
```

### Option B: Vercel Dashboard
1. Go to [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Set environment variables in Vercel dashboard
5. Deploy

### Option C: Using the deploy script
```bash
npm run deploy:frontend
```

## Step 4: Update URLs

After deployment, update the following:

1. **Backend CLIENT_URL**: Update with your Vercel frontend URL
2. **Frontend API URLs**: Update with your Railway backend URL
3. **Vercel rewrites**: Update the Railway URL in `frontend/vercel.json`

## Step 5: Database Setup

1. Create MongoDB Atlas cluster
2. Whitelist Railway IP addresses (0.0.0.0/0 for development)
3. Create database user with read/write permissions
4. Update MONGO_URI in Railway environment variables

## Step 6: Cloudinary Setup

1. Create Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update environment variables in Railway
4. Configure upload presets if needed

## Step 7: Testing

1. Test authentication (signup/login)
2. Test real-time messaging
3. Test file uploads
4. Test on mobile devices
5. Test theme switching

## Troubleshooting

### CORS Issues
- Ensure CLIENT_URL matches your frontend URL exactly
- Check Railway environment variables are set correctly

### Socket Connection Issues
- Verify VITE_SOCKET_BASE_URL points to Railway backend
- Check Railway logs for socket errors

### Authentication Issues
- Ensure JWT_SECRET is set in Railway
- Check cookie settings in production

### Build Failures
- Check that all dependencies are installed
- Verify environment variables are set
- Check build logs for specific errors

## Environment Variables Reference

### Backend (Railway)
- `PORT`: 5000
- `MONGO_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: Random secret key
- `NODE_ENV`: production
- `CLIENT_URL`: Your Vercel frontend URL
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Cloudinary API key
- `CLOUDINARY_API_SECRET`: Cloudinary API secret

### Frontend (Vercel)
- `VITE_API_BASE_URL`: Railway backend URL + /api
- `VITE_SOCKET_BASE_URL`: Railway backend URL

## Security Notes

- Never commit `.env` files to Git
- Use strong JWT secrets
- Keep API keys secure
- Regularly update dependencies
- Monitor Railway/Vercel logs for security issues

## Performance Optimization

- Enable Railway's health checks
- Set up proper caching headers
- Optimize images with Cloudinary
- Monitor database performance
- Use Railway's scaling features if needed

---

🎮 **PixelChat is now ready for production!** 🚀
# 🚀 Render Deployment Guide (Full-Stack Multivendor Marketplace)

This guide walks you through deploying the **Multivendor Marketplace** (React Frontend + Fastify Backend + PostgreSQL Database) to [Render](https://render.com).

---

## ⚡ Method 1: 1-Click Automated Deployment (Render Blueprint) **(RECOMMENDED)**

We have included a `render.yaml` Blueprint configuration file in the project repository.

### Step 1: Push Code to GitHub / GitLab
Make sure your complete project code is committed and pushed to a GitHub or GitLab repository.
```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

### Step 2: Create Blueprint on Render
1. Log in to [Render Dashboard](https://dashboard.render.com).
2. Click **New +** in the top header and select **Blueprint**.
3. Connect your GitHub/GitLab account and select your repository (`Multivendor Marketplace`).
4. Render will automatically detect `render.yaml` and parse 3 resources:
   - 🗄️ **PostgreSQL Database** (`multivendor-db`)
   - 🌐 **Backend API Service** (`multivendor-api`)
   - 🎨 **Frontend Static Site** (`multivendor-frontend`)
5. Click **Apply**. Render will automatically provision the database, generate Prisma schemas, compile the backend, build the frontend, and deploy everything live!

---

## 🛠️ Method 2: Manual Setup on Render Dashboard

If you prefer to configure services manually:

### 1. Create PostgreSQL Database
1. Go to **New +** ➔ **PostgreSQL**.
2. **Name**: `multivendor-db`
3. **Database**: `multivendor`
4. Select **Free Plan**.
5. Copy the **Internal Database URL** (e.g. `postgres://multivendor_user:pass@dgp-xxx/multivendor`).

### 2. Create Backend Web Service
1. Go to **New +** ➔ **Web Service**.
2. Connect your GitHub Repository.
3. Config:
   - **Name**: `multivendor-api`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npx prisma generate && npm run build`
   - **Start Command**: `npx prisma db push && npm run start`
4. **Environment Variables**:
   - `NODE_ENV` = `production`
   - `HOST` = `0.0.0.0`
   - `DATABASE_URL` = *(Paste Internal Database URL from Step 1)*
   - `JWT_SECRET` = *(Any random secret string)*
   - `CORS_ORIGIN` = `*` (or your frontend Render URL)

### 3. Create Frontend Static Site
1. Go to **New +** ➔ **Static Site**.
2. Connect your GitHub Repository.
3. Config:
   - **Name**: `multivendor-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Under **Redirects/Rewrites**:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`

---

## 🔍 Verification & Health Check

- Backend Health API: `https://multivendor-api.onrender.com/health`
- Storefront URL: `https://multivendor-frontend.onrender.com`
- Admin Portal: Access via Header **⚡ Admin Panel** button or directly at `https://multivendor-frontend.onrender.com/#admin`

# 📐 Vercel Deployment Guide

This guide explains how to deploy the **Multivendor Marketplace** to [Vercel](https://vercel.com).

---

## ⚡ Method 1: Deploy via Vercel Dashboard (RECOMMENDED)

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** ➔ **Project**.
3. Import your GitHub repository (`ss360marketing-creator/Multivendor-Marketplace`).
4. Framework Preset: Vercel will automatically detect **Vite**.
5. Click **Deploy**.
   - Vercel will automatically build the React app and deploy it with SPA routing enabled via `vercel.json`.

---

## 🛠️ Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run deployment command in project root:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 🔌 API & Backend Configuration

- **Mock & Demo Admin Fallback**: The app includes built-in offline mock fallbacks for catalog, shopping cart, orders, inventory, and admin authentication.
- **Connecting Remote Backend API**: Set `VITE_API_URL` in Vercel Environment Variables pointing to your hosted Fastify API server.

# 🎬 FlickBox

FlickBox is a modern **video sharing and storage web application** built with **Next.js** and **TypeScript**, designed for seamless video management. It enables users to upload, share, search, and filter videos with ease. With **NextAuth authentication**, **MongoDB database**, and **ImageKit integration** for storage, optimization, and thumbnail generation, FlickBox delivers both performance and scalability.

---

## 🚀 Features

- 📂 **Video Upload & Storage** – Store videos securely with ImageKit.
- ⚡ **Video Optimization & Compression** – Ensures faster playback and efficient storage.
- 🖼️ **Automatic Thumbnail Generation** – Thumbnails are created for better previews.
- 🔒 **Authentication** – Secure login and signup powered by **NextAuth**.
- 🎛️ **Dashboard** – Manage all uploaded videos in one place.
- 🔍 **Search & Filter** – Search videos by title/description and filter by visibility (public/private).
- 🌐 **Responsive UI** – Optimized for both desktop and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Video Storage & Optimization**: [ImageKit](https://imagekit.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📸 Screenshots
#### Landing page
![alt text](flickbox-landing-page.png)

#### Feed page
![alt text](flickbox-feed.png)

#### Dashboard page
![alt text](flickbox-dashboard.png)

#### Upload page
![alt text](flickbox-upload.png)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sushilkrg/flickbox.git
cd flickbox
```
### 2. Install all packages and dependencies
```bash
pnpm install
```
### 3. Setup Envirnment Variables
```bash
MONGODB_URI="mongodb://localhost:27017/flickbox"
NEXTAUTH_SECRET=""

# imagekit configs
NEXT_IMAGEKIT_PUBLIC_KEY=""
NEXT_PUBLIC_URL_ENDPOINT=""
IMAGEKIT_PRIVATE_KEY=""
```
### 4. Run the app
```bash
pnpm dev
```

---
## ✍️ Author

**Sushil Kumar**  
[Portfolio Website](https://sushilkumar-rho.vercel.app) · 
[GitHub](https://github.com/sushilkrg)

---

## ⭐️ Star the Repo

If you find this project helpful or inspiring, please consider giving it a ⭐️ on GitHub — it helps others discover the project and shows your support!
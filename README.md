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
<img width="1900" height="4725" alt="flickbox-landing-page" src="https://github.com/user-attachments/assets/3758b4df-998f-416d-bb54-6b25e839df5b" />

#### Feed page
<img width="1900" height="983" alt="flickbox-feed" src="https://github.com/user-attachments/assets/c463de2b-0ddd-48a0-a3bc-8aba6083811e" />

#### Dashboard page
<img width="1900" height="1178" alt="flickbox-dashboard" src="https://github.com/user-attachments/assets/539b6d52-06de-458e-83b2-6c73ab3b683d" />

#### Upload page
<img width="1900" height="841" alt="flickbox-upload" src="https://github.com/user-attachments/assets/3c083735-ad4b-4348-8170-e0adad212059" />

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

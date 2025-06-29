# 🗄️ Google Drive Clone

<p align="center">
  <img src="/screenshots/banner.png" alt="Zentry Drive" width="100%" />
</p>

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?logo=appwrite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-black?logo=radixui&logoColor=white)

## 📚 Table of Contents
- [👋 Introduction](#-introduction)
- [⚙️ Technologies Used](#️-technologies-used)
- [✨ Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📦 Deployment](#-deployment)
- [📖 Screenshots](#-screenshots)
- [📄 License](#-license)
- [🔮 Future Improvements](#-future-improvements)

## 👋 Introduction
This project is a modern Google Drive clone built with Next.js and Appwrite. It provides a secure and intuitive platform for file storage, sharing, and management. The application offers a responsive user interface that works seamlessly across devices, allowing users to upload, organize, and access their files from anywhere.

## ⚙️ Technologies Used
- **Frontend**:
    - [Next.js 15](https://nextjs.org/) - React framework with App Router
    - [React 19](https://react.dev/) - UI library
    - [TypeScript](https://www.typescriptlang.org/) - Type safety
    - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
    - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
    - [Recharts](https://recharts.org/) - Charting library for data visualization

- **Backend**:
    - [Appwrite](https://appwrite.io/) - Backend as a Service (BaaS)
    - [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) - Server-side data mutations

- **Form Handling**:
    - [React Hook Form](https://react-hook-form.com/) - Form state management
    - [Zod](https://zod.dev/) - Schema validation

- **Other Tools**:
    - [React Dropzone](https://react-dropzone.js.org/) - File upload functionality
    - [Lucide React](https://lucide.dev/) - Icon library

## ✨ Features
- **User Authentication**:
    - Email/password registration and login
    - OTP (One-Time Password) verification
    - Secure session management

- **File Management**:
    - Upload files with drag-and-drop functionality
    - Organize files by type (documents, images, videos, etc.)
    - Search and sort files by name, date, and size
    - Preview file thumbnails
    - Download, rename, and delete files

- **User Interface**:
    - Responsive design for mobile and desktop
    - Dark/light mode support
    - Interactive charts for storage usage visualization
    - Intuitive navigation with sidebar and mobile menu

- **Security**:
    - Secure file storage with Appwrite
    - Protected routes for authenticated users
    - Data validation for all inputs

## 📁 Project Structure
```
google_drive_clone/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Authentication routes (sign-in, sign-up)
│   └── (root)/             # Main application routes
│       └── [type]/         # Dynamic routes for file types
├── components/             # React components
│   ├── ui/                 # UI components (buttons, inputs, etc.)
│   ├── AuthForm.tsx        # Authentication form
│   ├── FileUploader.tsx    # File upload component
│   └── ...                 # Other components
├── lib/                    # Utility functions and services
│   ├── actions/            # Server actions
│   │   ├── file.action.ts  # File-related actions
│   │   └── user.actions.ts # User-related actions
│   ├── appwrite/           # Appwrite client configuration
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── ...                     # Configuration files
```

## 🚀 Getting Started
### Prerequisites
- Node.js 18.0 or later
- npm or yarn
- Appwrite account and project

### Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/google_drive_clone.git
   cd google_drive_clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
   NEXT_PUBLIC_APPWRITE_STORAGE_ID=your_appwrite_storage_id
   NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID=your_appwrite_user_collection_id
   NEXT_PUBLIC_APPWRITE_FILE_COLLECTION_ID=your_appwrite_file_collection_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📦 Deployment
### Deploying on Vercel
The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your environment variables in the Vercel dashboard.
4. Deploy!

### Alternative Deployment Options
- **Docker**: A Dockerfile can be created to containerize the application.
- **Self-hosted**: Build the application with `npm run build` and start it with `npm start`.

## 📖 Screenshots

<div align="center">
  <img src="/screenshots/zentry (11).png" alt="Banner" width="100%" />
</div>

<div align="center">
  <table>
    <tr>
      <td><img src="/screenshots/zentry (1).png" alt="Screenshot 1" width="200"/></td>
      <td><img src="/screenshots/zentry (2).png" alt="Screenshot 2" width="200"/></td>
      <td><img src="/screenshots/zentry (3).png" alt="Screenshot 3" width="200"/></td>
      <td><img src="/screenshots/zentry (4).png" alt="Screenshot 4" width="200"/></td>
      <td><img src="/screenshots/zentry (5).png" alt="Screenshot 5" width="200"/></td>
    </tr>
    <tr>
      <td><img src="/screenshots/zentry (6).png" alt="Screenshot 6" width="200"/></td>
      <td><img src="/screenshots/zentry (7).png" alt="Screenshot 7" width="200"/></td>
      <td><img src="/screenshot
# Sagarmatha Technical Institute - Landing Page

A modern, responsive landing page for Sagarmatha Technical Institute built with the MERN stack, featuring glassmorphism design and bright blue theme.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation & Running

1. **Clone and Install Dependencies**
```bash
cd /Users/anandkumar/Desktop/SIT
npm install
```

2. **Configure Environment Variables**
Create a `.env` file in the `server` directory:
```env
MONGODB_URI=mongodb://localhost:27017/sti
PORT=5000
```

3. **Run Both Servers**
```bash
# From the root directory
npm run dev
```

Or run separately:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

4. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
SIT/
├── client/                    # React Frontend (Vite)
│   ├── public/               # Static files
│   │   └── images/          # Generated assets
│   ├── src/
│   │   ├── components/      # All section components
│   │   ├── App.jsx         # Main app
│   │   └── index.css       # Design system
│   └── package.json
│
├── server/                   # Express Backend
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API endpoints
│   ├── server.js           # Server entry
│   └── .env                # Environment config
│
└── package.json             # Root scripts
```

## 🎨 Features

### 11 Complete Sections
1. **Sticky Navbar** - Smooth scroll navigation
2. **Hero Section** - Gradient background with CTA buttons
3. **About Section** - College info with statistics
4. **Programs Section** - 4 CTEVT programs
5. **Why Choose Us** - 6 key highlights
6. **Facilities** - Campus facilities showcase
7. **Gallery** - Student life images
8. **Testimonials** - Student reviews
9. **Admission CTA** - Application call-to-action
10. **Contact Section** - Form with backend integration
11. **Footer** - Links and information

### Design System
- ✨ Glassmorphism effects throughout
- 🎨 Bright blue (#0066ff) and white theme
- 💫 Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite

### Backend Features
- ✅ MongoDB integration
- ✅ Contact form API
- ✅ Application submission API
- ✅ CORS enabled for localhost

## 📄 Adding Your Prospectus PDF

1. Create or obtain your prospectus PDF
2. Place it in `client/public/` folder
3. Name it: `STI-Prospectus-2024-2025.pdf`
4. The download button will automatically serve it

**For detailed instructions, see:** `client/public/README-PROSPECTUS.md`

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Styling:** Vanilla CSS with design tokens
- **Fonts:** Poppins (Google Fonts)

## 📝 Available Scripts

```bash
npm run dev          # Run both frontend & backend
cd client && npm run dev     # Frontend only
cd server && npm run dev     # Backend only
cd client && npm run build   # Build for production
```

## 🔧 Configuration

### MongoDB Connection
Update `server/.env`:
```env
MONGODB_URI=your_mongodb_connection_string
```

### Port Configuration
- Frontend: `client/vite.config.js` (default: 5173)
- Backend: `server/.env` (default: 5000)

## 📧 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/application` - Submit admission application
- `GET /api/health` - Server health check

## 🎯 Future Enhancements

- [ ] Admin dashboard for form submissions
- [ ] Email notifications
- [ ] Image gallery management
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Deployment setup

## 📞 Support

For issues or questions, contact the development team.

## 📜 License

© 2024-2025 Sagarmatha Technical Institute. All rights reserved.

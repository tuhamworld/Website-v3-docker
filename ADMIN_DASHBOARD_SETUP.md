# Admin Dashboard Setup & Configuration

## Overview
An admin dashboard has been added to your website with a messages tab that displays all contact form submissions.

## Features
- **Admin Login**: Password-protected admin access
- **Messages Tab**: View all contact form submissions in a clean, organized interface
- **Search Functionality**: Filter messages by sender name, email, or message content
- **Message Details**: Click on any message to view the full details including the complete message text
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Routes
- `/admin/login` - Admin login page
- `/admin/dashboard` - Admin dashboard (protected, requires login)

## Environment Configuration

### Frontend (.env or .env.local)
```
VITE_API_URL=http://localhost:3000/api
VITE_ADMIN_PASSWORD=your_secure_password_here
```

### Default Configuration
- **Default Admin Password**: `admin123`
- **API Base URL**: `http://localhost:3000/api`

> ⚠️ **IMPORTANT**: In production, use strong passwords and secure environment variables!

## How to Use the Admin Dashboard

### 1. Access Admin Login
Navigate to: `http://your-domain.com/admin/login`

### 2. Login
- Enter your admin password (default: `admin123`)
- Click "Login"

### 3. View Messages
- You'll be taken to the admin dashboard
- The "Messages" tab shows all contact form submissions
- Messages are displayed in a list on the left side
- Click any message to view full details on the right side

### 4. Search Messages
Use the search bar to filter messages by:
- Sender's name
- Email address
- Message content

### 5. Logout
Click the "Logout" button in the top-right corner to exit

## Component Structure
```
frontend/src/
├── services/
│   └── adminApi.js              # API service for fetching messages
├── components/
│   ├── ProtectedRoute.jsx         # Route protection component
│   └── pages/
│       ├── AdminLogin/            # Login page
│       │   ├── index.jsx
│       │   └── index.scss
│       ├── AdminDashboard/        # Dashboard layout
│       │   ├── index.jsx
│       │   └── index.scss
│       └── AdminMessages/         # Messages display component
│           ├── index.jsx
│           └── index.scss
```

## Backend API Endpoint Used
- **GET /api/messages** - Retrieves all contact messages

The backend already has this endpoint configured in `backend/src/routes/contact.js`

## Security Notes

### Current Implementation
- Simple password-based authentication
- Data stored in localStorage with a flag

### For Production
1. Implement proper JWT authentication
2. Add backend authentication and authorization
3. Use secure, randomly generated passwords
4. Add HTTPS enforcement
5. Implement rate limiting
6. Add message deletion/archiving functionality
7. Add user activity logging

## Styling
The admin dashboard uses:
- SCSS for styling
- Responsive grid layout
- Gradient backgrounds matching your theme
- Smooth animations and transitions

## Future Enhancements
Consider adding:
- Delete/archive message functionality
- Message export (PDF, CSV)
- Multiple admin users
- Reply functionality
- Message categories/tags
- Analytics and statistics
- Email notifications for new messages

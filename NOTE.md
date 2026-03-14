# Project Documentation

## Project Overview
This is a **portfolio website** built with:
- **Frontend**: React (Vite) - Modern UI with components for displaying portfolio, testimonials, experience, and a contact form
- **Backend**: Express.js - REST API server handling contact form submissions and admin functionality
- **Database**: PostgreSQL - Stores contact messages and admin data
- **Deployment**: Docker Compose - Containerized application with three services (frontend, backend, database)

## Project Structure
```
Website-v2/
├── frontend/           # React Vite app (port 80)
├── backend/            # Express.js API (port 5000)
├── docker-compose.yml  # Orchestrates all services
├── init.sql           # Database initialization script
├── .env               # Environment variables
└── README.md          # Original documentation
```

## Docker Setup

### How Docker Works
The `docker-compose.yml` runs three services:

1. **PostgreSQL Database (postgres-db)**
   - Image: postgres:15
   - Port: 5432 (internal)
   - Initializes with `init.sql` on first run
   - Persists data in `postgres_data` volume

2. **Express Backend (express-backend)**
   - Builds from `./backend/Dockerfile`
   - Port: 5000 (exposed)
   - Connects to database via `db` service name
   - Runs: `node src/server.js`

3. **React Frontend (react-frontend)**
   - Builds from `./frontend/Dockerfile`
   - Port: 80 (exposed)
   - Served via Nginx
   - Communicates with backend at `http://backend:5000`

### Environment Variables (.env)
```
POSTGRES_HOST=db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=<your_strong_password>
POSTGRES_DB=portfolio_db
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=<your_strong_password>
DB_NAME=portfolio_db
DB_PORT=5432
PORT=5000
```

> **Security note**: Replace `<your_strong_password>` with actual strong passwords. Never commit real passwords to version control.

## Commands

### Start the Project
```bash
docker-compose up --build
```
- Builds all images if needed
- Starts all three services
- Remove `-d` flag to see logs in terminal, or add it to run in background

### Stop the Project
```bash
docker-compose down
```
- Stops and removes all running containers
- Preserves database volume (`postgres_data`)

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f db
docker-compose logs -f frontend
```

### Access Services
- **Frontend**: http://localhost or http://localhost:80
- **Backend API**: http://localhost:5000
- **Database**: localhost:5432 (requires psql client)

## Database

### Check Data in Database

#### Using Docker Compose
```bash
docker-compose exec db psql -U postgres -d portfolio_db -c "SELECT * FROM contacts;"
```

#### Using psql directly (if PostgreSQL is installed locally)
```bash
psql -h localhost -U postgres -d portfolio_db -c "SELECT * FROM contacts;"
# When prompted, enter password: postgres
```

#### View all contacts with formatted output
```bash
docker-compose exec db psql -U postgres -d portfolio_db -c "SELECT id, name, email, created_at FROM contacts ORDER BY created_at DESC;"
```

#### Delete/Clear contacts (if needed)
```bash
docker-compose exec db psql -U postgres -d portfolio_db -c "DELETE FROM contacts;"
```

### Database Schema
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Troubleshooting

### Database Connection Error
- Ensure PostgreSQL container is running: `docker ps`
- Check logs: `docker-compose logs db`
- Verify .env has correct `POSTGRES_PASSWORD` (must match `DB_PASSWORD`)

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Find process using port 80
lsof -i :80

# Kill process (use PID from above)
kill -9 <PID>
```

### Rebuild Everything Fresh
```bash
docker-compose down -v  # -v removes volumes (database data)
docker-compose up --build
```

## Contact Form Workflow
1. User fills form on frontend (name, email, message)
2. Frontend sends POST request to `http://backend:5000/api/contact`
3. Backend validates data and inserts into PostgreSQL
4. Returns success/error message to frontend
5. Check data with: `docker-compose exec db psql -U postgres -d portfolio_db -c "SELECT * FROM contacts;"`

## Admin Authentication
- **Password Location**: `backend/.env` - `ADMIN_PASSWORD=<your_secure_password>`
- **Login Endpoint**: `POST /api/admin/login`
- **Token Verification**: `GET /api/admin/verify` (requires Bearer token)
- **Messages Access**: `GET /api/messages` (requires Bearer token)

### Change Admin Password
1. Edit `backend/.env`
2. Change `ADMIN_PASSWORD=your_new_secure_password`
3. Rebuild: `docker-compose down && docker-compose up --build -d`

## Security
- **Admin Password**: Stored securely in backend `.env` file (not exposed to frontend)
- **Authentication**: Server-side validation with token-based auth
- **API Security**: Admin routes require Bearer token authentication

## Preparing for Public Release

Before pushing this repository to a public server (e.g. GitHub), remove or ignore any files that contain sensitive credentials:

1. **.env files** – both `backend/.env` and `frontend/.env` contain passwords and should *never* be committed. Add the following lines to your `.gitignore` if they are not already there:
   ```gitignore
   # environment variables
   *.env
   ```
2. **Docker volumes and data** – do not version control the `postgres_data` volume or any SQL dumps containing real messages.
3. **Other secrets** – any API keys, personal tokens, or private certificates used during development should be removed or replaced with placeholders.

_NOTE.md itself is safe for public view and contains only configuration instructions; it does not include any private information._

Refer back to this section whenever you make changes that introduce new credentials.


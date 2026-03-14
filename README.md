 # Hello there; welcome 👋🏾

 [![Website Badge](https://img.shields.io/badge/-tuhamworld.com-000000?style=for-the-badge&logo=Google-Chrome&logoColor=white&link=https://tuhamworld.com)](https://tuhamworld.com) [![Linkedin Badge](https://img.shields.io/badge/-tuhamworld-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tuhamworld)](https://www.linkedin.com/in/tuhamworld) [![Twitter Badge](https://img.shields.io/badge/-@tuhamworld-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/tuhamworld)](https://twitter.com/tuhamworld)

Tunde Abdulhamid Sanusi is a Software Engineer(FE), Creative, and Web Developer. I'm passionate about web technologies and building online presence for business owners via smart optimized websites. My professional field and daily activities mostly align with SDG Goal 8: promoting sustainable economic growth by helping business owners thrive.

 I create technical content (on my [Blog](https://tuhamworld.hashnode.dev/), [Courses](https://udemy.com/user/tunde-sanusi/), and [YouTube](https://www.youtube.com/@/tuhamworld)), build useful [projects](https://github.com/tuhamworld), provide technical support for [businesses website](https://tuhamworld.com), led/work with teams on innovative solutions...

## Here's a quick summary about me**:

- 😊 Pronouns: He/him
- 💡 Fun fact:  I love exploration and hopefully someday, go skydiving.
- 🌱 I’m currently learning JavaScript, ReactJS and NodeJS.
- 😊  I'm open to collaborating on interesting projects.
- 💼 Job interests: Front Engineer.
- 📫 You can contact me via [LinkedIn](https://linkedin.com/in/tuhamworld).

---

### Purpose of this Repo

This repository holds the code for *Website‑v2*, a containerized portfolio application. It demonstrates a 3‑tier architecture with a React frontend, Express backend and PostgreSQL database, all orchestrated with Docker Compose.

> 🔎 **See the full technical documentation** in [NOTE.md](./NOTE.md) before building or deploying the project.
> ⚠️ Remove any sensitive credential files (e.g. `.env`) or secrets from the repository; details are in NOTE.md.

### Project Brief

- **Frontend**: React (Vite) served by Nginx
- **Backend**: Express.js API with contact form and admin panel
- **Database**: PostgreSQL for storing contact messages
- **Deployment**: Docker Compose (frontend, backend, db services)

The README focuses on my personal profile and the link above points to the detailed operational guide in NOTE.md.

---

## Running the application locally 🧩

1. **Configure environment variables**: Copy `.env.example` to `.env` and set the following values:
   
   - **DB_HOST**: Database host (leave as `db` for Docker Compose).
   - **DB_USER**: Database user (leave as `postgres`).
   - **DB_PASSWORD**: Set a strong password for the database user.
   - **DB_NAME**: Database name (leave as `portfolio`).
   - **DB_PORT**: Database port (leave as `5432`).
   - **POSTGRES_HOST_AUTH_METHOD**: Postgres authentication method (leave as `trust`).
   - **POSTGRES_PASSWORD**: Set a strong password for the Postgres superuser.
   - **POSTGRES_DB**: Initial database to create (leave as `portfolio`).
   - **PORT**: Backend internal port (leave as `80`).
   - **ADMIN_PASSWORD**: Set a secure password for admin login to the dashboard.

   > **Security note**: Never commit `.env` to version control. Use strong, unique passwords.

2. Build and start the stack with Docker Compose:
   ```bash
   docker-compose up --build
   ```
   - The PostgreSQL database will initialize using `init.sql`.
   - Backend API is proxied through Nginx at `http://localhost/api`.
   - Frontend is served by Nginx at `http://localhost/` (port 80).
3. To stop and remove containers: `docker-compose down`.

> You can also run the backend or frontend individually by `docker build` and `docker run`, but compose handles orchestration.

## Publishing images to Docker Hub 📦

Two images are produced by this repo:

- `username/portfolio-backend:1.0` (and `latest`)
- `username/portfolio-frontend:1.0` (and `latest`)

Replace `username` with your Docker Hub account. Update the `image:` fields in `docker-compose.yml` accordingly. The GitHub Actions workflow included below handles building and pushing these images automatically on every push to `main`.

## CI/CD via GitHub Actions 🚀

A workflow file lives in `.github/workflows/ci-cd.yml`.

### What it does

1. Checks out the repository.
2. Logs in to Docker Hub using `DOCKERHUB_USERNAME`/`DOCKERHUB_TOKEN` stored in GitHub secrets.
3. Builds both backend and frontend images and pushes two tags (`latest` and `1.0`).
4. SSHs into a remote Linux VM (credentials in `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY` secrets) and runs `docker-compose pull` followed by `docker-compose up -d --build` from a directory such as `~/app`.

### Required repository secrets

- `DOCKERHUB_USERNAME` – your Docker Hub user or organization name.
- `DOCKERHUB_TOKEN` – a personal access token or password for Docker Hub.
- `SERVER_HOST` – IP or hostname of the target VM.
- `SERVER_USER` – SSH user on the VM.
- `SERVER_SSH_KEY` – private key allowing SSH access.

## Deploying to a Linux VM (e.g. Azure) 🖥️

1. **Create a VM** (Azure CLI example):
   ```sh
   az login
   az group create -n portfolioRG -l eastus
   az vm create \
     -g portfolioRG -n portfolioVM \
     --image UbuntuLTS \
     --admin-username azureuser \
     --generate-ssh-keys
   az vm open-port --port 80 --resource-group portfolioRG --name portfolioVM
   ```
2. SSH into the machine (`ssh azureuser@<public-ip>`).
3. Install Docker & Compose:
   ```sh
   sudo apt update && sudo apt install -y docker.io docker-compose
   sudo usermod -aG docker $USER
   logout && login  # refresh group membership
   ```
4. Clone your repo or copy `docker-compose.yml` and `.env` to the VM:
   ```sh
   git clone https://github.com/<your>/repo.git ~/app
   cd ~/app
   cp .env.example .env    # then edit values in-place
   docker-compose up -d --build
   ```
5. The frontend will be reachable at `http://<public-ip>/` and the API is proxied at `http://<public-ip>/api`.

(Alternatively, let GitHub Actions perform these steps automatically via SSH.)

---

| <img align="center" src="https://github-readme-stats.vercel.app/api?username=tuhamworld&show_icons=true&include_all_commits=true&hide_border=true" alt="Tunde's GitHub stats" /> | <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tuhamworld&langs_count=8&layout=compact&hide_border=true" alt="Tunde's GitHub stats" /> |
| ------------- | ------------- |
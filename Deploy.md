# Deploying to Azure VM: Step-by-Step Guide

This guide walks you through pushing your Docker images to Docker Hub and deploying your 3-tier portfolio app to an Azure Linux VM for external access.

## Prerequisites
- Docker and Docker Compose installed locally
- Azure CLI (`az`) installed and logged in (`az login`)
- A Docker Hub account
- Your GitHub repository pushed with the latest code

## Step 1: Update Docker Compose with Your Docker Hub Username
Replace `tuhamworld` in `docker-compose.yml` with your actual Docker Hub username.

**Edit `docker-compose.yml`:**
```yaml
# Change these lines:
image: YOUR_USERNAME/portfolio-backend:1.0
image: YOUR_USERNAME/portfolio-frontend:1.0
```

**What it does:** Ensures builds and pushes use your Docker Hub account.

## Step 2: Build the Images Locally
```bash
docker-compose build
```

**What it does:** Builds the backend and frontend images with tags `YOUR_USERNAME/portfolio-backend:1.0` and `YOUR_USERNAME/portfolio-frontend:1.0`.

## Step 3: Login to Docker Hub
```bash
docker login
```

**What it does:** Authenticates you with Docker Hub (enter username and password/token).

## Step 4: Push the Images to Docker Hub
```bash
docker push YOUR_USERNAME/portfolio-backend:1.0
docker push YOUR_USERNAME/portfolio-frontend:1.0
```

**What it does:** Uploads the images to Docker Hub, making them available for deployment.

## Step 5: (Optional) Clean Up Old Docker Hub Images
- Visit https://hub.docker.com/repositories/YOUR_USERNAME
- Delete old tags from `portfolio-backend` and `portfolio-frontend` repos (keep `:1.0` and `:latest`).

**Locally (if needed):**
```bash
docker images YOUR_USERNAME/portfolio-*
docker rmi YOUR_USERNAME/portfolio-backend:old_tag
```

**What it does:** Removes outdated images to keep your Docker Hub clean.

## Step 6: Create an Azure Linux VM (using bash script or GUI)
```bash
az login
az group create --name portfolioRG --location eastus
az vm create \
  --resource-group portfolioRG \
  --name portfolioVM \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys \
  --size Standard_B1s
az vm open-port --resource-group portfolioRG --name portfolioVM --port 80
```

**What it does:** Creates a resource group, Ubuntu VM with SSH access, and opens port 80 for HTTP.

## Step 7: Get the VM's Public IP
```bash
az vm show --resource-group portfolioRG --name portfolioVM --show-details --query [publicIps] --output tsv
```

**What it does:** Outputs the VM's public IP (e.g., `123.45.67.89`).

## Step 8: SSH into the VM
```bash
ssh azureuser@<VM_PUBLIC_IP>
```

**What it does:** Connects you to the VM securely.

## Step 9: Install Docker on the VM
```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo usermod -aG docker $USER
logout
# SSH back in: ssh azureuser@<VM_PUBLIC_IP>
```

**What it does:** Installs Docker tools and sets up permissions.

## Step 10: Deploy Your App
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git ~/app
cd ~/app
cp .env.example .env
# Edit .env with your actual values (strong passwords!)
docker-compose pull
docker-compose up -d
```

**What it does:** Downloads code, configures environment, pulls images, and starts containers.

## Step 11: Verify Deployment
```bash
docker-compose ps
docker-compose logs
```

**Then visit:** `http://<VM_PUBLIC_IP>/` in your browser.

**What it does:** Checks if containers are running and accessible.

## Final Notes
- **Cost:** Azure charges for VMs; delete with `az group delete --name portfolioRG` when done.
- **Security:** Use strong passwords in `.env`. Consider adding HTTPS later.
- **Troubleshooting:** Use `docker-compose logs` for issues.

Your app is now live on Azure! 
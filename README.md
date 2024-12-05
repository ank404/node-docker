# Dockerized Node.js Service with CI/CD
This project demonstrates a Node.js service that is dockerized and deployed to a remote AWS Linux server using GitHub Actions for CI/CD. It includes secure secrets management and implements Basic Authentication for protected routes.

## Features

* Node.js REST API:
  * /: Returns "Hello, world!"
  * /secret: Protected by Basic Auth, returns a secret message.

* Environment Variables:
  * Configurable via .env file or GitHub Secrets for:
  * SECRET_MESSAGE: Secret message for the /secret route.
  * USERNAME: Username for authentication.
  * PASSWORD: Password for authentication.

* Dockerized Application:
  * Runs as a Docker container.
  * Lightweight and portable for deployment.

## CI/CD Pipeline:
  * Automated with GitHub Actions.
  * Builds Docker images and deploys to an AWS remote server.

## Tech Stack
  * Backend: Node.js (Express.js)
  * Containerization: Docker
  * CI/CD: GitHub Actions
  * Hosting: AWS Linux Server (Dockerized)

## Setup Instructions
1. Clone the Repository
```
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```
2. Configure Environment Variables
```
SECRET_MESSAGE=YourSecretMessage
USERNAME=YourUsername
PASSWORD=YourPassword
```
3. Build and Run with Docker
```
docker build -t nodejs-service .
docker run -d -p 3000:3000 --env-file .env nodejs-service
```
* Access the application:
  * Root Route: http://localhost:3000/
  * Secret Route: http://localhost:3000/secret

## Deployment Pipeline
### Automated Deployment via GitHub Actions
The application is automatically built, pushed to Docker Hub, and deployed to an AWS Linux server.

## Workflow Steps:
1. Push to Main:
  * Trigger GitHub Actions workflow to:
    * Build Docker image.
    * Push image to Docker Hub.
    * SSH into the AWS server and deploy the container.

2. Environment Variables:
  * Managed securely via GitHub Secrets.

## How to Access the Application
1. Visit the public IP of your AWS server:
  * Root Route: http://<your-server-ip>:3000/
  * Secret Route: http://<your-server-ip>:3000/secret
2. Enter the credentials set in the GitHub Secrets.

## Repository Structure
```
├── .github/workflows
│   └── deploy-to-aws.yml   # GitHub Actions workflow
├── Dockerfile              # Docker image configuration
├── .dockerignore           # Docker ignore file
├── .env                    # Environment variables (not pushed to GitHub)
├── index.js                # Node.js application
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
```

## Key Commands
* Run the Docker Container Locally:
```
docker run -d -p 3000:3000 --env-file .env nodejs-service
```
* SSH into Remote Server:
```
ssh <username>@<server-ip>
```
* Check Running Containers:
```
docker ps
```

# DevOps Project

This project demonstrates the integration of DevOps practices by deploying a freelancing portfolio website. The project covers the complete workflow of version control, containerization, and automation using CI/CD pipelines.

---
- **Developer:** Momina Eman
- **ID:** 221106
---

## Project Overview

- **Project Name:** Integrating my Freelanincing Portfolio with Github , Dockerhub and Jenkins
- **Purpose:** To automate the deployment and integration process of a freelancing portfolio website.
- **Technologies Used:**
  - **Docker**: For containerizing the application and pushing the image to Docker Hub.
  - **GitHub**: For version control and collaboration.
  - **Ngrok**: For exposing the local Jenkins server to the internet.
  - **Jenkins**: For automating CI/CD pipelines.
  - **Webhooks**: For triggering automated builds and deployments.

---

## Features / Functionalities

1. **Automated CI/CD Pipelines**: Seamless integration and deployment pipeline using Jenkins.
2. **Webhooks**: Triggered by changes in the GitHub repository.
3. **Docker Containerization**: Application image creation and push to Docker Hub.
4. **GitHub Integration**: Code repository management with branch-specific build configurations.

---

## Project Workflow

1. **Step 1: Push Code to GitHub**
   - Upload the freelancing portfolio website code to a GitHub repository.

2. **Step 2: Configure Jenkins**
   - Install and configure Jenkins.
   - Connect Jenkins with GitHub using webhooks.

3. **Step 3: Containerization with Docker**
   - Build a Docker image for the application.
   - Push the Docker image to Docker Hub.

4. **Step 4: Expose Jenkins Using Ngrok**
   - Use Ngrok to expose the Jenkins server for webhook communication.

5. **Step 5: Automate Builds**
   - Configure Jenkins pipelines to automate builds upon code commits.

---


## Screenshots

Below are screenshots for various stages of the project:

1. **Docker Image Creation:**
![image](https://github.com/user-attachments/assets/205d92e6-40fa-4299-a779-893388c422aa)

![image](https://github.com/user-attachments/assets/5b2c3714-6855-4f11-ba2d-04a67406ed68)

![image](https://github.com/user-attachments/assets/2119b255-9bd7-4f6a-b925-e7522fa65ce4)

![image](https://github.com/user-attachments/assets/84071bfc-4391-4aad-9383-654dcfd7092a)

![image](https://github.com/user-attachments/assets/1f0a22f3-ec74-48f8-b7df-8c5466954826)


2. **GitHub Commit:**
   ![image](https://github.com/user-attachments/assets/26f5be3c-783c-43f2-9aab-51befa16d32c)

   ![image](https://github.com/user-attachments/assets/8cbb7030-a244-432d-9cf9-2a4096b4255b)

   ![image](https://github.com/user-attachments/assets/008f36de-4ff6-458e-a6b2-92dcfff40c0d)

   ![image](https://github.com/user-attachments/assets/adc9231d-72df-4de2-ad9a-1603b95825dc)

   ![image](https://github.com/user-attachments/assets/db6a2b2a-912b-4fd1-9eb1-03eb8903a6b3)

   ![image](https://github.com/user-attachments/assets/21ae98bb-cec5-4bf2-a7cc-f1af821b7f39)

   ![image](https://github.com/user-attachments/assets/a92c45fe-0176-4621-9f82-34e33a8faf7c)

   ![image](https://github.com/user-attachments/assets/662bc447-adcc-4cf4-a1dc-84ae0f09e55e)

   ![image](https://github.com/user-attachments/assets/e806e10c-6f9e-4d49-8c62-ab8acb8e9ab4)

   ![image](https://github.com/user-attachments/assets/5852471b-41e8-4bcd-bbd2-3ba825f8f04f)

3. **Webhook Trigger to integrate Github with jenkins:**
   ![image](https://github.com/user-attachments/assets/71fea4ab-3d1d-411b-9488-4df7471c2c61)

   ![image](https://github.com/user-attachments/assets/06eb2245-6ef2-4f41-8581-765afa6602b9)

   ## Configuring in Jenkins:
   ![image](https://github.com/user-attachments/assets/da8344e7-a64a-4e74-8e5f-315dc1a3a3a5)

   ## Committing change in branch:
   ![image](https://github.com/user-attachments/assets/423df4c7-9237-420a-afd2-0f59433c6ecd)

   ![image](https://github.com/user-attachments/assets/eff64a21-3f67-4eae-9bf4-364e455bbc76)

   ## Automatically create a new build:

  ![image](https://github.com/user-attachments/assets/78e29cb1-763c-475a-a484-7b60091dabec)
  
  ![image](https://github.com/user-attachments/assets/dff5e89d-d7b4-4ae0-9c39-2608d9712f97)

  ![image](https://github.com/user-attachments/assets/646e8343-4188-47fd-bf17-384c52dd6f79)

  
4. **Docker integration with Jenkins:**

   ## Docker Script:
   pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'frontend', url: 'https://github.com/mominaeman/DEVOPS_PROJECT.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = "momina299/website" // Use your Docker Hub username
                    def imageTag = "latest"

                    bat "docker build -t ${imageName}:${imageTag} ."
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker_credential', url: 'https://index.docker.io/v1/']) {
                    script {
                        def imageName = "momina299/website"
                        def imageTag = "latest"

                        bat "docker push ${imageName}:${imageTag}"
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
![image](https://github.com/user-attachments/assets/aae9351b-6c60-44c8-b91b-e82d3a44be73)

![image](https://github.com/user-attachments/assets/aae5943f-33df-4ae5-8d41-90c67f72782c)

![image](https://github.com/user-attachments/assets/627e2e6f-f8fe-4369-89f7-d1d2dd0cd413)

![image](https://github.com/user-attachments/assets/78a0b858-8e93-486c-a1eb-ceb3d1977fec)


## Conclusion:
This project successfully demonstrates the automation of the development lifecycle using DevOps principles. The integration of GitHub, Jenkins, and Docker provides a streamlined CI/CD pipeline that simplifies application deployment. This approach ensures faster delivery, consistent builds, and scalable deployment solutions, showcasing the power of modern DevOps practices.





   



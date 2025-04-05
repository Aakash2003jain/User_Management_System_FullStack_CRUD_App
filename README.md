# 👥 User Management System – Full Stack CRUD Application

A full stack **User Management System** built using **Spring Boot** for the backend and **React.js** for the frontend. This application enables users to **Create**, **Read**, **Update**, and **Delete** (CRUD) user records, with data persisted in a **MySQL** database.
![Demo](demo.mp4)

---

## 🚀 Tech Stack

### 🧠 Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- Spring Web
- MySQL Database
- Maven

### 💻 Frontend
- React.js
- Axios
- Bootstrap (or other CSS framework)
- React Router DOM

---
## 🔧 Features

- Add a new user
- View all users in a table
- Edit user details
- Delete a user
- MySQL database integration
- RESTful API communication between frontend and backend

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Aakash2003jain/User_Management_System_FullStack_CRUD_App.git
cd User_Management_System_FullStack_CRUD_App
```
### 2️⃣ Set Up MySQL
Install and open MySQL Workbench

Create a new schema (database) named :
```bash
CREATE DATABASE fullstack-backend;
```
### 3️⃣ Configure Spring Boot (application.properties)
Navigate to:
```bash
backend/fullstack-backend/src/main/resources/application.properties
```
Update the database connection with your own MySQL username and password:

```bash
spring.application.name=fullstack-backend
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/fullstack-backend
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

```
⚠️ IMPORTANT: Replace YOUR_MYSQL_USERNAME and YOUR_MYSQL_PASSWORD with your actual MySQL credentials.

### 4️⃣ Run the Backend
Open terminal and run the Spring Boot app:
```bash
cd backend/fullstack-backend
./mvnw spring-boot:run
```
This starts the server on http://localhost:8080.



### 5️⃣ Run the Frontend
Open another terminal and start the React app:
```bash
cd frontend
npm install
npm start
```






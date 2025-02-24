# Full-Stack Coding Challenge

# Task Manager Application

A full-stack task management application built with React, TypeScript, Node.js, and PostgreSQL.

## Features

- User Authentication (Register/Login)
- Create, Read, Update, and Delete Tasks
- Mark Tasks as Complete/Incomplete
- Modern UI with shadcn/ui Components
- Responsive Design

## Tech Stack

### Frontend

- React 18
- TypeScript
- React Router DOM
- Axios for API calls
- shadcn/ui for UI components
- Tailwind CSS for styling

### Backend

- Node.js
- Express.js
- PostgreSQL
- JWT for authentication
- bcrypt for password hashing

## Demo Video

[Task Manager Demo](https://www.loom.com/share/fbef3fb345e442c6a77b9401b1701600?sid=c2951767-5186-4c77-b2e9-6b967d162adb)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pandaofhead/task-manager.git
cd task-manager
```

2. Backend Setup

```bash
cd task-manager-backend
npm install
```

Create a `.env` file in the backend directory:

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/taskmanager
JWT_SECRET=your_jwt_secret
PORT=3001
```

3. Frontend Setup

```bash
cd task-manager-frontend
npm install
```

4. Database Setup

Run the following SQL commands in your PostgreSQL client:

```sql
CREATE DATABASE taskmanager;
CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE tasks (
id SERIAL PRIMARY KEY,
title VARCHAR(100) NOT NULL,
description TEXT,
is_complete BOOLEAN DEFAULT FALSE,
user_id INTEGER REFERENCES users(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Running the Application

1. Start the backend server:
   bash
   cd task-manager-backend
   npm run dev

2. Start the frontend development server:
   bash
   cd task-manager-frontend
   npm start

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication

- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login user

### Tasks

- GET `/tasks` - Get all tasks for authenticated user
- POST `/tasks` - Create a new task
- PUT `/tasks/:id` - Update a task
- DELETE `/tasks/:id` - Delete a task

## Project Structure

task-manager/
├── task-manager-frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── types/
│ │ └── ui/
│ └── package.json
└── task-manager-backend/
├── src/
│ ├── controllers/
│ ├── middleware/
│ ├── routes/
│ └── config/
└── package.json

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

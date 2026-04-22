# README.md

```markdown
# Realtime Task Collaboration System

A simplified Trello-like task management system that supports realtime collaboration for small teams.

---

## Tech Stack

### Frontend

- React (Vite)
- TypeScript
- Ant Design
- Socket.io Client

### Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Socket.io
- JWT Authentication

---

## System Architecture

The system follows a client-server architecture with realtime communication:

- **Frontend (React)** communicates with Backend via REST API and WebSocket
- **Backend (NestJS)** handles business logic, authentication, and realtime events
- **Database (PostgreSQL)** stores users, workspaces, and tasks
- **Socket.io** enables realtime updates across clients

Architecture Diagram:

![System Architecture](./docs/system-overview.png)

---

## Database Schema

Main entities:

- **User**
- **Workspace**
- **Task**
- **Member**

Relationships:

- A user can join multiple workspaces
- A workspace contains multiple tasks
- Tasks belong to a workspace

Database Diagram:

![Database Schema](./docs/system-overview.png)

---

## Realtime Flow

The system uses WebSocket (Socket.io) for realtime collaboration:

### Example Flow: Update Task

1. User updates a task (drag/drop or edit)
2. Frontend emits a socket event to server
3. Backend processes and updates database
4. Backend broadcasts event to all connected clients
5. Other users receive event and update UI instantly

Realtime Flow Diagram:

![Realtime Flow](./docs/system-overview.png)

---

## Authentication

- JWT-based authentication
- Access token stored on client
- Protected routes via middleware

---

## Project Structure
```

realtime-task-collaboration/
│
├── frontend/ # React app
├── backend/ # NestJS API
├── docs/ # diagrams (architecture, database, realtime)
└── README.md

````


##  Setup & Run Project

### 1. Clone repository

```bash
git clone https://github.com/kiettruong-dev/realtime-task-collaboration.git
cd realtime-task-collaboration
```

---

### 2. Setup Backend

```bash
cd realtime-task-collaboration-backend
npm install
```

Create `.env` file:

```
PORT=3000

DATABASE_URL="postgresql://user:password@localhost:5432/task_realtime"

JWT_SECRET="your-secret-key"
JWT_EXPIRATION="1d"

CORS_ORIGIN=http://localhost:5173

SALT_ROUNDS=10
```

Run migration:

```bash
npx prisma migrate dev
```

Start backend:

```bash
npm run start:dev
```

---

### 3. Setup Frontend

```bash
cd realtime-task-collaboration-frontend
npm install
```

Create `.env`:

```
VITE_CRYPTO_KEY=your-key
VITE_BASE_URL=http://localhost:3000
```

Start frontend:

```bash
npm run dev
```

---

##  Realtime Events (Socket.io)

| Event         | Description      |
| ------------- | ---------------- |
| `task:create` | Create new task  |
| `task:update` | Update task      |
| `task:delete` | Delete task      |
| `task:move`   | Drag & drop task |

---

## Features

- User authentication (JWT)
- Workspace management
- Task CRUD
- Drag & drop task (kanban style)
- Realtime collaboration (Socket.io)

---

## Future Improvements

- Role & permission system
- Notifications
- File attachments
- Activity logs

---
````

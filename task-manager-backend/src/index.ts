import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes"
import taskRoutes from "./routes/taskRoutes"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API is running' });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
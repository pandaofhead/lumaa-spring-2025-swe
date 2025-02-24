import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Task } from '../../types';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from 'react-router-dom';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const navigate = useNavigate();

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Task Manager</CardTitle>
                    <Button variant="outline" onClick={handleLogout}>
                        Logout
                    </Button>
                </CardHeader>
                <CardContent>
                    <TaskForm onTaskAdded={fetchTasks} />
                    <div className="space-y-4 mt-6">
                        {tasks.map(task => (
                            <TaskItem 
                                key={task.id} 
                                task={task} 
                                onDelete={async (id) => {
                                    await api.delete(`/tasks/${id}`);
                                    fetchTasks();
                                }}
                                onUpdate={fetchTasks}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TaskList;
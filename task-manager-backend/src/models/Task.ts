interface Task {
    id: number;
    title: string;
    description?: string;
    isComplete: boolean;
    userId: number;
}

export default Task;
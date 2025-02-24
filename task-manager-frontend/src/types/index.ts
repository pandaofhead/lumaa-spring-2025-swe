export interface Task {
    id: number;
    title: string;
    description?: string;
    isComplete: boolean;
    userId: number;
}

export interface AuthResponse {
    token: string;
    message: string;
} 
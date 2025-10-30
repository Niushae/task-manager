import { Employee } from './employee'

enum TaskStatus {
    Pending = 0,
    Completed = 1
}

export interface Task {
    id: number;
    title: string;
    deadline?: Date;
    assignedTo?: Employee[];
    status: TaskStatus;
}

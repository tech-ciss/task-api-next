/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from "@/models/task.model";

export const createTask = (userId: string, data: any) => Task.create({ ...data, user: userId});

export const getTasks = (userId: string) => Task.find({ user: userId });

export const updateTask = (taskId: string, data: any) => Task.findByIdAndUpdate(taskId, data, { new: true });

export const deleteTask = (taskId: string) => Task.findByIdAndDelete(taskId);
import { getAllTasks } from "./get_data";

export const getAllCompletedTasks = () => getAllTasks().filter(task => task.is_completed); 
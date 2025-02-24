import React, { useState } from "react";
import api from "../../services/api";
import { Task } from "../../types";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");

  const handleUpdate = async () => {
    try {
      await api.put(`/tasks/${task.id}`, {
        title,
        description,
        isComplete: task.isComplete,
      });
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const toggleComplete = async () => {
    try {
      await api.put(`/tasks/${task.id}`, {
        ...task,
        isComplete: !task.isComplete,
      });
      onUpdate();
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        {isEditing ? (
          <div className="space-y-4">
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleUpdate}>Save</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Checkbox
              checked={task.isComplete}
              onCheckedChange={toggleComplete}
            />
            <div className="flex-1">
              <h3
                className={`font-medium ${
                  task.isComplete ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p className="text-sm text-gray-500">{task.description}</p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;

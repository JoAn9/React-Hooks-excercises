import React, { useState, useEffect } from 'react';
import uuid from 'uuid';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = tasks => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const readStoredTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap ? tasksMap : { tasksList: [], completedTasks: [] };
};

function Tasks() {
  const [taskText, setTaskText] = useState('');

  const storedTasks = readStoredTasks();

  const [tasksList, setTasksList] = useState(storedTasks.tasksList);
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  );

  useEffect(() => {
    storeTasks({ tasksList, completedTasks });
  }, [tasksList, completedTasks]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasksList([...tasksList, { id: uuid(), taskText }]);
    setTaskText('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') addTask();
  };

  const setTaskCompleted = task => () => {
    setCompletedTasks([...completedTasks, task]);
    setTasksList(tasksList.filter(item => item.id !== task.id));
  };

  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(item => item.id !== task.id));
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input
          value={taskText}
          onChange={updateTaskText}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="task-list">
        {tasksList.map(item => {
          const { id, taskText } = item;
          return (
            <div key={id} onClick={setTaskCompleted(item)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map(item => {
          const { id, taskText } = item;
          return (
            <div key={id}>
              {taskText}{' '}
              <span onClick={deleteTask(item)} className="delete-task">
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;

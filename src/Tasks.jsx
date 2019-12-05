import React, { useState } from 'react';
import uuid from 'uuid';

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

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

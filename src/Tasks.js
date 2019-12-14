import React, { useState, useEffect, useReducer } from 'react';
import uuid from 'uuid';

const initialTasksState = {
  tasksList: [],
  completedTasks: [],
};

const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const taskReducer = (state, action) => {
  const { type, task } = action;
  switch (type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasksList: [...state.tasksList, task],
      };
    case TYPES.COMPLETE_TASK:
      return {
        ...state,
        completedTasks: [...state.completedTasks, task],
        tasksList: state.tasksList.filter(item => item.id !== task.id),
      };
    case TYPES.DELETE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter(
          item => item.id !== task.id
        ),
      };
    default:
      return state;
  }
};

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = tasks => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const readStoredTasks = () => {
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap ? tasksMap : initialTasksState;
};

function Tasks() {
  const [taskText, setTaskText] = useState('');
  const storedTasks = readStoredTasks();

  const [state, dispatch] = useReducer(taskReducer, storedTasks);
  const { tasksList, completedTasks } = state;

  useEffect(() => {
    storeTasks({ tasksList, completedTasks });
  }, [tasksList, completedTasks]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    dispatch({ type: TYPES.ADD_TASK, task: { id: uuid(), taskText } });
    setTaskText('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') addTask();
  };

  const setTaskCompleted = task => () => {
    dispatch({ type: TYPES.COMPLETE_TASK, task });
  };

  const deleteTask = task => () => {
    dispatch({ type: TYPES.DELETE_TASK, task });
  };

  console.log(state);

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

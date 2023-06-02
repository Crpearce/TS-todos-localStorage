import React, { useState, useEffect } from 'react';
import { LuDelete } from 'react-icons/lu';
import { BsFillCalendarPlusFill } from 'react-icons/bs';
import './form.styles.css';

interface Task {
  id: number;
  date: string;
  desc: string;
  completed: boolean;
}

interface FormProps {
  name: string;
}

const Form: React.FC<FormProps> = ({ name }) => {
  const localStorageTasks = JSON.parse(localStorage.getItem(`${name} schedule`) || '[]');
  const [taskDate, setTaskDate] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [newTask, setNewTask] = useState<Task | null>(null);
  const [allTasks, setAllTasks] = useState<Task[]>(localStorageTasks);

  useEffect(() => {
    localStorage.setItem(`${name} schedule`, JSON.stringify(allTasks));
  }, [allTasks, name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      date: taskDate,
      desc: taskDesc,
      completed: false,
    };
    setNewTask(newTask);
    setAllTasks([newTask, ...allTasks]);
    setTaskDate('');
    setTaskDesc('');
  };

  const updateComplete = (id: number) => {
    const updatedTasks = allTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setAllTasks(updatedTasks);
    localStorage.setItem(`${name} schedule`, JSON.stringify(updatedTasks));
  };

  const removeTask = (id: number) => {
    const filteredTasks = allTasks.filter((task) => task.id !== id);
    setAllTasks(filteredTasks);
    localStorage.setItem(`${name} schedule`, JSON.stringify(filteredTasks));
  };

  return (
    <div className='form-container'>
      <h1 className='form-header'>{name}'s todo list</h1>
      <div className='input-container'>
        <label>
          Date:
          <input
            type='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </label>
        <label>
          Task description:
          <input
            type='text'
            value={taskDesc}
            placeholder='Add task'
            onChange={(e) => setTaskDesc(e.target.value)}
            required
          />
        </label>
        <BsFillCalendarPlusFill className='add-icon' onClick={handleSubmit} />
      </div>
      <ul className='list-container'>
        {allTasks.map((task) => (
          <li key={task.id}>
            <label>
              Completed:
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => updateComplete(task.id)}
              />
            </label>
            <h3>{task.date}</h3>
            <p>{task.desc}</p>
            <LuDelete className='delete-icon' onClick={() => removeTask(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
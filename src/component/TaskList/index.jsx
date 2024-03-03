import React, { useState, useEffect } from 'react'
import styles from './TaskList.module.css'

function TaskList () {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [selectedTask, setSelectedTask] = useState(null)
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }
  const deleteTask = index => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  useEffect(() => {}, [tasks])
  return (
    <div className={styles.taskListContainer}>
      <h2>Задача</h2>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskItem}>
            {task}
            <button
              onClick={() => {
                deleteTask(index)
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.taskInput}>
        <input
          type='text'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          autoFocus
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  )
}

export default TaskList

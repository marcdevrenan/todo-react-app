import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")
    const [taskEdit, setTaskEdit] = useState(null)
    const [editingTask, setEditingTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newTask = {
            id: new Date().getTime(),
            text: task,
            completed: false, 
        }

        setTasks([...tasks].concat(newTask))
        setTask("")
    }

    function editTask(id) {
        const tasksList = [...tasks].map((task) => {
            if (task.id === id) {
                task.text = editingTask
            }
            return task
        })

        setTasks(tasksList)
        setTaskEdit(null)
        setEditingTask("")
    }

    function deleteTask(id) {
        const tasksList = [...tasks].filter((task) => task.id !== id)
        setTasks(tasksList)
    }

    function taskDone(id) {
        const tasksList = [...tasks].map((task) => {
            if (task.id === id) {
                task.finished = !task.finished
            }
            return task
        })

        setTasks(tasksList)
    }

    return (
        <>
            <h1 className="d-flex align-items-center justify-content-center">ToDo React App</h1>
            <Card>
                <Card.Body>
                    <h3>Add Task</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="task">
                            <Form.Control type="text" onChange={(e) => setTask(e.target.value)} value={task}></Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-4" variant="outline-primary" type="submit">Submit</Button>
                        <Link className="w-100 mt-4 btn btn-outline-info" to="/about">About App</Link>
                    </Form>
                </Card.Body>
            </Card>

            <Card className="mt-4">
                <Card.Body>
                    <h5>
                        {tasks.map((task) => 
                            <div key={task.id}>
                                <input type="checkbox" onChange={() => taskDone(task.id)} checked={task.finished} /> 

                                {taskEdit === task.id 
                                ? (<input type="text" onChange={(e) => setEditingTask(e.target.value)} value={editingTask} /> ) 
                                : (<div>{task.text}</div>)
                                }

                                {taskEdit === task.id 
                                ? (<Button variant="outline-success btn-sm" onClick={() => editTask(task.id)}>Save Changes</Button>) 
                                : (<Button variant="outline-warning btn-sm" onClick={() => setTaskEdit(task.id)}>Edit</Button>)
                                }
                                
                                <Button variant="outline-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</Button>

                            </div>)}
                    </h5>
                </Card.Body>
            </Card>
        </>
    )
}
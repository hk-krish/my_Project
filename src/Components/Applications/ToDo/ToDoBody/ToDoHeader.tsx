import React from 'react'
import { Button, CardHeader, Input, InputGroup } from 'reactstrap'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { addNewTodo, setTask } from '../../../../ReduxToolkit/Reducers/ToDoSlice';
import { toast } from 'react-toastify';
import { AddTask } from '../../../../Constants';

const ToDoHeader = () => {
    const { task } = useAppSelector((state) => state.todo);
    const dispatch = useAppDispatch();
    const onTaskChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setTask(e.currentTarget.value));
    };
    const handleNewTask = () => {
      if (task === "") {
        toast.error("please add your todo");
      } else {
        dispatch(addNewTodo(task));
        dispatch(setTask(""));
        toast.success(`Completed add ${task}`);
      }
    };
  return (
    <CardHeader className="b-bottom">
      <div className="todo-list-header">
        <InputGroup className="new-task-wrapper">
          <Input value={task} placeholder={'Enter new task here...'} id="new-task" onChange={(e)=>onTaskChanged(e)} className="m-0" />
          <Button color="primary" className="add-new-task-btn" onClick={handleNewTask} id="add-task">{AddTask}</Button>
        </InputGroup>
      </div>
    </CardHeader>
  )
}

export default ToDoHeader
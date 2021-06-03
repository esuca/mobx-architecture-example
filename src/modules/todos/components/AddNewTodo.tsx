import { ChangeEvent, useState } from 'react'
import { AddTodoAction } from 'modules/todos/data-access/actions/AddTodoAction'
import { useActionLoadable } from 'shared/arch/hooks/useActionLoadable'

export const AddNewTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const [addTodo, isLoading] = useActionLoadable(AddTodoAction)

  const addTask = async () => {
    await addTodo(inputValue)
    setInputValue('')
  }

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value)
  }

  return (
    <div>
      <label htmlFor='todo-text'>Write a new task</label>
      <br/>
      <input id='todo-text' type='text' value={inputValue} onChange={onChange} />
      <button onClick={addTask} disabled={isLoading}>{isLoading ? "adding todos..." : 'add todos'}</button>
    </div>
  )
}

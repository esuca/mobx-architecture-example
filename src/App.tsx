import 'App.css'
import { AddNewTodo } from 'modules/todos/components/AddNewTodo'
import { TodosList } from 'modules/todos/components/TodosList'
import { DisplayTotalCompletedTodos } from 'modules/todos/components/DisplayTotalCompletedTodos'

export const App = () => (
  <div className="app-container">
    <AddNewTodo />
    <TodosList />
    <DisplayTotalCompletedTodos />
  </div>
)

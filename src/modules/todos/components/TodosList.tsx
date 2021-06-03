import { FC, useEffect } from 'react'
import { observer } from 'mobx-react'
import { container } from 'tsyringe'
import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'
import { LoadTodosAction } from 'modules/todos/data-access/actions/LoadTodosAction'
import { ToggleTodoCompletionAction } from 'modules/todos/data-access/actions/ToggleTodoCompletionAction'
import { useActionLoadable } from 'shared/arch/hooks/useActionLoadable'
import { useAction } from 'shared/arch/hooks/useAction'

export const TodosList: FC = observer(() => {
  const { todos } = container.resolve(TodosStore)
  const toggleTodoCompletion = useAction(ToggleTodoCompletionAction)
  const [loadTodos, isLoading] = useActionLoadable(LoadTodosAction)

  useEffect(() => {
    loadTodos(undefined)
  }, [loadTodos])

  if (isLoading) {
    return <p>Loading todos...</p>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => toggleTodoCompletion(todo.id)}
            data-testid={`todo-checkbox-${todo.id}`}
          />
        </li>
      ))}
    </ul>
  )
})


TodosList.displayName = "TodosList"

import { FC } from 'react'
import { observer } from 'mobx-react'
import { container } from 'tsyringe'
import { TodosStore } from 'modules/todos/data-access/stores/TodosStore'

export const DisplayTotalCompletedTodos: FC = observer(() => {
  const { totalCompletedNum } = container.resolve(TodosStore)

  return (
    <p>Completed Todos: {totalCompletedNum}</p>
  )
})

DisplayTotalCompletedTodos.displayName = "DisplayTotalCompletedTodos"

import { useCallback } from 'react'
import { container, InjectionToken } from 'tsyringe'
import { IAction } from 'shared/arch/interfaces/IAction'

export const useAction = <Param>(action: InjectionToken<IAction<Param>>) => {
  const actionInstance = container.resolve(action)

  const handleExecute = useCallback(
    async (param: Param) => {
      await actionInstance.execute(param)
    },
    [actionInstance]
  )

  return handleExecute
}

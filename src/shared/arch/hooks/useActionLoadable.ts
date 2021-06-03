import { useCallback, useState } from 'react'
import { InjectionToken } from 'tsyringe'
import { IAction } from 'shared/arch/interfaces/IAction'
import { useAction } from 'shared/arch/hooks/useAction'

export const useActionLoadable = <Param>(action: InjectionToken<IAction<Param>>) => {
  const [isLoading, setLoading] = useState(false)
  const execute = useAction(action)

  const handleExecute = useCallback(
    async (param: Param) => {
      try {
        setLoading(true)
        await execute(param)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        throw error
      }
    },
    [execute]
  )

  return [handleExecute, isLoading] as const
}

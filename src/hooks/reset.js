import { useState } from 'react'

export const useFieldReset = (type) => {
  const [value, setValue] = useState('')

  const onClick = (event) => {
    setValue("")
  }

  return {
    type,
    value,
    onClick

  }
}

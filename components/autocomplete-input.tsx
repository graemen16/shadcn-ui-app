
import React from "react"

import { Input } from "@/components/ui/input"

export interface AutoCompleteInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  autoCompleteList: string[]
}

const AutoCompleteInput = React.forwardRef<
  HTMLInputElement,
  AutoCompleteInputProps
>(({ autoCompleteList, ...props }, ref) => {
  return (
    <div>
      <Input list="refList" {...props} />
      <datalist id="refList">
        {autoCompleteList.map((item) => (
          <option key={item} value={item}></option>
        ))}
      </datalist>
    </div>
  )
})
export { AutoCompleteInput }

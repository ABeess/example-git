import { ReactNode } from 'react'
import { UseFormReturn } from 'react-hook-form'

export interface PropsType {
  children?: ReactNode
}

export interface LayoutType extends PropsType {
  vairant?: string
}

export interface RHFType {
  name: string
  [x: string]: any
}

interface MetaData {
  key: string
  value: any
}

export class IProvider {
  children: ReactNode
  method: any
  onSubmit: (data: any) => void
}

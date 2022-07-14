import React from 'react'
import { FormProvider as Form } from 'react-hook-form'
import type { IProvider, PropsType } from '../../types/propType'

const FormProvider = ({ children, method, onSubmit }: IProvider) => {
  return (
    <Form {...method}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}
export default FormProvider

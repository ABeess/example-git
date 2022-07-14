import { RHFType } from '../../types/propType'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

const RHFTextField = ({ name, ...other }: RHFType) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  )
}

export default RHFTextField

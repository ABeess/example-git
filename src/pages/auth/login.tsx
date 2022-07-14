import React, { ReactElement } from 'react'
import Layout from '../../layouts'
import { NextPageWithLayout } from '../_app'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider from '../../components/hookform/FormProvider'
import { Button, Stack } from '@mui/material'
import { Container } from '@mui/system'
import RHFTextField from '../../components/hookform/RHFTextField'
import { LoadingButton } from '@mui/lab'
import axiosInstance from '../../utils/axios'
import { AxiosResponse } from 'axios'

const Login: NextPageWithLayout = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const defaultValues = {
    email: '',
    password: '',
  }

  const method = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = method

  const onSubmit = async (data: any) => {
    try {
      const res: AxiosResponse = await axiosInstance({
        method: 'POST',
        url: '/auth/login',
        data,
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormProvider method={method} onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="xs" sx={{ mt: 15 }}>
        <Stack spacing={2}>
          <RHFTextField name="email" label="Email" />

          <RHFTextField name="password" label="Password" type="password" />
          <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
            Login
          </LoadingButton>
        </Stack>
      </Container>
    </FormProvider>
  )
}

Login.getLayout = (page: ReactElement) => <Layout vairant="only">{page}</Layout>

export default Login

import React from 'react'

import FormCreateAccount from './components/FormCreateAccount'

import { useForm, FormProvider } from 'react-hook-form'

const loadData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return JSON.parse(localStorage.getItem('form-state'))
}

export const App = () => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {}
  })
  const { handleSubmit, reset } = methods

  React.useEffect(() => {
    loadData().then((data) => reset(data))
  }, [reset])

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log('VALID', data)
      localStorage.setItem('form-state', JSON.stringify(data))
    },
    (errors, e) => {
      console.log('ERROR', errors)
    }
  )

  return (
    <div>
      <h1>
        Create account
      </h1>
      <FormProvider
        {...methods}
      >
        <FormCreateAccount
          onSubmit={onSubmit}
        />
      </FormProvider>
    </div>
  )
}

export default App

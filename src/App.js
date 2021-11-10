import React from 'react'

import FormCreateAccount from './components/FormCreateAccount'

import { useForm, FormProvider } from 'react-hook-form'

export const App = () => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: JSON.parse(localStorage.getItem('form-state')) || {}
  })
  const { handleSubmit } = methods

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

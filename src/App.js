import React from 'react'

import { useForm } from 'react-hook-form'
import isEmail from 'validator/lib/isEmail'

export const App = () => {
  console.log('RENDER')

  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log('VALID', data)
    },
    (errors, e) => {
      console.log('ERROR', errors)
    }
  )

  const password = watch('password')

  const registerEmail = register('email', {
    required: true,
    validate: (email) => isEmail(email)
  })
  const registerPassword = register('password', {
    required: true,
    minLength: 6
  })
  const registerRepeatPassword = register('repeatPassword', {
    required: true,
    minLength: 6,
    validate: (repeatPassword) => repeatPassword === password
  })

  return (
    <div>
      <h1>
        Create account
      </h1>
      <form
        onSubmit={onSubmit}
      >
        <input
          placeholder={'E-mail'}
          {...registerEmail}
        />
        <br />
        <input
          placeholder={'Password'}
          {...registerPassword}
        />
        <br />
        <input
          placeholder={'Repeat rssword'}
          {...registerRepeatPassword}
        />
        <br />
        <button>
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default App

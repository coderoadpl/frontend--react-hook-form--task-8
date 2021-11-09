import React from 'react'

import { useForm } from 'react-hook-form'

export const App = () => {
  console.log('RENDER')

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = handleSubmit(
    (data, e) => {
      console.log('VALID', data)
    },
    (errors, e) => {
      console.log('ERROR', errors)
    }
  )

  const registerEmail = register('email', {
    required: true,
    pattern: /\S+@\S+\.\S+/
  })
  const registerPassword = register('password', {
    required: true,
    minLength: 6
  })
  const registerRepeatPassword = register('repeatPassword', {
    required: true,
    minLength: 6
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

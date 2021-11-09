import React from 'react'

import { useForm } from 'react-hook-form'

export const App = () => {
  console.log('RENDER')

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = handleSubmit((data, e) => {
    console.log(data)
  })

  const registerEmail = register('email')
  const registerPassword = register('password')
  const registerRepeatPassword = register('repeatPassword')

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

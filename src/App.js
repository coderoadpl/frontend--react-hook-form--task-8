import React from 'react'

import { useForm } from 'react-hook-form'
import isEmail from 'validator/lib/isEmail'

export const App = () => {
  console.log('RENDER')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

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
    required: {
      value: true,
      message: 'email is required'
    },
    validate: (email) => isEmail(email) || 'must be valid email address'
  })
  const registerPassword = register('password', {
    required: {
      value: true,
      message: 'password is required'
    },
    minLength: {
      value: 6,
      message: 'you must type at least 6 characters'
    }
  })
  const registerRepeatPassword = register('repeatPassword', {
    required: {
      value: true,
      message: 'repeatPassword is required'
    },
    minLength: {
      value: 6,
      message: 'you must type at least 6 characters'
    },
    validate: (repeatPassword) => repeatPassword === password || 'passwords must match'
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
        {
          errors.email && <p>{errors.email.message}</p>
        }
        <br />
        <input
          placeholder={'Password'}
          {...registerPassword}
        />
        {
          errors.password && <p>{errors.password.message}</p>
        }
        <br />
        <input
          placeholder={'Repeat password'}
          {...registerRepeatPassword}
        />
        {
          errors.repeatPassword && <p>{errors.repeatPassword.message}</p>
        }
        <br />
        <button>
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default App

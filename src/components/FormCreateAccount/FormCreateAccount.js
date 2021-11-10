import React from 'react'
import PropTypes from 'prop-types'

import isEmail from 'validator/lib/isEmail'

import { useFormContext } from 'react-hook-form'

import classes from './styles.module.css'

export const FormCreateAccount = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()

  console.log('RENDER')

  const [password, repeatPasswordCheck] = watch(['password', 'repeatPasswordCheck'])

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
  const registerRepeatPasswordCheck = register('repeatPasswordCheck')
  const registerRepeatPassword = repeatPasswordCheck && register('repeatPassword', {
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
    <form
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
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
      <label>
        Do you want to repeat password?
        <input
          type={'checkbox'}
          {...registerRepeatPasswordCheck}
        />
      </label>
      <br />
      {
        repeatPasswordCheck ?
          <>
            <input
              placeholder={'Repeat password'}
              {...registerRepeatPassword}
            />
            {
              errors.repeatPassword && <p>{errors.repeatPassword.message}</p>
            }
            <br />
          </>
          :
          null
      }
      <button>
        SUBMIT
      </button>
    </form>
  )
}

FormCreateAccount.propTypes = {
  className: PropTypes.string
}

export default FormCreateAccount

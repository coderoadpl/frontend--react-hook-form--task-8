import React from 'react'

export const App = () => {
  console.log('RENDER')

  return (
    <div>
      <h1>
        Create account
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(e)

          const form = e.target
          const formData = new FormData(form)

          console.log(formData.get('email'))
          console.log(formData.get('password'))
          console.log(formData.get('repeatPassword'))
        }}
      >
        <input
          placeholder={'E-mail'}
          name={'email'}
        />
        <br />
        <input
          placeholder={'Password'}
          name={'password'}
        />
        <br />
        <input
          placeholder={'Repeat rssword'}
          name={'repeatPassword'}
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

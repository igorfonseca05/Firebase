import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { db, addDoc, collection } from './firebase/db'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })


  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function addData(user) {

    try {
      await addDoc(collection(db, 'testes'), {
        ...user
      })

      console.log('usuário adicionado com sucesso')


    } catch (error) {
      console.log(error)
    }
  }

  function handleForm(e) {
    e.preventDefault()

    addData(user)
  }

  return (
    <>
      <div>
        <h1>Testes com firebase</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="name">
            <span>Name: </span>
            <input
              type="text"
              name='name'
              id='name'
              value={user.name}
              onChange={handleChange}
            />
          </label> <br />

          <label htmlFor="email">
            <span>Email: </span>
            <input
              type="text"
              name='email'
              id='Email'
              // value={email}
              onChange={handleChange} />
          </label><br />

          <label htmlFor="password">
            <span>Password: </span>
            <input
              type="text"
              name='password'
              id='password'
              // value={password}
              onChange={handleChange} />
          </label><br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App

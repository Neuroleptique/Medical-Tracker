import React from 'react'

function Login() {

  return (
    <div>
      <h1>Login</h1>

    <section>
    <form action="/login" method="POST">
        <div>
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
        </div>
        <div>
          <label for="exampleInputPassword1">Password</label>
          <input type="password" id="exampleInputPassword1" name="password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    </div>
  )
}

export default Login
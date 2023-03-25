import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors }
  } = useForm()

  // handle form submit
  const onSubmit = (data) => {}

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])
  return (
    <>
      <section className="flex-col justify-center items-center">
        <h1 className="text-lg font-bold m-4 mx-28">Login Here Now</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            className="input input-bordered w-full max-w-xs m-2"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          <input
            className="input input-bordered w-full max-w-xs m-2"
            type="password"
            placeholder="Password"
            {...register("password", { min: 5 })}
          />
          <input className="btn w-full max-w-xs m-2" type="submit" />
        </form>
      </section>
    </>
  )
}

export default LoginForm

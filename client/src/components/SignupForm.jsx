import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { signupData } from "../features/appts/apptsSlice"

const SignupForm = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors }
  } = useForm()

  // handle form submit
  const onSubmit = (data) => {
    dispatch(signupData(data))
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <section className="mx-20">
      <h1 className="text-lg font-bold px-20 m-2">Register Here now</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <input
          className="input input-bordered w-full max-w-xs m-2 "
          type="text"
          placeholder="User Name"
          {...register("userName", { required: true, maxLength: 80 })}
        />

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
  )
}

export default SignupForm

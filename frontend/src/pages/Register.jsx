import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import Logo from "../components/Logo"
import registerBg from "../assets/registerBg.jpg"
import { yupResolver } from "@hookform/resolvers/yup"
import RegisterSchema from "../valadationSchemas/RegisterSchema"
import { useState } from "react"
import SubmitAction from "../actions/SubmitAction.js"



function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterSchema)
    });

    async function onSubmit(data) {
        await SubmitAction(data)
    }


    function togglePasswordType(password) {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <>
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <Logo width="w-10" />
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Not a member?{' '}
                                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    login here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
                                    <div className="flex justify-between">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                                First Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="firstName"
                                                    {...register("firstName")}
                                                    type="text"
                                                    placeholder="Sarad"

                                                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="lastName"
                                                    {...register("lastName")}
                                                    type="text"
                                                    placeholder="Poudel"

                                                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                {...register("email")}
                                                type="email"
                                                placeholder="yourname@mail.com"
                                                className="block w-full rounded-md border-0 py-1.5  px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                                            Mobile
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="tel"
                                                {...register("tel")}
                                                type="tel"
                                                placeholder="1234567890"
                                                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {errors.tel && <span className="text-red-500 text-sm">{errors.tel.message}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2 flex">
                                            <input
                                                id="password"
                                                {...register("password")}
                                                type={passwordVisible ? "text" : "password"}


                                                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <button type="button" onClick={togglePasswordType} className="ml-2 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                                👁️
                                            </button>
                                        </div>
                                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="verifyPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Verify Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="verifyPassword"
                                                {...register("verifyPassword")}
                                                type="VerifyPassword"


                                                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {errors.verifyPassword && <span className="text-red-500 text-sm">{errors.verifyPassword.message}</span>}
                                    </div>



                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={registerBg}
                        alt=""
                    />
                </div>
            </div>
        </>


    )
}
export default Register
import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import loginBg from "../assets/loginBg.jpg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import LoginAction from "../actions/LoginAction.js"
import LoginSchema from "../valadationSchemas/LoginSchema.jsx"


function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    async function onSubmit(data) {
        console.log('Sending data:', data);
        await LoginAction(data)
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
                                <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Register here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">



                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                {...register("email")}
                                                type="email"

                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                {...register("password")}
                                                type="password"

                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm leading-6">
                                            <Link to="/reset-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot your password?
                                            </Link>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
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
                        src={loginBg}
                        alt=""
                    />
                </div>
            </div>
        </>


    )
}
export default Login
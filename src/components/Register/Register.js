import { useState } from "react";
import { AUTH_TABS } from "../../helpers/constants";
import classes from "./Register.module.css"
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import {registerThunk} from "../../redux/thunks/registerThunk"

const [LOGIN] = AUTH_TABS

const Register = () => {
    const dispatch = useDispatch()
    const [isRegisterSucceed, setIsRegisterSucceed] = useState(false);
   // const {setAuthRoute} = useAuthTab()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {
        if(data.password === data.rePassword){
            const user = {
                id: data.login,
                name: data.login,
                password: data.password
            }
            dispatch(registerThunk({user}))
            // axios.post(`${baseUrl}/users`,user)
            //     .then(res => {
            //         setIsRegisterSucceed(true)
            //         dispatch(addUser(data.login))
            //         // setTimeout(() => {
            //         //     setAuthRoute(LOGIN)
            //         // },1000)
            //     })
        }else{
            console.log("Passwords are not the same");
        }
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    LOGIN
                    <input {...register('login', {
                        required: true,
                        minLength: 4})} type="text"/>
                    <div>{errors?.login?.type}</div>
                </label>

                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password', {
                        required: true,
                        minLength: 4})} type="password"/>
                    <div>{errors?.password?.type}</div>
                </label>

                <label className={classes.label}>
                    REPEAT PASSWORD
                    <input {...register('rePassword', {
                        required: true,
                        minLength: 4})} type="password"/>
                    <div>{errors?.rePassword?.type}</div>
                </label>
                <button type="submit">Register</button>
                {isRegisterSucceed && <p>Registration succeed!</p>}

            </form>
            {/* <button
                onClick={() => {setAuthRoute(LOGIN)}}>
                go to login
            </button> */}
        </div>
    )
}


export default Register
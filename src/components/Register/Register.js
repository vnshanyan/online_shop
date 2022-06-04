/* eslint-disable */

import { useState } from "react";
import classes from "./Register.module.css"
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import {registerThunk} from "../../redux/thunks/registerThunk"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isRegisterSucceed, setIsRegisterSucceed] = useState(null);
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {
        if(data.password === data.rePassword){
            // Create User in DB_START
            const userId = uuidv4()
            const user = {
                id: userId,
                name: data.login,
                password: data.password
            }
            dispatch(registerThunk({user}))
            // Create User in DB_END
            navigate('/login')
        }else{
            setIsRegisterSucceed(false)
        }
    }

    return (
        <section className={classes.formContainer}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <h3>CREATE ACCOUNT</h3>
                {/* <label className={classes.label}>
                    Login */}
                    <input {...register('login', {
                        required: true,
                        minLength: 4})} type="text" placeholder="Login" className={classes.formField}/>
                    <div>{errors?.login?.type}</div>
                {/* </label> */}

                {/* <label className={classes.label}>
                    Password */}
                    <input {...register('password', {
                        required: true,
                        minLength: 4})} type="password" placeholder="Password" className={classes.formField}/>
                    <div>{errors?.password?.type}</div>
                {/* </label> */}

                {/* <label className={classes.label}>
                    Repeat Password */}
                    <input {...register('rePassword', {
                        required: true,
                        minLength: 4})} type="password" placeholder="Re-enter password" className={classes.formField}/>
                    <div>{errors?.rePassword?.type}</div>
                {/* </label> */}
                <button type="submit" className={classes.formButton}>Register</button>
                {isRegisterSucceed == false && <p>Passwords are not the same!</p>}
                {isRegisterSucceed && <p>Registration succeed!</p>}

            </form>
        </section>
    )
}


export default Register
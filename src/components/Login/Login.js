import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import classes from "./Login.module.css"
import axios from "axios"
import {baseUrl} from "../../api/api"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/loginSlice"

const Login = () => {
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = assgnData => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(item => item.name === assgnData.login && item.password === assgnData.password)
                if(user){
                    if(assgnData.save){
                        localStorage.setItem('user', assgnData.login)
                    } else {
                        sessionStorage.setItem('user', assgnData.login)
                    }
                    dispatch(setUser(assgnData.login))
                    navigate('../homePage')
                }else{
                    setIsLoginFailed(true)
                }
            })
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <h3>SIGN IN</h3>
                {/* <label className={classes.label}>
                    Login */}
                    <input {...register('login', {required: true})} type="text" placeholder="Login"/>
                    <div>{errors?.login?.type}</div>
                {/* </label> */}

                {/* <label className={classes.label}>
                    Password */}
                    <input {...register('password', {required: true})} type="password" placeholder="Password"/>
                    <div>{errors?.password?.type}</div>
                {/* </label> */}

                <label>
                    <input type="checkbox" {...register('save')}/>
                    Remember me?
                </label>
                <button type="submit">Log in</button>
            </form>
            {(isLoginFailed || (errors.login || errors.password)) && <span>User is not found!</span>}
        </div>
    )
}

export default Login
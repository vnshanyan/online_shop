import { AUTH_TABS } from "../../helpers/constants"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import classes from "./Login.module.css"
import axios from "axios"
import {baseUrl} from "../../api/api"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/loginSlice"

const [, REGISTRATION] = AUTH_TABS

const Login = () => {
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    //const {setAuthRoute} = useAuthTab()
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(item => item.name === data.login && item.password === data.password)
                if(user){
                    if(data.save){
                        localStorage.setItem('user', data.login)
                    } else {
                        sessionStorage.setItem('user', data.login)
                    }
                    dispatch(setUser(data.login))
                    navigate('../homePage')
                }else{
                    setIsLoginFailed(true)
                    console.log("User is not found!");
                }
            })
    }
    
    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    Login
                    <input {...register('login', {required: true})} type="text"/>
                    <div>{errors?.login?.type}</div>
                </label>

                <label className={classes.label}>
                    Password
                    <input {...register('password', {required: true})} type="password"/>
                    <div>{errors?.password?.type}</div>
                </label>

                <label>
                    <input type="checkbox" {...register('save')}/>
                    Remember me?
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}


export default Login
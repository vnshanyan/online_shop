import { AUTH_TABS } from "../../helpers/constants"
import Login from "../Login/Login"
import Register from "../Register/Register"
import { useMemo } from "react"


const [LOGIN, REGISTRATION] = AUTH_TABS

const authComponent = {
    [LOGIN]: <Login/>,
    [REGISTRATION]: <Register/>
}


const Auth = () => {
    const {authRoute} = useAuthTab()

    const MainComponent = useMemo(() => authComponent[authRoute], [authRoute])
    return (
        <>
            {MainComponent}
        </>
    )
}

export default Auth
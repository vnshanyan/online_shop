import { createContext, useContext, useState } from "react"
import { AUTH_TABS } from "../helpers/constants"

const [LOGIN] = AUTH_TABS
const AuthTabContext = createContext(null)

const AuthTabProvider = ({children}) => {
    const [authRoute, setAuthRoute] = useState(LOGIN)

    return <AuthTabContext.Provider value={{authRoute, setAuthRoute}}>
        {children}
    </AuthTabContext.Provider>
}

export const AuthTab = () => useContext(AuthTabContext)
export default AuthTabProvider
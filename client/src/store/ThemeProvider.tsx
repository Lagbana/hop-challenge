import React, { useReducer } from 'react'
import { ThemeContext, initState } from './Theme.context'
import { themeReducer } from './themeReducer'

const ThemeProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initState)
    return (
        <ThemeContext.Provider value={{ state, dispatch}}>
            { children }
        </ThemeContext.Provider>
    )

}

export { ThemeProvider }
import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
    const account = useSelector((state) => state.account)
    console.log('Account:', account)
    return (
        <div>
            Account Balance: {account}
        </div>
    )
}

export default App

import { useSelector } from "react-redux";
import { selectCurrentUser, selextCurrentToken } from "./authSlice";
import { Link } from "react-router-dom";

import React from 'react'

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selextCurrentToken)
    
    const welcome = user ? `welcome ${user}!` : 'welcome!'
    const tokenAbbr = `${token.slice(0,9)}...`
    const content =(
    <section className="welcome">
        <h1>Welcome</h1>
        <p>Token: {tokenAbbr}</p>
        <p><Link to={'/userslist'}>Go to the users</Link></p>
    </section>
    )

    return content
}

export default Welcome
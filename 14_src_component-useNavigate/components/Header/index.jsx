import React, { } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate();
    const back = () => { navigate(-1) }
    const forward = () => { navigate(1) }

    return (
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={back}>Go Back</button>&nbsp;
            <button onClick={forward}>Go Forward</button>
        </div>
    )

}

export default Header
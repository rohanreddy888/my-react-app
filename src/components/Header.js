import React from 'react';
import Paper from '@material-ui/core/Paper';

function Header() {
    return (
        <Paper style={{padding:"5px",display: "flex"}} square elevation={3}>
            <img style={{width: "80px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
            <h1 className="brand-name" style={{fontSize: "40px",fontWeight:"100"}}>React App </h1>
        </Paper>
    )
}

export default Header;

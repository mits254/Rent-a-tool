import React from 'react';

 import { Redirect } from 'react-router-dom';

 export default function Logout(){
    sessionStorage.removeItem('token');
    return <div>
        <Redirect to={{pathname : '/'}}/>
    </div>
    
 };
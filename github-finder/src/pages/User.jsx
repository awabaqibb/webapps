import {useParams} from 'react-router-dom'
import {useReducer,  useContext, useEffect } from 'react';
import GithubContext from '../context/github/GithubContext';

function User() {
    const {getUser, user} = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
        getUser(params.login)
        //getUser(params.login)
    })

    return ( 
        <div>
            USER
        </div>
     );
}

export default User;
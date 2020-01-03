import React, {useEffect, useState} from 'react';
import { getReposIds } from '../services/GitHubAPI'

export const  RepoContainer = () => {
    
    // hold data after calling an API and prevent blocking the UI rendering; app more interactive
    
    //initiliaze where to store data
    const [reposIds,setReposIds] = useState([]);

    // update the value of repos ID, call the setter ;-)
    useEffect(() => {
        getReposIds().then(repo => setReposIds(repo));
    }, []);
    return(
        <p>{JSON.stringify(reposIds)}</p>
    )


};
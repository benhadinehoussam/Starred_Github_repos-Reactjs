import React, {useEffect, useState} from 'react';
import { getReposIds } from '../services/GitHubAPI';
import { Repository } from '../components/Repository';

export const  RepoContainer = () => {
    
    // hold data after calling an API and prevent blocking the UI rendering; app more interactive
    
    //initiliaze where to store data
    const [reposIds,setReposIds] = useState([]);

    // update the value of repos ID, call the setter ;-)
    useEffect(() => {
        getReposIds().then(data => setReposIds(data));
    }, []);
    // looping over repos
    // console.log(reposIds);

    return (
        <>
        <h1>Github Most Starred Repositories</h1>
        {Object.entries(reposIds).map(lemon => (
        <Repository key={lemon} reposId={lemon}/>
        
    ))}
    </>
    ); 
};
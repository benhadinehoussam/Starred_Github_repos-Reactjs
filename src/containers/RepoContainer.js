import React, {useEffect, useState, memo} from 'react';
import { getReposIds } from '../services/GitHubAPI';
import { Repository } from '../components/Repository';
import { Header } from '../styles/RepoStyle';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const  RepoContainer = memo(function RepoContainer()  {
    const { count } = useInfiniteScroll();

    // hold data after calling an API and prevent blocking the UI rendering; app more interactive
    
    //initiliaze where to store data
    const [reposIds,setReposIds] = useState([]);
    // const test = useInfiniteScroll();

    // update the value of repos ID, call the setter ;-)
    useEffect(() => {
        console.log('count', count);
        getReposIds().then(data => setReposIds(data));
    }, [count]);
    // looping over repos
    // console.log(reposIds);

    return (
        <>
        <Header>Github Most Starred Repositories</Header>
        {Object.entries(reposIds).slice(0,count).map(lemon => (
        <Repository key={lemon} reposId={lemon}/>
        
    ))}
    </>
    ); 
});
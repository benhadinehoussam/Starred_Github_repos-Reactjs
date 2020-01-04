import React, {useState, useEffect}  from 'react';
import { getReposIds } from '../services/GitHubAPI';

export const Repository = ({ reposId }) => {

    useEffect(() => {}, []);
    console.log(getReposIds());
return <p>{JSON.stringify(reposId)}</p>;
    
};
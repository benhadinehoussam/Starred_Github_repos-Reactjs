import axios from 'axios';


export const baseUrl = `https://api.github.com/search/`;
export const reposUrl = `${baseUrl}repositories?q=created:>2017-10-22&sort=stars&order=desc`;

export const getReposIds = async () => {
    // results is a promise need to be resolved
    const results = await axios.get(reposUrl).then(({ data }) => data.items);


    return results;
}
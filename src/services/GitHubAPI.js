import axios from 'axios';


export const baseUrl = `https://api.github.com/search/`;
export const reposUrl = `${baseUrl}repositories?q=created:>2017-10-22&sort=stars&order=desc`;

export const getReposIds = async () => {
    let resp = {};

    // results is a promise need to be resolved
    const results = await axios.get(reposUrl).then(({ data }) => data.items);
    results.forEach(element => {
    // console.log(element);
    resp[element.name] = {};
    resp[element.name]["Description"] = element.description;
    resp[element.name]["Avatar"] = element.owner.avatar_url;
    resp[element.name]["Stars"] = element.stargazers_count;
    resp[element.name]["Issues"] = element.open_issues_count;
    resp[element.name]["Time Interval"] = element.updated_at;





    });

    return resp;
}
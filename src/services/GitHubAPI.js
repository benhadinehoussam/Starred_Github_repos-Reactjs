import axios from 'axios';


export const baseUrl = `https://api.github.com/search/`;
export const reposUrl = `${baseUrl}repositories?q=created:>2017-10-22&sort=stars&order=desc`;

export const getReposIds = async () => {
    
    let resp = {};
    // results is a promise need to be resolved
    const results = await axios.get(reposUrl).then(({ data }) => data.items);
    results.forEach(element => {
    // console.log(element);
        
    resp[element.id] =   {
        name: element.name,
        description: element.description,
        avatar: element.owner.avatar_url,
        stars: element.stargazers_count,
        issues: element.open_issues_count,
        time_interval: element.updated_at
    };

    // {description: element.description};
    
    // resp["Description"] = element.description;
    // resp["Avatar"] = element.owner.avatar_url;
    // resp["Stars"] = element.stargazers_count;
    // resp["Issues"] = element.open_issues_count;
    // resp["Time Interval"] = element.updated_at;

    


    });
    // Object.entries(resp).map(repo => console.log(repo[1]));
    return resp;
}
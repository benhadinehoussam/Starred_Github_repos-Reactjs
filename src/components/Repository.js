import React  from 'react';
import { FaStar } from 'react-icons/fa';
import { GoIssueOpened } from 'react-icons/go';
import { RepoWrapper, RepoName, StyledImg, Description, DateStyle, Actions, Action } from '../styles/RepoStyle';
import { mapTime } from '../mappers/mapTime'

export const Repository = ({ reposId }) => {

    // console.log(reposId[1].time_interval);
    // console.log(mapTime(new Date(reposId[1].time_interval).getTime()));
    

    return (
        <RepoWrapper data-testid="repository">
        <StyledImg src={reposId[1].avatar}/>
        <RepoName> <Action>Repository Name:</Action> {reposId[1].name}</RepoName>       
        <Description> <Action> Description:</Action> {reposId[1].description}</Description>
        <Actions>
        <Action><FaStar/>{reposId[1].stars} Stars</Action>
        <Action><GoIssueOpened/>{reposId[1].issues} Issues</Action>
        </Actions>
        <DateStyle> <Action>Last Updated:</Action> {mapTime(new Date(reposId[1].time_interval).getTime())} ago</DateStyle>
        
        </RepoWrapper>
    ); 
    
    
    
    
};
import styled from 'styled-components';

export const RepoWrapper = styled.section`

padding-top: 10px;
margin-top: 20px;
border-top: 1px solid #cccccc;
background-color: #008080;
position: relative;

&:first-of-type {
    border-top: 0;
}

&last-of-type {
    margin-bottom: 0px;
    padding-bottom: 0px;
}

`;

export const RepoName = styled.h1`
margin-bottom: 5px;
font-size: 23px;
font-weight: bold;
line-height: 1.8;
color: #333;
`;

export const StyledImg = styled.img`
width: 100%;
  height: 200px;
  border-radius: 50%;
  object-fit: contain;
  align: left;
`;

export const Description = styled.p`
color: #fff;
font-weight: 300;
`;
export const DateStyle = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;

export const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
`;

export const Action = styled.button`
  margin: 0 5px 10px 10px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  
`;

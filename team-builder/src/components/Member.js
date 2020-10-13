import React from 'react';
import Styled from 'styled-components';

const StyledMember = Styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    border: 1px solid red;
    background-color: #e5e5e5;
    padding: 0 3%;
    margin: 2%;
    & .bold{
        font-weight: bolder;
    }
`

export default function Member(props) {
    const { member } = props;

    return (
        <StyledMember>
            <p class='bold'>{member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </StyledMember>
    )
}
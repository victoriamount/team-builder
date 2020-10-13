import React from 'react';
import Member from './Member'
import Styled from 'styled-components'

const StyledRoster = Styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

export default function Roster(props) {
    const { teamList } = props


    return (
        <div className='team-roster'>
            <h3>Team Roster:</h3>
            <StyledRoster>
                {teamList.map((member, index) => (
                    <Member member={member} key={index} />
                ))}
            </StyledRoster>
        </div>
    )
}
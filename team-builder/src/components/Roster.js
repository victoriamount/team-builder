import React from 'react';

export default function Roster(props) {
    const { teamList } = props


    return (
        <div className='team-roster'>
            <h3>Team Roster:</h3>
            {teamList.map((member, index) => (
                <p className="team-member" key={index}>{member.name} </p>
            ))}
        </div>
    )
}
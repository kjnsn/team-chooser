import React, { PropTypes } from 'react';

import instinct from './team-instinct-cutout.svg'
import mystic from './team-mystic-cutout1-fixed.png'
import valor from './team-valor-cutout1.svg'

import './team.css'

const image = (team) => {
    switch (team) {
        case 'red':
            return valor
        case 'blue':
            return mystic
        default:
            return instinct
    }
}

const Team = ({ team }) => (
    <div className='team' >
        <img src={image(team)} />
        <p>Refresh the page to select a new team</p>
    </div>
)

Team.propTypes = {
    team: PropTypes.string.isRequired
}

export default Team

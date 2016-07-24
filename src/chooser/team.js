import React, { PropTypes } from 'react';

const Team = ({ team }) => (
    <div>
        <span>{team}</span>
        <p>Refresh the page to select a new team</p>
    </div>
)

Team.propTypes = {
    team: PropTypes.string.isRequired
}

export default Team

import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'

import Team from './team'

const reducer = (state = {team: 'blue'}, action) => {
    switch (action.type) {
        case 'SUCCESS':
            state.team = (action.team || state.team);
            return state;
        default:
            return state;
    }
}

let store = createStore(reducer)

// This function actually chooses the team.  Run when the code is loaded,
// and only needs to be called once.
let teamGenerator = () => {
    let teams = ['red', 'blue', 'yellow']
    let choice = teams[((Math.random()*1000) | 0) % teams.length]
    store.dispatch({
        type: 'SUCCESS',
        team: choice
    })
}

teamGenerator()

const mapStateToProps = (state) => {
    return {
        team: state.team
    }
}

const VisibleTeam = connect(
    mapStateToProps
)(Team)

const Chooser = () => (
    <Provider store={store}>
        <VisibleTeam />
    </Provider>
)

export default Chooser
import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux'

import { playMusic } from '../modules/music'

import Instructions from './components/instructions'
import ComingSoon from './components/ComingSoon'

const App = ({ playMusic }) => {
    return (
        <div>
            <Instructions />
            <hr />
            <ComingSoon />
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    playMusic,
}, dispatch)

export default compose(
    connect(null, mapDispatchToProps)
)(App)
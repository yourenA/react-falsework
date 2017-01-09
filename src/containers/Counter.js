import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Counter from './../components/counter'
import * as countActions from './../actions/counter'
function mapStateToProps(state){
    return {
        counter:state.counter
    };
}
function mapDispatchToProps(dispath){
    return bindActionCreators(countActions,dispath);
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);


import React, { Component } from 'react';
import { connect } from 'dva';
import { newReferenceError } from '@/utils/errorUtils';

@connect()

export default class ErrorDemo extends Component{
    newURIError = () => {
        throw new URIError('Hello');
    }

    componentDidUpdate = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'error/effectsError'
        })
    }

    render() {
        return (<div>没有错误</div>)
    }
}
import React, { Component } from 'react';
import { newRangeError, newURIError } from '@/utils/errorUtils';

export default class ErrorDemo extends Component{
    newURIError = () => {
        throw new URIError('Hello');
    }

    componentDidMount = () => {
        newURIError();
    }

    render() {
        return (<div>没有错误</div>)
    }
}
import React, { Component } from 'react';
import { newRangeError, newURIError } from '@/utils/errorUtils';

export default class ErrorDemo extends Component{

    constructor(props: any) {
        super(props);
        this.state = {};
        newRangeError();
    }
    
    render() {
        return (<div>没有错误</div>)
    }
}
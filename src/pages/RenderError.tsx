import React, { PureComponent } from 'react';
import { newTypeError } from '@/utils/errorUtils';

export default class ErrorDemo extends PureComponent{
    render() {
        newTypeError();
        return (<div>没有错误</div>)
    }
}
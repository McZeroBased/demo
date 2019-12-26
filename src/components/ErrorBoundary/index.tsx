import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  componentDidMount() {
    window.onerror = (e) => {
      console.log(e);
    }
  }

  componentDidCatch(error:any, info:any) {
    console.log(error, info)
    // this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>系统异常，请稍后再试</div>;
    }
    return children;
  }
}

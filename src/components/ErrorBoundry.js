import React, { Component } from 'react';

class ErrorBoundary extends Component {
      constructor(props) {
        super(props);
        this.state = {
          hasError: false
        }
      }

      componentDidCatch(error, info) {
        this.setState=({ hasError: true})
      }

      render() {
        if (this.state.hasError) {
          return <h1>an error has occured</h1>
        }
        return this.state.children
      }
}
export default ErrorBoundary;
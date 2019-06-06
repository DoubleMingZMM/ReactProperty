import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-undef
    console.error(error, info);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: true };
  }

  render() {
    if (this.state.error) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
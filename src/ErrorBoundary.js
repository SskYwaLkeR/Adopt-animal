import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("error boundary caught", error, info); //eslint-disable-line
  }

  //404 redirect
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    //order matters(for if statements) for 404 redirect comp
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          Oops!! there was an error <Link to="/">Click here</Link> to go back to
          home page
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

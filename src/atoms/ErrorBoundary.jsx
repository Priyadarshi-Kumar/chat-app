import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state to show fallback UI on error
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details if needed (e.g., send to a logging service)
        this.setState({ error, errorInfo });
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return (
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h1>Something went wrong.</h1>
                    <p>Please try refreshing the page.</p>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            );
        }

        // Render children if no error
        return this.props.children;
    }
}

export default ErrorBoundary;

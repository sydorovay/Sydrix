// src/components/ErrorBoundary/ErrorBoundary.jsx
import React from 'react';
import styles from './ErrorBoundary.module.css';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    const { onError } = this.props;
    // Виклик зовнішнього логгера, якщо передано
    if (onError) onError(error, info);
    console.error('ErrorBoundary caught an error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback } = this.props;

    if (hasError) {
      return (
        <div className={styles.container} role="alert">
          {fallback ? (
            fallback({ error, reset: this.handleReset })
          ) : (
            <>
              <h1 className={styles.title}>Щось пішло не так 😢</h1>
              <pre className={styles.message}>{error.toString()}</pre>
              <button className={styles.button} onClick={this.handleReset}>
                Спробувати ще раз
              </button>
            </>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}


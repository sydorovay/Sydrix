// src/components/ErrorBoundary/ErrorBoundary.tsx
import React, { ReactNode, ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  fallback?: (props: { error: Error; reset: () => void }) => ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, info);
    }
    // Локальний логер для розробника
    console.error('ErrorBoundary caught an error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback({ error: this.state.error!, reset: this.handleReset });
      }

      return (
        <div className={styles.container} role="alert">
          <h1 className={styles.title}>Щось пішло не так 😢</h1>
          <pre className={styles.message}>{this.state.error?.toString()}</pre>
          <button className={styles.button} onClick={this.handleReset}>
            Спробувати ще раз
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

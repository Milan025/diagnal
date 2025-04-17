import { Component } from 'react';
import { EmptyState } from '../EmptyState/EmptyState';
import { STRINGS } from '../../constants/strings';

/**
 * Error boundary component to catch and handle errors in its child components
 * @extends {Component}
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Update state when an error is caught
   * @param {Error} error - The error that was caught
   * @returns {Object} The new state
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Log error information
   * @param {Error} error - The error that was caught
   * @param {Object} errorInfo - Additional error information
   */
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <EmptyState
          title={STRINGS.EMPTY_STATE.ERROR.TITLE}
          description={STRINGS.EMPTY_STATE.ERROR.DESCRIPTION}
        />
      );
    }

    return this.props.children;
  }
} 
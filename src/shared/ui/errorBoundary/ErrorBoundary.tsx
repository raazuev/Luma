import React, { Component, ReactNode } from "react";
import { Button } from "../button/Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Ошибка:", error, errorInfo);
  }

  handleError = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Что-то пошло не так</h2>
          <p>Обновите страницу</p>
          <Button onClick={this.handleError}>Перезагрузить</Button>
        </div>
      );
    }
    return this.props.children;
  }
}

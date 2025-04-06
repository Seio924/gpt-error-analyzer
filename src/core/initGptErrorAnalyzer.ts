import { createErrorHandler } from './createErrorHandler';
import { logToConsole } from '../helper/logToConsole';
import { AnalyzerError } from '../error/AnalyzerError';

export function initGptErrorAnalyzer(): void {
  const handleError = createErrorHandler(logToConsole);

  window.onerror = function (message, source, lineno, colno, error) {
    const analyzerError = new AnalyzerError({
      type: 'error',
      message: String(message),
      stack: error?.stack,
      filename: source ?? undefined,
      line: lineno ?? undefined,
      column: colno ?? undefined,
    });
    handleError(analyzerError);
  };

  window.addEventListener('unhandledrejection', function (event) {
    const reason = event.reason;
    const analyzerError = new AnalyzerError({
      type: 'unhandledrejection',
      message: reason?.message ?? String(reason),
      stack: reason?.stack,
    });
    handleError(analyzerError);
  });
}

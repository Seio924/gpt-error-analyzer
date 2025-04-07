import { AnalyzerError } from '../error/AnalyzerError';
import { handleConsoleError } from '../core/handleConsoleError';

type InitGptErrorAnalyzerOptions = {
  gptServerUrl?: string;
};

export function initGptErrorAnalyzer(options?: InitGptErrorAnalyzerOptions): void {
  const gptServerUrl = options?.gptServerUrl;

  window.onerror = function (message, source, lineno, colno, error) {
    const analyzerError = new AnalyzerError({
      type: 'error',
      message: String(message),
      stack: error?.stack,
      filename: source ?? undefined,
      line: lineno ?? undefined,
      column: colno ?? undefined,
    });

    void handleConsoleError(analyzerError, gptServerUrl);
  };

  window.addEventListener('unhandledrejection', function (event) {
    const reason = event.reason;
    const analyzerError = new AnalyzerError({
      type: 'unhandledrejection',
      message: reason?.message ?? String(reason),
      stack: reason?.stack,
    });

    void handleConsoleError(analyzerError, gptServerUrl);
  });
}

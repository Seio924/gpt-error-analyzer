import { AnalyzerError } from '../error/AnalyzerError';
import { formatError } from '../helper/formatError';

export function createErrorHandler(logger: (error: AnalyzerError, lines: string[]) => void) {
  return function handleError(error: AnalyzerError): void {
    const lines = formatError(error);
    logger(error, lines);
  };
}

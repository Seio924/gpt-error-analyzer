import { AnalyzerError } from '../error/AnalyzerError';

export function logToConsole(error: AnalyzerError, lines: string[]): void {
  console.groupCollapsed(
    `%c🧠 GPT Error Analyzer - ${error.type.toUpperCase()}`,
    'color: red; font-weight: bold;'
  );
  lines.forEach(line => console.log(line));
  console.groupEnd();
}

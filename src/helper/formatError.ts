import { AnalyzerError } from '../error/AnalyzerError';

export function formatError(error: AnalyzerError): string[] {
  const lines = [`🕒 발생 시각: ${new Date(error.timestamp).toLocaleString()}`];
  lines.push(`📣 메시지: ${error.message}`);
  if (error.stack) lines.push(`📌 스택:\n${error.stack}`);
  if (error.filename) lines.push(`📄 파일: ${error.filename}`);
  if (error.line !== undefined) lines.push(`📍 위치: ${error.line}:${error.column}`);
  return lines;
}

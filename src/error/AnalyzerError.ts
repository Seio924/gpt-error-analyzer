export class AnalyzerError extends Error {
  readonly type: 'error' | 'unhandledrejection';
  readonly filename?: string;
  readonly line?: number;
  readonly column?: number;
  readonly timestamp: number;

  constructor({
    message,
    type,
    stack,
    filename,
    line,
    column,
    timestamp,
  }: {
    message: string;
    type: 'error' | 'unhandledrejection';
    stack?: string;
    filename?: string;
    line?: number;
    column?: number;
    timestamp?: number;
  }) {
    super(message);
    this.name = 'AnalyzerError';
    this.stack = stack;
    this.type = type;
    this.filename = filename;
    this.line = line;
    this.column = column;
    this.timestamp = timestamp ?? Date.now();
  }
}

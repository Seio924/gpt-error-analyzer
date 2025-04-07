import { AnalyzerError } from '../error/AnalyzerError';

export function reportGptSummary(summary: string, error?: AnalyzerError): void {
  console.group('🧠 GPT 분석 리포트');

  if (error) {
    console.groupCollapsed('📣 원본 메시지');
    console.log(error.message);
    console.groupEnd();

    if (error.stack) {
      const stackLines = error.stack
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('at'));

      if (stackLines.length > 0) {
        console.groupCollapsed('📌 스택 트레이스');
        stackLines.forEach(line => console.log('  ' + line));
        console.groupEnd();
      }
    }
  }

  console.log('\n📝 GPT 요약:\n' + summary);
  console.groupEnd();
}

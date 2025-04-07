import { AnalyzerError } from '../error/AnalyzerError';

export function reportGptSummary(summary: string, error?: AnalyzerError): void {
  console.group('🧠 GPT 분석 리포트');
  if (error) {
    console.log('📣 원본 메시지:', error.message);
    if (error.stack) console.log('📌 스택:', error.stack);
  }
  console.log('\n📝 GPT 요약:\n' + summary);
  console.groupEnd();
}

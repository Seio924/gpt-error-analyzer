import { AnalyzerError } from '../error/AnalyzerError';
import { postGptAnalyze } from '../api/postGptAnalyze';
import { reportGptSummary } from '../helper/reportGptSummary';

export async function handleConsoleError(error: AnalyzerError, gptServerUrl?: string) {
  const payload = {
    message: error.message,
    stack: error.stack,
    timestamp: error.timestamp,
  };

  if (!gptServerUrl) {
    console.log('GPT 분석 서버가 설정되지 않았습니다.');
    return;
  }

  const summary = await postGptAnalyze(payload, gptServerUrl);
  reportGptSummary(summary, error);
}

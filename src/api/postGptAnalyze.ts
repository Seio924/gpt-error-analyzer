import { GPT_ANALYZE_ENDPOINT } from '../constants/api';

interface GptAnalyzePayload {
  message: string;
  stack?: string;
  timestamp?: number;
}

export async function postGptAnalyze(
  payload: GptAnalyzePayload,
  serverUrl: string
): Promise<string> {
  const endpoint = `${serverUrl.replace(/\/$/, '')}${GPT_ANALYZE_ENDPOINT}`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return 'GPT 분석 서버 호출에 실패했습니다.';
  }

  const data = await res.json();
  return data.summary ?? 'GPT 응답이 없습니다.';
}

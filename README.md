# gpt-error-analyzer

콘솔 에러 발생 시 OpenAI GPT를 활용해  
에러의 원인과 해결 방법을 자동 분석해주는 초경량 프론트엔드 유틸 라이브러리입니다.

<br/>

## ✨ 주요 기능

- `window.onerror`, `unhandledrejection` 자동 감지
- 에러 정보를 GPT에게 전송하고 요약 결과 출력
- 스택 트레이스 및 메시지를 콘솔에 트리 형태로 보기 좋게 출력
- 프론트엔드 프로젝트에 간단히 설치해서 사용 가능
- 가볍고 의존성 없는 구조 (20KB 이하 번들 크기)

<br/>

## 🚀 설치 방법

```bash
npm install gpt-error-analyzer
```

<br/>

## 📦 사용 방법

```ts
import { initGptErrorAnalyzer } from 'gpt-error-analyzer';

initGptErrorAnalyzer({
  gptServerUrl: 'https://your-gpt-server-url.com', // 반드시 서버 주소 입력!
});
```

<br/>

## ❗ GPT 서버 구성도 필요합니다

이 라이브러리는 GPT API 키를 안전하게 보호하기 위해
**서버를 통해 GPT 호출을 중계하는 구조**를 사용합니다.

<br/>

## ✅ GPT 분석 서버 실행 방법

1. 아래 레포를 서버에 **clone** 합니다. [실행 전용 GPT 분석 서버](https://github.com/Seio924/gpt-error-analyzer-server-runtime)

```bash
git clone https://github.com/Seio924/gpt-error-analyzer-server-runtime.git
cd gpt-error-analyzer-server-runtime
```

2. OpenAI API 키를 **환경변수로 등록**합니다.

```bash
export OPENAI_API_KEY=sk-xxxx...
```

> 또는 `.bashrc`, `.zshrc`, Railway 환경변수 등에 등록해도 됩니다.

3. (선택) 서버 포트 번호를 환경변수로 설정할 수 있습니다.

```bash
export PORT=5000
```

> 기본값은 4000이며, 지정하지 않으면 `http://localhost:4000`에서 실행됩니다.

4. 의존성 설치 후 서버 실행:

```bash
npm install
npm start
```

<br/>

### ⚙️ 백그라운드 실행 (서버 유지용)

터미널을 닫아도 서버가 계속 실행되도록 하려면 아래 명령어를 사용하세요.

```bash
nohup npm start > output.log 2>&1 &
```

> - `output.log`에 로그가 저장됩니다.
> - 실행 후 터미널을 닫아도 계속 작동합니다.
> - 서버를 중단하려면 `ps aux | grep node`로 프로세스를 확인한 뒤 `kill [PID]` 하시면 됩니다.

<br/>

## 🛠 옵션

| 옵션           | 타입     | 설명                 |
| -------------- | -------- | -------------------- |
| `gptServerUrl` | `string` | GPT 분석용 서버 주소 |

<br/>

## 📝 License

MIT License © 2025 [Seio924](https://github.com/Seio924)

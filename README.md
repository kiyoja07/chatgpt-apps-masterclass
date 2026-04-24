# Docs

https://developers.openai.com/apps-sdk

# ChatGPT Apps Master Class

#2.1 Your First Worker

```bash
npx wrangler@latest login # wrangler로 cloudflare에 로그인
```

```bash
npm create cloudflare@latest # worker 프로젝트 만들기
```

#2.2 Your First MCP Server

```bash
npm i @modelcontextprotocol/sdk zod agents
```

#2.3 Your First ChatGPT App

```bash
npm run deploy
```

#3.3 Recap

# App Development Environment

#4.5 Apps SDK UI

### server 세팅

```bash
npm create cloudflare@latest
```

```bash
npm i @modelcontextprotocol/sdk zod agents @modelcontextprotocol/ext-apps
```

```bash
npm run cf-typegen # 런타임 설정과 코드 타입 정보의 동기화 -> 환경 설정을 바꾼 뒤 실행한다
```

```bash
npx @modelcontextprotocol/inspector # mcp inspector를 실행한다
```

### widgets 세팅

```bash
npm create vite@latest
```

```bash
npm add @ladle/react
```

[Apps SDK UI 문서](https://openai.github.io/apps-sdk-ui/?path=/docs/overview-introduction--docs)

```bash
npm install @openai/apps-sdk-ui
```

# Movie App

#5.7 Dark Mode - Challenge

[themoviedb.org](https://www.themoviedb.org/)

```bash
npx wrangler@latest secret put API_KEY # cloudflare에 API_KEY를 세팅한다
```

# Flashcards App

#6.1 Branch Deployments

```bash
git checkout -b flashcards # 같은 폴더 안에서 branch를 다르게 해서 다른 제품을 cloudflare workers에 deploy한다.
# branch를 변경하여 새로 배포하면 vite.config.ts에서 FULL_URL를 새로 변경한다.
```

```bash
git push origin flashcards # flashcards로 커밋 푸시해서 cloudflare workers에 배포 <-
```

#6.2 Workers KV

```bash
npx wrangler@latest kv namespace create FLASHCARDS_KV # Cloudflare Workers KV 저장소(네임스페이스)를 새로 생성
```

#6.11 Ladle

# Workout App

#7.0 Introduction

```bash
git checkout -b workouts
```

#7.7 openLink

server에 설치

```bash
npm i drizzle-orm && npm i drizzle-kit -D
```

```bash
# server 폴더에서 실행
npx wrangler@latest d1 create workouts_database
npx wrangler@latest d1 migrations apply workouts_database --remote # remote DB에 migration 적용
npx wrangler@latest d1 migrations apply workouts_database # local DB에 migration 적용
```

```bash
npm run cf-typegen
```

```bash
npx @modelcontextprotocol/inspector # MCP Inspector 실행
```

https://developers.cloudflare.com/workers-ai/models/glm-4.7-flash/

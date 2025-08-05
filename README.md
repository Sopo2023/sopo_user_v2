# 소포 (SOPO) - 선배가 후배에게

선배가 후배를 위한 블로그 플랫폼입니다. 대회 모집, 포트폴리오 관리, 멘토링 기능을 제공합니다.

## 🚀 주요 기능

- **선배가 후배에게**: 경험과 조언을 공유하는 블로그 기능
- **대회 모집**: 대회 참가자를 모집하고 관리
- **포트폴리오**: 간편한 포트폴리오 작성 및 관리
- **사용자 인증**: 로그인/회원가입 시스템

## 🛠 기술 스택

- **Frontend**: React 18, TypeScript
- **상태 관리**: React Query, Jotai
- **스타일링**: Styled Components
- **라우팅**: React Router DOM
- **HTTP 클라이언트**: Axios
- **에러 추적**: Sentry

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── auth/           # 인증 관련 컴포넌트
│   ├── common/         # 공통 컴포넌트
│   ├── home/           # 홈 페이지 컴포넌트
│   └── post/           # 게시글 관련 컴포넌트
├── hooks/              # 커스텀 훅
├── queries/            # React Query 훅
├── repositories/       # API 레이어
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
├── constants/          # 상수 정의
├── styles/             # 스타일 관련
└── libs/               # 외부 라이브러리 설정
```

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn start

# 빌드
yarn build
```

### 환경 설정

`.env` 파일을 생성하고 다음 환경변수를 설정하세요:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_SENTRY_DSN=your_sentry_dsn
```

## 📝 코드 컨벤션

### 타입 안전성
- `any` 타입 사용 금지
- 모든 함수와 변수에 명시적 타입 지정
- 인터페이스와 타입 별칭 적극 활용
- `React.FC` 사용 금지 (children 타입 추론 문제)

### 컴포넌트 구조
- 함수형 컴포넌트 사용
- Props 인터페이스 정의
- 명시적 반환 타입 지정

### 상태 관리
- React Query: 서버 상태 관리
- Jotai: 클라이언트 상태 관리
- 커스텀 훅으로 로직 분리

### 에러 처리
- 일관된 에러 바운더리 사용
- 사용자 친화적인 에러 메시지
- 개발 환경에서 상세한 에러 정보 제공

## 🔧 주요 개선사항

### 1. 타입 안전성 강화
- 모든 컴포넌트에 명시적 타입 지정
- API 응답 타입 정의 개선
- 유틸리티 함수 타입 안전성 확보
- `React.FC` 제거로 children 타입 추론 문제 해결

### 2. 코드 구조 개선
- 관심사 분리 (Separation of Concerns)
- 재사용 가능한 컴포넌트 설계
- 일관된 네이밍 컨벤션

### 3. 성능 최적화
- React Query 캐싱 전략 개선
- 불필요한 리렌더링 방지
- 메모이제이션 활용

### 4. 사용자 경험 개선
- 로딩 상태 표시
- 에러 처리 강화
- 접근성 개선

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

# Potion Mixer 게임 개발 보고서

## 1. 개발목표

### 주요 목표
- **직관적인 퍼즐 게임**: 모든 연령대가 쉽게 즐길 수 있는 물약 정렬 퍼즐 게임 개발
- **성능 최적화**: 빠른 로딩과 부드러운 사용자 경험 제공
- **반응형 디자인**: 모든 디바이스에서 최적화된 게임 플레이 환경 구축
- **브랜드 아이덴티티**: "Gpters Wizard & Co." 마법사 테마의 독창적 브랜딩

### 기술적 목표
- TypeScript 기반 타입 안전성 확보
- 모던 React 생태계 활용
- 번들 크기 최적화 (70% 감소 달성)
- 컴포넌트 기반 재사용 가능한 아키텍처

## 2. 주요기능

### 핵심 게임 기능
- **물약 정렬 퍼즐**: 튜브 간 액체 이동을 통한 색상별 분류
- **4단계 난이도**: Easy(4튜브) → Medium(5튜브) → Hard(5튜브) → Extra Hard(5튜브)
- **16색 컬러 시스템**: 다양한 물약 색상으로 시각적 재미 제공
- **실시간 유효성 검사**: 이동 가능한 액체와 튜브 자동 판별

### 사용자 경험 기능
- **사운드 시스템**: 게임 효과음 및 배경음악 지원
- **폭죽 애니메이션**: 게임 완료 시 축하 효과
- **플레이어 시스템**: 개인화된 이름 입력 및 게임 진행
- **비디오 배경**: 마법적인 로그인 경험

## 3. 기술스택

### Frontend Core
- **React 18**: 최신 리액트 훅 기반 컴포넌트 개발
- **TypeScript**: 타입 안전성과 개발 생산성 향상
- **Vite**: 빠른 개발 서버와 최적화된 빌드 시스템

### 스타일링 & UI
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **CSS Grid & Flexbox**: 반응형 레이아웃 구현
- **PostCSS**: CSS 전처리 및 최적화

### 상태 관리 & 데이터
- **Zustand**: 경량 클라이언트 상태 관리
- **Supabase**: 백엔드 서비스 및 데이터베이스
- **Local Storage**: 게임 설정 및 임시 데이터 저장

### 개발 도구
- **ESLint & Prettier**: 코드 품질 및 포맷팅 관리
- **Hot Module Replacement**: 개발 중 실시간 업데이트

## 4. 디자인시스템

### 컬러 팔레트
- **다크 테마**: 주 배경색 dark-800, dark-700, dark-600
- **16색 물약 시스템**: 물약별 고유 색상 (빨강, 파랑, 노랑, 초록 등)
- **네온 효과**: 선택된 튜브 하이라이트 및 호버 효과

### 레이아웃 시스템
- **중앙 정렬**: 모든 게임 요소의 완벽한 중앙 배치
- **그리드 시스템**: CSS Grid 기반 튜브 배열
- **간격 표준화**: 1rem 기본 간격, 균등한 요소 배치

### 애니메이션
- **CSS Transitions**: 부드러운 상태 변화
- **호버 효과**: scale(1.05) 기반 상호작용 피드백
- **폭죽 효과**: 게임 완료 시 파티클 애니메이션

## 5. 사이트구조

### 페이지 구조
```
/
├── Dashboard (대시보드)
│   ├── PlayerNameModal (플레이어 이름 입력)
│   ├── DifficultySelector (난이도 선택)
│   └── GameStats (게임 통계)
├── Game (게임 화면)
│   ├── GameBoard (게임 보드)
│   ├── TubeContainer (튜브 컨테이너)
│   └── GameControls (게임 컨트롤)
└── Settings (설정)
    ├── SoundSettings (사운드 설정)
    └── GameSettings (게임 설정)
```

### 컴포넌트 구조
```
src/
├── components/
│   ├── Tube.tsx (튜브 컴포넌트)
│   ├── FireworksEffect.tsx (폭죽 효과)
│   ├── Button.tsx (공용 버튼)
│   ├── Card.tsx (카드 레이아웃)
│   └── Modal.tsx (모달 공통)
├── pages/
│   ├── Dashboard.tsx
│   ├── Game.tsx
│   └── Settings.tsx
├── hooks/
│   └── useGameStore.ts (게임 상태 관리)
├── utils/
│   ├── gameLogic.ts (게임 로직)
│   └── soundManager.ts (사운드 관리)
└── types/
    └── game.ts (타입 정의)
```

## 6. 게임시스템/기능

### 게임 로직
- **액체 이동 규칙**: 같은 색상만 합칠 수 있음
- **튜브 용량 제한**: 각 튜브당 최대 7개 세그먼트
- **승리 조건**: 모든 색상이 각각의 튜브에 완전히 분리
- **실행 취소**: 이전 이동 되돌리기 기능

### 힌트 시스템
- **지능형 힌트**: AI 알고리즘 기반 최적 이동 경로 제안
- **단계별 힌트**: 첫 번째 힌트는 이동 가능한 튜브만 하이라이트
- **고급 힌트**: 구체적인 소스→대상 튜브 애니메이션 표시
- **힌트 제한**: 난이도별 힌트 사용 횟수 제한 (Easy: 무제한, Hard: 3회)
- **힌트 점수 패널티**: 힌트 사용 시 최종 점수에서 차감
- **힌트 쿨다운**: 연속 사용 방지를 위한 대기 시간 설정

### 난이도 시스템
- **Easy**: 4개 튜브, 3가지 색상, 격자 4x1
- **Medium**: 5개 튜브, 4가지 색상, 격자 5x1  
- **Hard**: 5개 튜브, 5가지 색상, 복잡한 초기 배치
- **Extra Hard**: 5개 튜브, 6가지 색상, 최고 난이도

### 상호작용 시스템
- **튜브 선택**: 클릭으로 소스 튜브 선택
- **액체 이동**: 두 번째 클릭으로 대상 튜브 지정
- **시각적 피드백**: 선택된 튜브 하이라이트
- **애니메이션**: 부드러운 액체 이동 효과

### 대시보드 구성
#### 메인 통계 패널
- **총 게임 수**: 플레이한 게임 총 횟수
- **승리 횟수**: 성공적으로 완료한 게임 수
- **승률 통계**: 난이도별 승률 그래프 표시
- **평균 이동 수**: 게임 완료까지 평균 이동 횟수
- **최고 점수**: 난이도별 개인 최고 기록
- **연속 승리**: 현재 연속 승리 스트릭

#### 진행 상황 추적
- **일일 목표**: 하루 게임 플레이 목표 설정 및 진행률
- **주간 도전**: 특별 미션 (예: "힌트 없이 5게임 연속 클리어")
- **업적 시스템**: 다양한 플레이 스타일에 대한 보상 뱃지
- **레벨 시스템**: 경험치 기반 플레이어 레벨업 시스템

#### 최근 활동
- **최근 게임 기록**: 최근 10게임 결과 및 통계
- **개선 추이**: 시간에 따른 실력 향상 그래프
- **친구 순위**: 소셜 기능 연동 시 친구들과의 비교

### 세팅 구성
#### 게임플레이 설정
- **자동 저장**: 게임 진행 상황 자동 저장 활성화/비활성화
- **이동 확인**: 실수 방지를 위한 이동 전 확인 다이얼로그
- **애니메이션 속도**: 액체 이동 애니메이션 속도 조절 (느림/보통/빠름)
- **힌트 설정**: 힌트 활성화/비활성화, 힌트 지연 시간 설정
- **난이도 잠금**: 순차적 난이도 해제 또는 전체 개방 선택

#### 시각적 설정
- **색상 접근성**: 색맹 사용자를 위한 고대비 색상 모드
- **튜브 스타일**: 클래식/모던/네온 등 다양한 시각적 테마
- **파티클 효과**: 게임 완료 시 폭죽 효과 강도 조절
- **배경 테마**: 마법사 연구실, 우주, 숲 등 다양한 배경 선택
- **UI 크기**: 모바일 최적화를 위한 인터페이스 크기 조절

#### 사운드 설정
- **마스터 볼륨**: 전체 소리 크기 조절
- **효과음 볼륨**: 액체 이동, 버튼 클릭 등 효과음 별도 조절
- **배경음악 볼륨**: 분위기 음악 볼륨 독립 제어
- **진동 설정**: 모바일 기기에서 햅틱 피드백 활성화
- **사운드 팩**: 다양한 테마별 사운드 효과 (마법, SF, 자연 등)

#### 계정 및 데이터
- **클라우드 동기화**: 여러 기기 간 게임 데이터 동기화
- **데이터 내보내기**: 게임 통계 및 진행 상황 백업
- **계정 연동**: Google, Apple ID 등 소셜 로그인 연동
- **개인정보 설정**: 데이터 수집 동의, 분석 참여 여부
- **데이터 초기화**: 모든 진행 상황 및 통계 삭제 옵션

### 고급 게임 기능
#### 시간 제한 모드
- **스피드 런**: 제한 시간 내 최대한 빠른 클리어 도전
- **데일리 챌린지**: 매일 새로운 특별 퍼즐 제공
- **토너먼트 모드**: 주간 경쟁전 및 시즌 랭킹 시스템

#### 사용자 정의 기능
- **커스텀 색상**: 사용자가 직접 물약 색상 조합 설정
- **레벨 에디터**: 사용자가 직접 퍼즐 생성 및 공유
- **테마 워크샵**: 커뮤니티 제작 테마 다운로드 및 적용

#### 소셜 기능
- **친구 초대**: 게임 내 친구 시스템 및 초대 기능
- **리플레이 공유**: 인상적인 솔루션 영상 녹화 및 공유
- **커뮤니티 퍼즐**: 다른 플레이어가 만든 퍼즐 도전
- **길드 시스템**: 팀 기반 도전 과제 및 협력 플레이

### 접근성 기능
#### 장애인 접근성
- **스크린 리더 지원**: 시각 장애인을 위한 음성 안내
- **키보드 내비게이션**: 마우스 없이 키보드만으로 플레이 가능
- **고대비 모드**: 시각적 구분이 어려운 사용자를 위한 명확한 UI
- **큰 텍스트**: 시력이 불편한 사용자를 위한 확대 가능한 텍스트

#### 언어 지원
- **다국어 지원**: 한국어, 영어, 일본어, 중국어 등 주요 언어
- **현지화**: 각 지역별 문화적 특성을 반영한 컨텐츠
- **폰트 최적화**: 각 언어별 최적화된 폰트 적용

### 성능 최적화
#### 메모리 관리
- **점진적 로딩**: 필요한 리소스만 순차적으로 로드
- **캐시 시스템**: 자주 사용되는 데이터의 로컬 캐싱
- **메모리 풀링**: 게임 오브젝트 재사용을 통한 메모리 효율성

#### 렌더링 최적화
- **프레임 레이트 제한**: 배터리 절약을 위한 FPS 제한 옵션
- **품질 설정**: 기기 성능에 따른 자동/수동 품질 조절
- **백그라운드 최적화**: 앱이 백그라운드일 때 리소스 사용량 최소화

## 7. 개발 과정 (Phase)

### Phase 1: 애니메이션 구현 및 제거
**목표**: 사용자 경험 향상을 위한 페이지 전환 효과
- Framer Motion 도입 및 페이지 전환 애니메이션 구현
- 로그인 모달 비디오 배경 추가
- 부드러운 대시보드 전환 효과 적용

**결과**: 성능 이슈로 인한 전체 애니메이션 제거 결정
- 로그인 비디오 배경만 유지
- 번들 크기 323KB → 96KB로 대폭 감소

### Phase 2: 텍스트 최적화
**목표**: 사용자 친화적 텍스트 개선
- 로그인 텍스트 간소화
- "Enter your name to begin your potion mixing journey" → "Enter your name to begin your journey"

### Phase 3: 프로젝트 정리 및 리브랜딩
**목표**: 코드 품질 향상 및 브랜드 정체성 확립
- **파일 정리**: 중복 디렉토리 및 불필요한 파일 삭제
- **의존성 최적화**: framer-motion 제거, 패키지 정리
- **리브랜딩**: "Water-Sort Game" → "Potion Mixer"
- **브랜딩**: "Gpters Wizard & Co." 아이덴티티 적용
- **보안**: .gitignore 최적화, 취약점 해결

### Phase 4: 레이아웃 최적화 (최종)
**목표**: 완벽한 튜브 중앙 정렬 및 간격 통일
- **그리드 시스템 재설계**: CSS Grid 기반 중앙 정렬
- **난이도별 최적화**:
  - Easy: 560px (4튜브 최적 간격)
  - Medium/Hard/Extra Hard: 700px (5튜브 균등 간격)
- **반응형 개선**: 모바일/태블릿 화면 대응
- **justify-items: center** 적용으로 완벽한 중앙 정렬

---

**최종 상태**: ✅ 배포 준비 완료  
**개발 난이도**: Mid  
**핵심 성과**: 70% 번들 크기 감소, 완벽한 UI 정렬, 안정적인 게임 시스템 
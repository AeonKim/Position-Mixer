# 음향 효과 파일 안내

## 📁 파일 위치
이 폴더(`/public/sounds/`)에 게임 음향 효과 파일들을 넣어주세요.

## 🎵 필요한 파일들

### 1. 물 붓는 소리
- **파일명**: `pour-water.mp3`
- **용도**: 튜브 간 물을 부을 때 재생
- **권장 길이**: 0.3~1초
- **권장 볼륨**: 중간 정도 (0.3~0.5)

### 2. 추가 가능한 사운드들 (선택사항)
- `game-complete.mp3`: 레벨 완료 시
- `button-click.mp3`: 버튼 클릭 시  
- `hint-sound.mp3`: 힌트 사용 시
- `error-sound.mp3`: 잘못된 이동 시

## 🔧 사용 방법

1. **mp3 파일 추가**: 위 파일명으로 이 폴더에 복사
2. **자동 인식**: 게임에서 자동으로 파일을 로드
3. **대체 사운드**: 파일이 없으면 Web Audio API로 생성된 소리 사용

## 📝 파일 형식
- **지원 형식**: MP3, WAV, OGG
- **권장 형식**: MP3 (호환성 최고)
- **파일 크기**: 가능한 작게 (100KB 이하 권장)

## 🎚️ 볼륨 조절
게임 내 설정에서 사운드 볼륨 조절 가능합니다.

---
💡 **팁**: 무료 효과음은 다음 사이트에서 다운로드 가능:
- Freesound.org
- Zapsplat.com  
- Adobe Stock Audio 
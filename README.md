# NVM 의 설치 및 이해

- Node Version Manager
- Node.js 버전을 자유롭게 관리
- 각 프로젝트 및 회사마다 Node.js 버전 차이
- Node.js 는 로컬 PC 에서 js 를 실행 및 개발 가능하도록 지원'

## 1. 참조 사이트

- https://jang8584.tistory.com/295
- https://fabric0de.tistory.com/43

## 2. 설치

- https://github.com/coreybutler/nvm-windows/releases

## 3. NVM 사용 명령어

- 버전 확인

```bash
nvm version
nvm -v
```

- node 목록 확인하기

```bash
nvm ls
```

- node 전체 버전 확인하기

```bash
nvm list available
```

- NVM 을 이용해서 특정 버전 Node 설치

```bash
nvm install 18.18.2
```

- NVM 으로 사용 버전 변경

```bash
nvm use 18.18.2
nvm ls
nvm use 20.16.0
```

```bash
nvm uninstall 18.18.2
nvm ls
```

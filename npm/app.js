console.log('Hello World!');
console.log('bye!');

// npm -v  버젼정보 확인

// npm -h 사용가능 명령어 확인
// npm command -h 커맨드 설명서 ㅋㅋㅋㅋ

// npm init  package
// entry point  => 프로젝트 시작점이 어딘지
// keywords => npm 라이브러리에 출시시 검색 키워드

// npm init --yes  => Default값으로 package.json 생성

// npm start => json file -> script -> "start" : "node fileName"
// 파일 실행

// npm run commandName => json file -> script -> "commandName" : "code"

//
//
// version

//  1.       0.        0
// Major   Minor     Patch
//큰 기능  사소한 기능  사소한 버그픽스

// 라이브러리 받아올시 dependencies -> depName: version
// 1.0(all) , 1.0.x(all) , ~1.0.4(this or later)  -> minor 까지 고정
// 1 , 1.x, ^1.0.4    -> major만 고정
// * , x  -> 아무버전

//
//
// npm i packageName -> install the package
// npm i -g package -> globally install the package
// npm i package --save-dev -> 개발할때만 필요한 패키지 설치 데브데펜던시에 저장

// npm uninstall packageName -> uninstall
// alias : un

// npm update -> update
// npm update packageName
// alias -> up

// npm list(ll) -> 설치된 패키지 목록
// npm ll -g -> 컴퓨터에 설치된 패키지 목록
// npm ll --dept=Num -> 깊이 설정 0하면 내가 직접 설치한목록

// npm view packageName -> package 정보

// npm outdated -> 업데이트가 필요한 Package 목록

## redux 연습용 기본 코드

<br />

> ### 소개

- 리덕스의 작동 과정을 살펴보기 위해 구현한 기본적인 리덕스 예제 입니다.
- redux-actions, redux-thunk, redux-saga를 테스트 하기 위해 만들었습니다. 

<br />

> ### 기본 기능

- 기본 상태
```
{
  info: {
    name: 'kane',
    age: 40
  }
} 
```
<br />

> ### 화면 소개
- 각 버튼을 눌렀을 때 입력한 값에 따라 이름, 나이가 바뀝니다.
<img width="453" alt="스크린샷 2022-04-09 오후 5 18 25" src="https://user-images.githubusercontent.com/79782594/162563175-f35b5261-d6a7-4524-b7a4-371b3a10cb22.png">

<br />

> ### 서버
- 비동기 요청으로 데이터를 받아오는 것을 테스트 하기 위한 간단한 서버 입니다.
- 3001번 포트를 사용하며, server 폴더에 있는 app.js를 실행시키면 됩니다.
- 서버가 제공하는 데이터는 다음과 같습니다.
```
'http://localhost:3001', get 요청

{
  message: ok, 
  data: [
    {
        id: 1,
        name: 'Kim',
        score: 80
    },
    {
        id: 2,
        name: 'Lee',
        score: 90
    },
    {
        id: 3,
        name: 'Choi',
        score: 100
    }
  ]
}

```

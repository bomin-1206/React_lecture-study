import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  // let [글제목1] = useState("남자코트 추천");
  // let [글제목2] = useState("강남 우동맛집");
  // let [글제목3] = useState("파이썬독학");
  let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>{글제목1}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* 
      <button onClick={() => {글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬독학'])}}>이름 바꾸기</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] ='여자코트 추천';
        글제목변경(copy);
        }}>글수정</button>
        */}
        <button onClick = {() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
          // 실행 X
          // let arr = [1,2,3];
          // 글제목[0] ='여자코트 추천'; // array를 수정했지 변수에 있던 화살표는 수정안됨
          // 글제목변경(글제목);
          }}>글수정</button>

          <button onClick = {() => {
            let copy=[...글제목];
            copy.sort();
            글제목변경(copy);
          }}>가나다순 정렬</button>

      <div className="list">
        <h4 onClick = {() => { setModal(!modal)}}> {글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>❤️</span>{좋아요}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        modal == true ? <Modal /> : null
      }

    </div>
  );
}

function Modal () {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

// 전역 변수: 색상 hex문자열 리스트 Array


// 그 외 전역 변수들

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //angleMode(DEGREES);
  // rectMode(CENTER);
}

// p5js에서 제공하는 마우스 관련 함수들
function mouseDragged() {
	
}
function mouseClicked() {
	
}

// 실제 그림 그리는 함수
function draw() {
  background(0);
  drawGrid(20);         // 모눈종이표
  showCoordinateNum();  // 마우스 현재 위치 좌표값
	
  // 도형 코드 적기
//R
		push();
		 translate(mouseX, mouseY);
		 myAlphabetR();
		pop();	
}
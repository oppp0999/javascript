const body = document.querySelector("body");

const IMG_NUMBER = 5;
//사진 개수

function randomNumber(){ //랜덤숫자 생성
    return Math.ceil((Math.random()*IMG_NUMBER));
}

function IMGselect(randomNum){ 
    const image = new Image();
    image.src = `/Users/kimheejae/Desktop/life/javascript/program1/randomimg/${randomNum}.jpeg`;
    image.className = 'bgIMG';
    body.prepend(image);
}//랜덤 숫자를 넣고 이미지 경로를 뽑아 body에 추가

function init(){
    const randomNum = randomNumber();
    IMGselect(randomNum);
}

init();
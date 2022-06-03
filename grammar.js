var a = 'hello world'

//1. 변수
// 변수는 var이라는 가변형 변수만 존재한다.
var i;
var x = 123;
var y = "123";
var z = false;
var w = null;
//let -> 가변형 블록 지역 변수, const -> 불변형 블럭 지역 변수
let x = 123;
x = "123";
const y = false;
y = null; //error

//2. 연산자
// +, -, *, /, % 기본 연산, ++, -- 사용 또한 가능
a += 1; //권장
a = a + 1; //쓰지 않기
//추가적으로 문자열을 덧셈기호로 간단히 붙힐 수 있다.
var s = "String1" + "String2";
consle.logs(s); // -> String1String2

//3. 조건문
/*
a==b
a!=b
a==b && a==c
a==b || a==c
a > b
*/
if (a > b) {
    console.log("a is more than b.")
} else if (a == b) {
    console.log("a is the same as b.")
} else {
    console.log("a is less than b.")
}

//4. 함수
//4-1. 함수 선언 방식
//notify가 함수의 이름이고 () 안에는 변수다
function notify(message) {
    console.log('# NOTIFICAION : ' + message);
}
notify('say something'); // -> # NOTIFITAION : say something

//4-2. 함수 선언 방식
//다채롭게 구성을 할 수 있다.
var notify = function (message) {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something'); // -> # NOTIFITAION : say something

//4-3. 반환하는 함수 ex
function add(value1, value2) {
    return value1 + value2;
}

var a = 10;
var b = 20;
console.log(add(a, b)); // -> 30

//5. 배열
//변수의 값이 연속적으로 나열된 형식
var arr = new Array();
var arr =[];
//배열값 삽입
var careers = ["war", "as"];
arr[0] = "qwe";
arr.push("123");
//배열과 관련된 메서드
// arr.length -> 배열의 멤버 변수
// arr.join(", ") -> 배열의 값을 붙여 문자열로 만들어 줌 --> 123, aa, 2
// arr.reverse() -> 배열을 반대로 뒤집는 역할
// arr.sort() -> 알파뱃 순으로 정렬
// 배열1.concat(배열2) -> 두 배열을 합쳐 줌 배열1 -> 배열2 순서로
// 배열.push(""), 배열.pop() -> stack으로 다루어짐
// 배열.shift() -> 맨 앞의 요소를 빼는 기능, 배열.unshift("") -> 맨 앞에 요소를 삽입하는 기능

//6. 오브젝트
//선언
var obj = new Object();
var obj = {};

//변수를 가진 오브젝트
var player = {};
player.hp = 100;

var player = {
    hp: 100
}; // 마지막 ; 표시하기

//메소드를 가진 오브젝트
var player = {
    hp: 100,
    mp: 300,
    hit: function (damage) {
        this.hp -= damage;
        console.log('player hit damage : ' + damage);
        return this.isDie();
    }, //여러 function 생설할 때
    isDie: function () {
        if (this.hp <= 0) {
            console.log('player is die...');
            return true;
        }
        return false;
    }
}; 

//오브젝트 할당
var Player = function(name) {
    var name = name;
    var hp = 100;
    var mp = 300;
    
    return {
        hit: function (damage) {
            hp -= damage;
            console.log(name + ' hit damage : ' + damage);
            return this.isDie();
        },
        isDie: function () {
            if (hp <= 0) {
                console.log(name + ' is die...');
                return true;
            }
            return false;
        }
    }
};

var medic = new Player('medic');

//객체를 여러 변수에 할당받아 사용할 때 같은 기능을 하는 함수가 변수마다 새로 할당 되는 문제 객체끼리 공유하는 함수 -> prototype
var Player = function(name) {
    this.name = name;
    this.hp = 100;
    this.mp = 300;
}

Player.prototype.hit = function (damage) {
    this.hp -= damage;
    console.log(this.name + ' hit damage : ' + damage);
    return this.isDie();
}

Player.prototype.isDie = function () {
    if (this.hp <= 0) {
        console.log(this.name + ' is die...');
        return true;
    }
    return false;
}

//7. 반복문
for (var i=0; i<5; i++) {
    console.log(i);
}

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// for (변수 in 오브젝트 또는 배열)
var arr = [10, 20, 30, 40, 50];
for (var i in arr) {
    console.log(i);
} // -> 인덱스로 할당됨 -> 출력은 0 1 2 3 4

//오브젝트인 경우
var obj = {
    a: 1,
    b: 2,
};

for (var key in obj) {
    console.log(key + ' : ' + obj[key]);
} // key 는 obj의 인덱스가 됨

//for 변수 of 배열
var arr = [10, 20, 30, 40, 50];

for(var i of arr) {
    console.log(i);
} // -> 배열의 값이 i에 할당됨 -> 출력은 10 20 30 40 50

//.forEach 와 .map 출력은 같지만 map은 함수형 프로그래밍으로 새로운 객체를 반환
var arr = [10, 20, 30, 40, 50];

arr.forEach((value, idx) => {
    console.log(idx, value);
});

arr.map((value, idx) => {
    console.log(idx, value);
}); // 0 10, 1 20, 2 30, 3 40, 4 50

//8. 문자열
var welcome = "ONDE Planet is the most peaceful space in the universe";

console.log(welcome.charAt(0));
// charAt(n) : n번째 문자를 출력한다. 결과는 O

console.log(welcome.charCodeAt(0));
// charCodeAt(n) : n번째 문자의 유니코드를 출력한다. 결과는 79

console.log(welcome.indexOf("x"));
// indexOf("?") : ?라는 글자가 있다면 글자의 인덱스를, 없다면 false(-1)을 출력한다. 결과는 -1

console.log(welcome.includes("space"));
// includes("?") : ?라는 글자가 있다면 true(0), 없다면 false(-1)을 출력한다. 결과는 0

console.log(welcome.replace("peaceful", "nasty"));
// replace("a", "b") : a를 b로 교체한다. 결과는 ONDE Planet is the most nasty space in the universe.

console.log(welcome.search("universe"));
// search("?") : ?라는 글자를 검색하여 첫 문자의 시작 지점을 알려준다. 결과는 46

console.log(welcome.slice(0,4));
// slice(n, n') : n~n'-1 까지의 문자를 가져온다. 결과는 ONDE

console.log(welcome.split(" "));
// split("?") : ?라는 문자를 기준으로 문자열을 분리한다. 결과는 ONDE,Planet,is,the,most,peaceful...

console.log(welcome.trim());
// trim() : 앞, 뒤의 공백을 제거하는 역할을 한다. 이 값에서는 앞뒤에 공백이 없으므로 결과가 본래의 문자열과 동일하다.

console.log(welcome.length);
// length : 문자열의 길이를 반환한다. 결과는 55

console.log(welcome.replace(/ /gi, "-"));
// 모든 공백이 -로 바뀐다.

console.log(welcome.slice(-3));
// 맨 뒤에 3글자만 가져온다.

//9. 수학 연산
Math.abs(-3);
// Math.abs(n) : n을 절댓값으로 바꾼다.

Math.ceil(3.1);
// Math.ceil(n) : n값을 올림한다.

Math.floor(3.9);
// Math.floor(n) : n값을 내림한다.

Math.round(3.5);
// Math.round(n) : n값을 반올림한다.

var a = Math.random();
// Math.random() : 난수를 생성한다.

var b = Math.random()*10+10;
// Math.random()*x+y : y~x+y 범위에서 난수가 생성된다.

var c = Math.floor(Math.random() * (max - min)) + min;
// min 부터 max - 1 까지 범위의 난수

//10. 형변환
// Number -> String
var num = 2018;
var str = String(num); // "2018"
var str = num.toString(); // "2018"

// String -> Num
var str = "2018.08";
var mInt = Number(str); // 2018
var mInt = parseInt(str); // 2018
var mFloat = parseFloat(str); // 2018.08

// Object -> String
var user = {
    name: '배진오',
    age: 24,
};
console.log(user); // { name: '배진오', age: 24 }

var strUser = JSON.stringify(user); // 문자열 JSON
console.log(strUser); // "{\"name\":\"배진오\",\"age\":24}"

var strUserToObject = JSON.parse(strUser);
// JSON 형식의 문자열이면 parse를 이용해서 Object로 변환할 수 있음

//11. 전개구문
//확장식
const numbers = [1, 2, 3, 4, 5];
console.log([...numbers, 6, 7, 8, 9, 10]);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//복사
const numbers = [1, 2, 3, 4, 5];
const copyNumbers = [...numbers];

//오브젝트의 객체 키와 값의 전개
const user = {
    name: '배진오',
    age: 24,
};
console.log({
    ...user,
    hobby: '게임'
});
//---> { name: '배진오', age: 24, hobby: '게임' }

const user = {
    name: '배진오',
    age: 24,
};
console.log({
    age: 99,
    ...user,
});
// -->{ name: '배진오', age: 24 } age의 값은 덮어씌어진다.

//12. 함수형 메서드
//함수형 프로그래밍에 대부분 사용되는 map, filter, reduce 함수가 제공된다. 
//이터레이블 객체(배열 등)에서만 사용가능 한 점 참고하자.
const users = [
    {
        name: '배진오',
        age: 24,
        hobby: '게임'
    },
    {
        name: '김아름',
        age: 24,
        hobby: '음악'
    },
    {
        name: '아이유',
        age: 26,
        hobby: '음악'
    },
];

//map -> 단순한 반복문이다. 다만 전달한 함수에 맞게 처리된 개체가 담긴 배열이 반환된다
const newUsers = users.map(function(user) {
    return {
        name: user.name,
        age: user.age
    };
});
console.log(newUsers);
//출력모습 아래
[
  { name: '배진오', age: 24 },
  { name: '김아름', age: 24 },
  { name: '아이유', age: 26 }
]


//filter 반복을 진행하면서 함수의 결과가 true인 개체의 배열을 리턴
const newUsers = users.filter(function(user) {
    return user.hobby == '음악'
});
console.log(newUsers);

//출력결과 아래
[
  { name: '김아름', age: 24, hobby: '음악' },
  { name: '아이유', age: 26, hobby: '음악' }
]

//reduce -> 배열의 개체를 누적으로 퍼리하기 위해 사용
const userTotalAge = users.reduce((acc, user) => acc += user.age, 0);
console.log(userTotalAge / users.length);

// 유저의 나이 평균 출력 -> 24.666666666666668

//이름을 키로 나이를 값으로 사용하는 오브젝트 reduce
const usersObject = users.reduce((acc, user) => {
    return {
        ...acc,
        [user.name]: user.age
    }
}, {})
console.log(usersObject);
// 출력 ---> { '배진오': 24, '김아름': 24, '아이유': 26 }

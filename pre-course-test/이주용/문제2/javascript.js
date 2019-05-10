/*
문제)
아래의 API는 100개의 게시글에 대한 정보를 배열로 받을 수 있는 API입니다.
https://jsonplaceholder.typicode.com/posts

HTTP 통신 라이브러리로 위 API를 호출한 뒤 특정 userId에 해당하는 변수를 다음과 같이 만듭니다.
ex) userId가 1이면 변수 이름은 user1

게시글 정보 중 해당 userId에 해당하는 게시글의 title 정보만 모아 아래와 같이 객체 형태로 저장합니다.
ex) user1 = {
  title1: '',
  title2: '',
  ...
  title10: ''
};
*/



/*
ex) API 예시
[
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  }
  ...
]
*/

/*
ex) 답안 예시
userId가 1인 게시글의 제목을 객체에 모두 저장
var user1 = {
  title1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  title2: "qui est esse",
  ...
}

var user2 = {
  title1: ...,
  title2: ...
}
*/

// TODO: 아래에 답안을 작성해주세요.
var responseText = null;
function getPosts(id) {	
	var http = new XMLHttpRequest();
	http.open("get", "https://jsonplaceholder.typicode.com/posts");
	http.send();
	
	return new Promise(resolve => {
		if(responseText != null) {
			resolve([id, http.responseText]);
		}
		else {
			http.onreadystatechange = function (e) {
			  if (http.readyState === XMLHttpRequest.DONE) {
				if(http.status === 200) {
					responseText = http.responseText;
					resolve([id, http.responseText]);
				} 
			  }
			}
		}
	});
}


function process(value) {
	let jsonValue = JSON.parse(value[1]);
	
	const reducer = (accumulator, currentValue, currentIndex) => {
		accumulator["title" + (currentIndex + 1)] = currentValue.title;
		return accumulator;
	}
	
	var userTitles = jsonValue
		.filter(x => x.userId == value[0])
		.reduce(reducer, {})
	
	return userTitles;
}


Function.prototype.curry = function(one) {
  var origFunc = this;
  var target = origFunc.length;
  var args = [];
  function next(nextOne) {
    args = args.concat(nextOne);
    if (args.length === target) {
      return origFunc.apply(null, args);
    } else {
      return function(nextOne) { return next(nextOne) };
    }
  }
  return next(one);
}

function getTitles(id, titles) {
	switch(id) {
		case 1: userId1 = titles;break;
		case 2: userId2 = titles;break;
		case 3: userId3 = titles;break;
		case 4: userId4 = titles;break;
		case 5: userId5 = titles;break;
		case 6: userId6 = titles;break;
		case 7: userId7 = titles;break;
		case 8: userId8 = titles;break;
		case 9: userId9 = titles;break;
		case 10: userId10 = titles;break;
		
	}
	return userId["userId" + id] = titles;
}
var userId = [];
function main() {	
	
	for(i = 1; i <= 10; i++) {
		let currentId = i;
		userId["userId" + currentId] = getTitles.curry(i);
		getPosts(currentId).then(process).then(function(value) {
			userId1 = userId["userId" + currentId](value);
		});
	}	
}

main();

var userId1;
var userId2;
var userId3;
var userId4;
var userId5;
var userId6;
var userId7;
var userId8;
var userId9;
var userId10;


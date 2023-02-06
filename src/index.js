// 預設src/index.js 是專案entry，裡面所有的js都會被丟到dist/main.js
import './style.css';

const answer = document.getElementById('answer');
const button = document.getElementById('button');
const getAnswer = (text) => {
  if (text === 'Yes') {
    return 'No';
  }
  return 'Yes';
};

button.addEventListener(
  'click',
  () => (answer.innerText = getAnswer(answer.innerText))
);

// test about babel with private variable in class (ES2022)
class privateTest {
  #a = 90;
}
const newPrivate = new privateTest();
console.log('test: ', newPrivate.a);

class publicTest {
  a = 90;
}
const newPublic = new publicTest();
console.log('test 2: ', newPublic.a);

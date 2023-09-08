const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const ansewrs = [
    'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢
const setupQuiz = () => {
    document.getElementById('js-question').textContent =question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
      $button[buttonIndex].textContent =ansewrs[buttonIndex];
      buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
    if (correct === e.target.textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
};
let hanlerIndex= 0;
while(hanlerIndex < buttonLength) {
    $button[hanlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
});
hanlerIndex++;
}


//ボタンをクリックしたら正誤判定
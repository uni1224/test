const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        ansewrs: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },{
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        ansewrs: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィー'
        ],
        correct: 'MOTHER2'
    },{
        question: 'ファイナルファンタジーIVの主人公の名前は？',
        ansewrs: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢
const setupQuiz = () => {
    document.getElementById('js-question').textContent =quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
      $button[buttonIndex].textContent =quiz[quizIndex].ansewrs[buttonIndex];
      buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }
    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればコチラを実行
        setupQuiz();
    } else {
        //問題数がもうなければコチラを実行
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
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
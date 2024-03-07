let timer;
let countdownPeriod = 300; // 예: 5분

function startCountdown() {
    clearInterval(timer);
    timer = setInterval(function() {
        countdownPeriod -= 1;
        const minutes = Math.floor(countdownPeriod / 60);
        const seconds = countdownPeriod % 60;
        document.getElementById('timer').textContent = `남은 시간: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (countdownPeriod <= 0) {
            clearInterval(timer);
            // 시간 만료 시 추가 작업 (예: 경고 메시지 표시)
        }
    }, 1000);
}

// '코드 재전송' 버튼 이벤트
document.querySelector('.btn-outline-secondary').addEventListener('click', function() {
    countdownPeriod = 300; // 타이머 재설정
    startCountdown();
});

startCountdown(); // 모달이 처음 열릴 때 타이머 시작

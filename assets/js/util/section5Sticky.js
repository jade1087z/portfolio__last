function setContainerHeight() {
    var rightElement = document.querySelector('.profile__flex .right');
    var leftElement = document.querySelector('.profile__flex .left');
    if(rightElement && leftElement) {
        if (window.innerWidth < 850) {
            rightElement.style.height = leftElement.offsetHeight + 'px';
            rightElement.style.overflow = "auto";
            
        } else {
            rightElement.style.height = 'auto';  // 추가: window.innerHeight가 850 이상일 때, rightElement의 높이를 auto로 설정
        }
    }
}

document.addEventListener('DOMContentLoaded', setContainerHeight);  // 변경: window.onload 대신 'DOMContentLoaded' 이벤트 리스너 사용
window.addEventListener('resize', setContainerHeight);
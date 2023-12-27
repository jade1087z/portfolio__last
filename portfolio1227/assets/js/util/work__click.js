function toggleDesc(element) {
    // 클릭한 desc__wrap의 hidden__desc와 아이콘을 찾습니다.
    let desc = element.querySelector('.hidden__desc');
    let icon = element.querySelector('.icon__plus');

    // 만약 클릭한 desc__wrap의 hidden__desc가 이미 보이는 상태라면,
    if (desc.classList.contains('visible')) {
        // hidden__desc를 숨기고 아이콘 애니메이션을 제거합니다.
        desc.classList.remove('visible');
        icon.classList.remove('rotate');
    } else {
        // 그렇지 않다면, 모든 hidden__desc를 숨깁니다.
        let allDesc = document.querySelectorAll('.hidden__desc');
        allDesc.forEach(function(desc) {
            desc.classList.remove('visible');
        });

        // 모든 아이콘 애니메이션을 제거합니다.
        let allIcons = document.querySelectorAll('.icon__plus');
        allIcons.forEach(function(icon) {
            icon.classList.remove('rotate');
        });

        // 클릭한 desc__wrap의 hidden__desc만 보이게 합니다.
        desc.classList.add('visible');

        // 클릭한 desc__wrap의 아이콘에 애니메이션을 적용합니다.
        icon.classList.add('rotate');
    }
}
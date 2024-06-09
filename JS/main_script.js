const toggleButton = document.getElementById('toggle');
const stylesheetElement = document.getElementById('stylesheet');

toggleButton.addEventListener('click', function() {
  if (toggleButton.checked) {
    stylesheetElement.href = "./CSS/main_style_dark.css"; // 다크 모드 스타일시트 적용
  } else {
    stylesheetElement.href = "./CSS/main_style.css"; // 기본 스타일시트 적용
  }
});


window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.element');  //element 요소에 animated class 추가
  for (const element of elements) {
    element.classList.add('animated');
  }
  setTimeout(() => {
    for (const element of elements) {
      element.classList.remove('delay-05s');
      element.classList.remove('delay-10s');
      element.classList.remove('delay-15s');
    }
  }, 2000);   //2초뒤 딜레이를 제거하여 토글버튼 사용시 부드럽게 화면 전환
});
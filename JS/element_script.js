const toggleButton = document.getElementById('toggle');
const stylesheetElement = document.getElementById('stylesheet');

toggleButton.addEventListener('click', function() {
  if (toggleButton.checked) {
    stylesheetElement.href = "../CSS/element_style_dark.css"; // 다크 모드 스타일시트 적용
  } else {
    stylesheetElement.href = "../CSS/element_style.css"; // 기본 스타일시트 적용
  }
});

var root = document.getElementById('root');

var span = `
<span class="teste">DESAFIO DE CSS - DESAFIO DE CSS</span>
`;

var rightDiv = `
  <div class="rightDiv">
    <div class="rightDivContent">
      <span>DESAFIO DE CSS - DESAFIO DE CSS</span>
    </div>
  </div>
`;

root.insertAdjacentHTML('beforeend', span);
root.insertAdjacentHTML('beforeend', rightDiv);
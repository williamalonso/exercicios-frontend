var root = document.getElementById('root');

var div = document.createElement('div');
div.className = 'center';

var second_div = document.createElement('div');
second_div.className = 'text';
second_div.textContent = 'LOADING';

var third_div = `
  <div class="ring"></div>
`;

root.appendChild(div);
div.appendChild(second_div);
div.insertAdjacentHTML('beforeend', third_div);
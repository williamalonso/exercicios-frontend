var root = document.getElementById('root');

//create the label
var label = document.createElement('label');
label.className = 'checkbox';
label.textContent = 'A = Hungry';

// create the checkbox
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = true;

// create the span
var span = document.createElement('span');
span.className = 'checkmark';

// insert all them in to the label
label.appendChild(checkbox);
label.appendChild(span);

var secondCheckbox = `
  <label class="checkbox">
    B = Thirsty
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
`;

var thirdCheckbox = `
  <label class="checkbox">
    C = Both
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
`;

root.appendChild(label);
root.insertAdjacentHTML('afterend', secondCheckbox);
root.insertAdjacentHTML('afterend', '<br>');
root.insertAdjacentHTML('afterend', thirdCheckbox);
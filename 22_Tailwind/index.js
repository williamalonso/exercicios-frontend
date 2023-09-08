var root = document.getElementById('root');

// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald, ui-serif',
      }
    },
    colors: {
      'clifford': '#da373d',
    }
  }
}

// Element
var elemento = `
  <div class="container mx-auto flex justify-center items-center h-96" style="background-color: blue">
    <h1 class="text-3xl font-bold underline text-clifford font-oswald">
      Hello world!
    </h1>
  </div>
`;

root.insertAdjacentHTML('beforeend', elemento);
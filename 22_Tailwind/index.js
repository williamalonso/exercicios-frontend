var root = document.getElementById('root');

// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald, ui-serif',
      },
      colors: {
        'clifford': '#da373d',
      },
    }
  },
  plugins: [],
}

// Element
var elemento = `
  <div class="absolute container left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center h-96 bg-sky-600">
    <h1 class="text-3xl font-bold underline text-clifford font-oswald">
      Hello world!
    </h1>
  </div>
`;

root.insertAdjacentHTML('beforeend', elemento);
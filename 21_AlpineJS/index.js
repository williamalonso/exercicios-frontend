var root = document.getElementById('root');

// Texto
var texto = `
  <br>
  <!-- Incremento -->
  <div x-data="{ count: 0}">
    <button x-on:click="count++">Increment</button>
    <span x-text="count * 2"></span>
  </div>
  <br>
`;

// Toggle
var toggle = `
  <div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div x-show="open" @click.outside="open = false">Content</div>
  </div>
  <br>
`;

// Search Filter
var searchFilter = `
  <div x-data="{
    search: '',
    items: ['foo', 'bar', 'baz'],
    get filteredItems() {
      return this.items.filter(
        i => i.startsWith(this.search)
      )
    }
  }">
    <input x-model="search" placeholder="Pesquisar...">
    <ul>
      <template x-for="item in filteredItems" :key="item">
        <li x-text="item"></li>
      </template>
    </ul>
  </div>
`;

// API get
var getApi = `
  <section x-data="{
    search: '',
    result: {},
    isLoading: false,
    doSearch() {
      this.isLoading = true;
        fetch('https://dummyjson.com/products/search?q=' + this.search)
            .then(res => res.json())
            .then(
              json => {
                this.result = json;
                this.isLoading = false;
              })
    }
  }">
    <input type="search" x-model="search">
    <button type="button" @click="doSearch()">Pesquisar</button>
    <p style="color: red" x-show="result.products && result.products.length == 0">A pesquisa não encontrou nenhum resultado!</p>
    <i id="indicator" class="fa-solid fa-spinner fa-spin" x-show="isLoading"></i>
    <template x-if="result.products && result.products.length > 0">
      <span>
        <p x-text="result.products[0].title"></p>
        <h3 x-text="result.products[0].description"></h3>
      </span>
    </template>
  </section>
`;

// checkbox input
var checkboxInput = `
  <div x-data="{
    open: 'abcd'
  }">
    <input type="checkbox" id="checkbox" x-model="open">
    <label for="checkbox" x-text="open">false</label>
  </div>
`;

root.insertAdjacentHTML('beforeend', texto);
root.insertAdjacentHTML('beforeend', toggle);
root.insertAdjacentHTML('beforeend', searchFilter);
root.insertAdjacentHTML('beforeend', getApi);
root.insertAdjacentHTML('beforeend', checkboxInput);
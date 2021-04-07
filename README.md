Grainy
===========
[![updown](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fgrainy.yesmat.es)](https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fgrainy.yesmat.es)


A simple javascript utility for adding grain to backgrounds or other elements.

Install with npm.

```
Demo: http://grainy.yesmat.es
```

```sh
npm install grainy
```

Use with node.js, webpack and e.g react.js

```js
const grainy = require('grainy');

componentDidMount(){

  const node = ReactDOM.findDOMNode(this);
  node.grainy({
    intensity: 1,
    size: 525,
    color: '#000000',
    backgroundColor: '#85b6d3',
    opacity: 0.12,
    monochrome: true,
  });
}
```

Alternatively, you can include `index.js` in your page and reference the global method.

```js
document.querySelector('.box5').grainy({
  intensity: 1,
  size: 625,
  color: '#ffffff',
  backgroundColor: '#2f5d8b',
  opacity: 0.24,
  monochrome: true
})
```


Originally based on, and modified from, Daniel Rapp's jQuery plugin 'Noisy'

https://github.com/DanielRapp/Noisy



## License

[ISC](LICENSE). Copyright (c) 2017 Gareth Robert Lee.

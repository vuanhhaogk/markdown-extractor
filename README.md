# markdown-extractor

_Get everythings from markdown document_

[![Markdown Extractor](https://img.shields.io/badge/node-%5E0.10.40-brightgreen.svg)](//www.npmjs.com/package/markdown-extractor) [![Markdown Extractor](https://img.shields.io/badge/npm-%5E1.4.28-brightgreen.svg)](//www.npmjs.com/package/markdown-extractor)

## Install

```shell
$ npm install markdown-extractor
```

## Usage

### NodeJS

```javascript
var mdext = require('markdown-extractor');

console.log(mdext.heading("> Get lots of heading in document\n# Heading\n## Sub heading"));

// Output: [{ type: 'h1', data: 'Heading' }, { type: 'h2', data: 'Sub heading' }]
```

### Browser

Add script in `./lib/markdown-extractor.js`

```html
<script src="./lib/markdown-extractor.js"></script>
```

In script using

```js
console.log(mdext.heading("> Get lots of heading in document\n# Heading\n## Sub heading"));

// Output: [{ type: 'h1', data: 'Heading' }, { type: 'h2', data: 'Sub heading' }]
```

## Demo

[Demo here](./demo)

## API

**mdext.heading(_content_)**

Get headings from `content`. The result is array object. Each object have two field `type` and `data`. 

_Example:_

```javascript
console.log(mdext.heading("# Heading\n## Sub heading"));

// Output: [{ type: 'h1', data: 'Heading' }, { type: 'h2', data: 'Sub heading' }]
```

**mdext.metadata(_content_)**

Get metadata from `content`. The result is object `key: value`

_Example:_

```javascript
console.log(mdext.metadata("Outside <!--metadata\ntitle: Hello\ndescription: Love u\n-->\nOutside"));

// Output: {title: 'Hello', description: 'Love u'}
```

_Note:_ Metadata in markdown document must had structure like:

```markdown
<!--metadata
key1: value1
key2: value2
-->
```

## LICENSE

MIT
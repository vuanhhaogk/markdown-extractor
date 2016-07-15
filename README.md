# markdown-extractor

> Get everythings from markdown document

## Install

```shel
$ npm install markdown-extractor
```

## Usage

```javascript
var mdext = require('markdown-extractor');

console.log(mdext.getHeadings("> Get lots of heading in document\n# Heading\n## Sub heading"));

// Output: [{ type: 'h1', data: 'Heading' }, { type: 'h2', data: 'Sub heading' }]
```

### API

**mdext.getHeadings(_content_)**

Get headings from `content`. The result is array object. Each object have two field `type` and `data`. 

_Example:_

```javascript
var mdext = require('markdown-extractor');

console.log(mdext.getHeadings("# Heading\n## Sub heading"));

// Output: [{ type: 'h1', data: 'Heading' }, { type: 'h2', data: 'Sub heading' }]
```

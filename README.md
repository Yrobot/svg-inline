# svg-inline

A web component which load static svg file form uri to inline svg

`https://example.com/example.svg`  
=>

```html
<svg-inline src="https://example.com/example.svg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    viewBox="0 0 128 128"
  >
    <path d="..."></path>
  </svg>
</svg-inline>
```

## How To Start

### load `svg-inline`

There are 2 ways to load `svg-inline`:

1. NPM

- install package: run `yarn add svg-inline` or `npm install svg-inline`
- import package: `import 'svg-inline'`

2. CDN

- import script in html: `<script src="https://unpkg.com/svg-inline@latest/build/svg-inline.js"></script>`

### use `svg-inline` to load svg file

```html
<svg-inline src="https://example.com/svg/example.svg"></svg-inline>
```

## Props

| Prop | Type   | Description                       |
| ---- | ------ | --------------------------------- |
| src  | string | absolute or relative svg file uri |

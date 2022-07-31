<p align="center">
  <a href="https://yrobot.top/app/svg-inline" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://yrobot.github.io/svg-inline/svg-inline.svg" alt="svg-inline logo">
  </a>
</p>
<br/>
<h2 align="center">
  <a href="https://yrobot.top/app/svg-inline">@yrobot/svg-inline</a>
</h2>
<p align="center">
  A web component which load static svg file form uri to inline svg
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@yrobot/svg-inline"><img src="https://img.shields.io/npm/v/@yrobot/svg-inline.svg" alt="npm package"></a>
</p>
<br/>

```html
<svg-inline src="https://example.com/example.svg"></svg-inline>
```

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

## Demos

- [Pure HTML](https://codepen.io/yrobot/pen/bGvbgqR)

## How To Start

### load `svg-inline`

There are 2 ways to load `svg-inline`:

1. NPM

- install package: run `yarn add @yrobot/svg-inline` or `npm install @yrobot/svg-inline`
- import package: `import '@yrobot/svg-inline'`

2. CDN

- import script in html: `<script src="https://unpkg.com/@yrobot/svg-inline@latest/build/index.js" type='module'></script>`

### use `svg-inline` to load svg file

```html
<svg-inline src="https://example.com/svg/example.svg"></svg-inline>
```

## Props

| Prop  | Type   | Description                                                                                                                              |
| ----- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| src   | string | the url of svg file, complete url or relative/absolute path.                                                                             |
| class | string | the css class name list string, you could change inline svg display size here. Notice the default web component display value is inline. |

## Common Usages

### With TypeScript

```tsx
import React from "react";
import { InlineSVGElement } from "@yrobot/svg-inline";

export default function Icon({
  icon = "",
  className = "",
  ...props
}: { icon: string; className?: string } & Omit<
  InlineSVGElement,
  "src" | "class"
>) {
  return (
    <svg-inline
      {...props}
      class={`inline-block ${className}`}
      src={`/icons/${icon}.svg`}
    ></svg-inline>
  );
}
```

### With Next.js

```tsx
import React, { useEffect } from "react";
import { InlineSVGElement } from "@yrobot/svg-inline";

export default function Icon({
  icon = "",
  className = "",
  ...props
}: { icon: string; className?: string } & Omit<
  InlineSVGElement,
  "src" | "class"
>) {
  useEffect(() => {
    import("@yrobot/svg-inline"); // avoid load svg-inline in SSR
  }, []);
  return (
    <svg-inline
      {...props}
      class={`inline-block ${className}`}
      src={`/icons/${icon}.svg`}
    ></svg-inline>
  );
}
```

## Suggestions

### 1. set a specific `display`, `width` and `height` for svg-inline, to avoid the page reflow.

The default display value for web component is `inline`. You could read more about this [here](https://github.com/WICG/webcomponents/issues/224).

And same as the img tag, if the svg-inline added without with and height, the page will reflow after the svg loaded.

So for the optimization, if you want to set the size of svg-inline, you should set the `display` as `inline-block` or `block` first, then set the `width` and `height` manually.

And here is the reason why i could not set this for you. [web component 在 SRR 的情况下会导致页面回流](https://blog.yrobot.top/blog/HTML5/WebComponent%E9%97%AE%E9%A2%98%E5%AE%9E%E5%BD%95#web-component-%E5%9C%A8-srr-%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BC%9A%E5%AF%BC%E8%87%B4%E9%A1%B5%E9%9D%A2%E5%9B%9E%E6%B5%81)

## Todo

- loading status handler
- error status handler

## History

### Version 1.2.2

- update attributes listener logic by using `attributeChangedCallback`

### Version 1.2.0

- remove default style set for svg-inline. (notice: the default style for web component is `display: inline;`)

### Version 1.1.0

- add observer on svg-inline.src
- fix svg-inline is empty in react

### Version 1.0.4

- update \*.d.ts
- update README for TypeScript, Next.js Usages

### Version 1.0.3

- add basic typescript declare: \*.d.ts

### Version 1.0.0

- basic feature
- support src prop
- generate `viewBox` if not exist

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

- import script in html: `<script src="https://unpkg.com/@yrobot/svg-inline@latest/build/svg-inline.js" type='module'></script>`

### use `svg-inline` to load svg file

```html
<svg-inline src="https://example.com/svg/example.svg"></svg-inline>
```

## Props

| Prop  | Type   | Description                                                                   |
| ----- | ------ | ----------------------------------------------------------------------------- |
| src   | string | the url of svg file, complete url or relative/absolute path.                  |
| class | string | the css class name list string, you could change inline svg display size here |

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
      class={className}
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
      class={className}
      src={`/icons/${icon}.svg`}
    ></svg-inline>
  );
}
```

## History

### Version 1.1.0

- add observer on svg-inline.src
- fix svg-inline is empty in react

### Version 1.0.4

- update \*.d.ts
- update README for TypeScript, Next.js Usages

### Version 1.0.3

- add basic typescript declare: \*.d.ts

### Version 1.0.0

**2022-06-23**

- basic feature
- support src prop
- generate `viewBox` if not exist

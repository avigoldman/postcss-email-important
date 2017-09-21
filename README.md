# postcss-email-important

This plugin will format your `!important` rules to an email safe format. See this [email bug](https://github.com/hteumeuleu/email-bugs/issues/16) for more.

### Installation

```sh
npm install postcss-email-important --save
```

### Usage

```js
postcss([ require('postcss-email-important') ])
// do your processing here 🎉
```

Or use it in some other [PostCSS way](https://github.com/postcss/postcss#usage).


### Example

You put this in....

```css
a {
  color: blue   !IMPORTAnt;
}
```

and you get this out...

```css
a {
  color: blue!important;
}
```

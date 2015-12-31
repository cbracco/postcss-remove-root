# postcss-remove-root

> A [PostCSS](https://github.com/postcss/postcss) plugin to remove all instances of “:root” from a stylesheet.

This plugin is very basic. It removes all instances of `:root` from a processed stylesheet (if present). It comes in handy if you are using [postcss-custom-variables](https://github.com/postcss/postcss-custom-properties) to process CSS variables. The included test assumes this scenario.

Otherwise, you probably have no use for this plugin. You should run this plugin after running postcss-custom-properties.

## Installation

```
npm install --save postcss-remove-root
```

## Example

### Input

```css
:root {
  --color-blue: blue;
}

.color-blue {
  color: var(--color-blue);
}
```

### Output

```css
.color-blue {
  color: blue;
}
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for examples on how to use this plugin in different environments.

## Contributing

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests (`$ npm test`).

## Credits

postcss-remove-root is a project by [@cbracco](https://github.com/cbracco) and its [contributors](https://github.com/cbracco/postcss-remove-root/graphs/contributors). It is based on code originally found in [Basscss](https://github.com/basscss/basscss/), a project by [jxnblk](https://github.com/jxnblk). This README is based on the one found in [postcss-import](https://github.com/postcss/postcss-import). 

Thank you for your hard work!

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

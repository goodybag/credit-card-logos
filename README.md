# SVG Credit Card Logos

> Flexible SVG credit card logo assets and CSS.

![Card logos](http://storage.j0.hn/credit-card-logos.png)

__Install__

```
npm install -S credit-card-logos
```

__LESS Usage__

```less
@import "node_modules/credit-card-logos/index.less";

#credit-card-logos > .init(
  // Initialize with path to logos on your webserver
  // Default: `/img`
  @path: '/path/to/logos'

  // Specify the base width of the element
  // Default: 160px;
  // (optional)
, @width: 160px

  // Specify the base height of the element
  // Default: 100px;
  // (optional)
, @height: 100px
);
```

In a build step, copy the files from the `/img` directory of this module to your own public directory (preferably one that is ignored from vcs).

__HTML Usage__

```html
<div class="card-logo card-logo-visa"></div>
<div class="card-logo card-logo-mastercard"></div>
<div class="card-logo card-logo-amex"></div>

<!-- Small Variant -->
<div class="card-logo small card-logo-visa"></div>

<!-- Large Variant -->
<div class="card-logo large card-logo-visa"></div>
```

## Licensing

The SVG assets were found on https://www.iconfinder.com/ and had Creative Commons license.
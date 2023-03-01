<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterAnyBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether at least one [iterated][mdn-iterator-protocol] value passes a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterAnyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-any-by@deno/mod.js';
```

#### iterAnyBy( iterator, predicate\[, thisArg] )

Tests whether at least one [iterated][mdn-iterator-protocol] value passes a test implemented by a `predicate` function.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

function predicate( v ) {
    return ( v > 0 );
}

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );

var bool = iterAnyBy( arr, predicate );
// returns true
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any iterated values, the function returns `false`.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

function predicate() {
    return true;
}

var bool = iterAnyBy( array2iterator( [] ), predicate );
// returns false
```

A `predicate` function is provided two arguments:

-   **value**: iterated value
-   **index**: iteration index (zero-based)

To set the execution context of the `predicate` function, provide a `thisArg`.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

function predicate( v ) {
    this.count += 1;
    return ( v > 0 );
}

var arr = array2iterator( [ 0, 0, 1, 0, 0 ] );

var ctx = {
    'count': 0
};

var bool = iterAnyBy( arr, predicate, ctx );
// returns true

var n = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function immediately returns upon encountering a truthy return value.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';
import iterAnyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-any-by@deno/mod.js';

function threshold( r ) {
    return ( r > 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Determine if any values exceed a threshold:
var bool = iterAnyBy( riter, threshold );
// returns <boolean>

console.log( bool );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-any`][@stdlib/iter/any]</span><span class="delimiter">: </span><span class="description">test whether at least one iterated value is truthy.</span>
-   <span class="package-name">[`@stdlib/iter-every-by`][@stdlib/iter/every-by]</span><span class="delimiter">: </span><span class="description">test whether every iterated value passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter-for-each`][@stdlib/iter/for-each]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="package-name">[`@stdlib/iter-none-by`][@stdlib/iter/none-by]</span><span class="delimiter">: </span><span class="description">test whether every iterated value fails a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter-some-by`][@stdlib/iter/some-by]</span><span class="delimiter">: </span><span class="description">test whether at least `n` iterated values pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-any-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-any-by

[test-image]: https://github.com/stdlib-js/iter-any-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-any-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-any-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-any-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-any-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-any-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-any-by/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-any-by/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-any-by/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-any-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-any-by/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/any]: https://github.com/stdlib-js/iter-any/tree/deno

[@stdlib/iter/every-by]: https://github.com/stdlib-js/iter-every-by/tree/deno

[@stdlib/iter/for-each]: https://github.com/stdlib-js/iter-for-each/tree/deno

[@stdlib/iter/none-by]: https://github.com/stdlib-js/iter-none-by/tree/deno

[@stdlib/iter/some-by]: https://github.com/stdlib-js/iter-some-by/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->

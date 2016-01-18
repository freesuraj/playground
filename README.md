[![NPM version][npm-image]][npm-url]
![build-status](https://travis-ci.org/freesuraj/playground.svg?branch=master)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/freesuraj/swiftplayground/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/freesuraj/swiftplayground.svg)](https://david-dm.org/swiftplayground/swiftplayground)
[![download  numbers](https://img.shields.io/npm/dt/swiftplayground.svg)](https://www.npmjs.com/package/swiftplayground)
[![Twitter](https://img.shields.io/badge/twitter-@iosCook-blue.svg?style=flat)](http://twitter.com/iosCook)

### playground
A command line application to quickly create and launch a Xcode playground.

### Installation
```
npm install -g swiftplayground

```
### Usage

```
$ swiftplayground --help

Usage: swiftplayground [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -n, --name [filename]  Name of the swift playground [SwiftPlayground]

Example
     $ swiftplayground -n FILENAME

Creates a new playground named FILENAME.playground in the current directory
```
### Screenshots
![command_line](https://github.com/freesuraj/playground/blob/master/assets/screenshots/Screenshot%202016-01-17%2023.35.55.png?raw=true)

![swift_pg](https://github.com/freesuraj/playground/blob/master/assets/screenshots/Screenshot%202016-01-17%2023.36.17.png?raw=true)

### TODO
- Automatically create playground from a swift markdown language

### License
The project is using [MIT][href] License.
[href]:https://github.com/freesuraj/playground/blob/master/LICENSE.md

[npm-url]: https://npmjs.org/package/swiftplayground
[npm-image]: https://img.shields.io/npm/v/swiftplayground.svg

# sass-pass

Simple Sass unit-tests:
- lightweight (5KB)
- pure scss :tada: _(yes, you read that correctly — no gem, no module, just 5KB of scss)_
- great logs
- debugging utilities

> Note: _gulpfile.js is for development._



## Usage
```scss
@function add($a, $b) { @return $a + $b; }
```
```scss
@import 'sass-pass/index';

@debug function('add');
@debug in(1, 2) + out(3);
@debug in(45px, 0.5px) + out(45.5px);
@debug in('a', 'b') + out('ab');
@debug in(1, 1) + out(3);
```
```
ADD
add(1, 2)  =>  3 (expected)
add(45px, 0.5px)  =>  45.5px (expected)
add('a', 'b')  =>  'ab' (expected)
WARNING: TEST FAILED, see below
add(1, 1)  =>  2 (expected 3)
```
> Note: _you can configure `sass-pass` to throw `@error`s instead of `@warn`ings_

You can also test non-function stuff, but you'll have to give up the pretty logs _(that is, you'll probably have to look at the code to know what test failed)_
```scss
@debug assert('divisions');
@debug in(1 / 2) + out(0.5);
@debug in(3.5 / 2) + out(1.75);
```
```
DIVISIONS
Got 0.5 (expected)
Got 1.75 (expected)
```


## Utilities

### `info`
```scss
$list: (1 2 3 4);
@debug info($list);
```
```
------------------------------------
INFO
Type:           list
Representation:
 - sass:        1 2 3 4
 - sass-pass:   (1 2 3 4)
Length:         4
List-separator: space
------------------------------------
```

### `compare`
```scss
$other-list: (1, 2, 3, 'a', 5);
@debug compare($list, $other-list);
```
```
------------------------------------
COMPARE
Equal:  
 - sass:        false
 - sass-pass:   false
------------------------------------
Type:           list
Representation:
 - sass:        1 2 3 4  -VS-   1, 2, 3, a, 5
 - sass-pass:   (1 2 3 4)  -VS-   (1 2 3 'a' 5)
Length:         4  -VS-   5
List-separator: space  -VS-   comma
------------------------------------
```
```scss
@debug compare(1px, 1);
```
```
------------------------------------
COMPARE
Equal:
 - sass:        true
 - sass-pass:   false
------------------------------------
Type:           number
Representation:
 - sass:        1px  -VS-   1
 - sass-pass:   1px  -VS-   1
------------------------------------
```

### `l`
Make single-element, space-separated sass lists.
```scss
@debug compare(l('a'), ('a',));
```

### `$empty-map`
An empty sass map.
```scss
@debug info($empty-map);
```

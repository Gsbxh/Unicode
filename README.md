# unicode-text-decorator

[![Node.js CI](https://github.com/ryo-a/unicode-text-decorator/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/ryo-a/unicode-text-decorator/actions/workflows/node.js.yml)

unicode-text-decorator is a simple library to convert ASCII text to decorated text.

```
๐๐๐๐๐๐๐-๐๐๐ก๐-๐๐๐๐๐๐๐๐๐ is ๐ฎ ๐๐ถ๐บ๐ฝ๐น๐ฒ ๐น๐ถ๐ฏ๐ฟ๐ฎ๐ฟ๐ to ๐๐ ๐๐ง๐๐ฃ๐ฅ โถโโธโพโพ text to ๐ฉ๐ช๐จ๐ด๐ท๐ฆ๐น๐ช๐ฉ text.
```

## Notice

These Unicode characters are basically symbols provided for expressing mathematical formulae and so on. Hence they are not recongnised as Latin alphabet characters and have accessibility problems like text-to-speech. Not only this library but also these "decorated Unicode fonts" are just for hobby and playing use.

## Install

```sh
npm i unicode-text-decorator
```

## Usage

`utd.decorate(targetText, fontName)`

```js
const utd = require('unicode-text-decorator');

let wildScreen = utd.decorate('wi(l)d-screen', 'bold_italic_serif');
let baroque = utd.decorate('baroque', 'bold_sans_serif');

console.log(wildScreen + ' ' + baroque);

let nanaDaiba = utd.decorate('Nana Daiba / ๅคงๅ ดใชใช (CV: Moeka Koizumi / ๅฐๆณ่้ฆ)', 'bold_script');
console.log(nanaDaiba);
```

#### expected output

```
๐๐(๐)๐-๐๐๐๐๐๐ ๐ฏ๐ฎ๐ฟ๐ผ๐พ๐๐ฒ
๐๐ช๐ท๐ช ๐๐ช๐ฒ๐ซ๐ช / ๅคงๅ ดใชใช (๐๐ฅ: ๐๐ธ๐ฎ๐ด๐ช ๐๐ธ๐ฒ๐๐พ๐ถ๐ฒ / ๅฐๆณ่้ฆ)
```

Symbols (like space and `/`) and non-ASCII characters are ignored.


FYI: *[wi(l)d-screen baroque](https://music.apple.com/jp/album/wi-l-d-screen-baroque/1575167308?i=1575167309)* is the song appeard in the movie of *[Revue Starlight](https://en.wikipedia.org/wiki/Revue_Starlight)*. The title of the song is displayed in a mixture of serif and sans-serif in the scene.

### Supported Font

| font name              | Example        | Capital Letters | Small Letters | Numbers |
| :--------------------- | :------------- | :-------------- | :------------ | :------ |
| bold_serif             | ๐๐ง๐ข๐๐จ๐๐        | โ               | โ             | โ       |
| italic_serif           | ๐๐๐๐๐๐๐        | โ               | โ             |         |
| bold_italic_serif      | ๐ผ๐๐๐๐๐๐        | โ               | โ             |         |
| script                 | ๐ฐ๐๐พ๐ธโด๐นโฏ        | โ               | โ             |         |
| bold_script            | ๐ค๐ท๐ฒ๐ฌ๐ธ๐ญ๐ฎ        | โ               | โ             |         |
| fraktur                | ๐๐ซ๐ฆ๐ ๐ฌ๐ก๐ข        | โ               | โ             |         |
| bold_fraktur           | ๐๐๐๐๐๐๐        | โ               | โ             |         |
| double_struck          | ๐๐๐๐๐ ๐๐        | โ               | โ             | โ       |
| sans_serif             | ๐ด๐๐๐ผ๐๐ฝ๐พ        | โ               | โ             | โ       |
| bold_sans_serif        | ๐จ๐ป๐ถ๐ฐ๐ผ๐ฑ๐ฒ        | โ               | โ             | โ       |
| italic_sans_serif      | ๐๐ฏ๐ช๐ค๐ฐ๐ฅ๐ฆ        | โ               | โ             |         |
| bold_italic_sans_serif | ๐๐ฃ๐๐๐ค๐๐        | โ               | โ             |         |
| monospace              | ๐๐๐๐๐๐๐        | โ               | โ             |         |
| regional_indicator     | ๐บ๐ณ๐ฎ๐จ๐ด๐ฉ๐ช           | โ               |               |         |
| circle                 | โโโโโโโ        | โ               | โ             | โ       |
| black_circle           | ๐ค๐๐๐๐๐๐        | โ               |               |         |
| square                 | ๐๐ฝ๐ธ๐ฒ๐พ๐ณ๐ด        | โ               |               |         |
| parenthesized          | ๐คโฉโคโโชโโ         | โ               | โ             |         |
| fullwidth              | ๏ผต๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ | โ               | โ             | โ       |

#### Notice

regional_indicator is the characters that represents [national/regional flags](https://en.wikipedia.org/wiki/Regional_indicator_symbol). In some environment (like Discord), these characters are basically interpreted as flags emoji. For example, `JOIN US` will be shown as **JO (Jordan) IN (India) US (United States)** like below. This is not a bug of this library.

![national flags](./docs/national_flags.png)


### Fallback Option

Some fonts don't have characters for small letters. In that case, if you turn on the fallback option, this returns existing capital letters instead of (unexisting) small ones.

```js
let tokyoTower1 = utd.decorate('Tokyo Tower', 'black_circle'); // default is false
let tokyoTower2 = utd.decorate('Tokyo Tower', 'black_circle', { fallback: true });
let tokyoTower3 = utd.decorate('Torre de Tรณquio','black_circle', { fallback: true });

console.log(tokyoTower1);
console.log(tokyoTower2);
console.log(tokyoTower3);
```

#### expected output

Even with the fallback mode, unexisting characters (non-ASCII like **`รณ`** ) will be ignored.

```
๐ฃokyo ๐ฃower
๐ฃ๐๐๐จ๐ ๐ฃ๐๐ฆ๐๐ก
๐ฃ๐๐ก๐ก๐ ๐๐ ๐ฃรณ๐ ๐ค๐๐
```
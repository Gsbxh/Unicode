const utd = require('../src/index');

const testString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const correctAnswerCapital = {
    bold_serif: "๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐",
    italic_serif: '๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    bold_italic_serif: '๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐',
    script: '๐โฌ๐๐โฐโฑ๐ขโโ๐ฅ๐ฆโโณ๐ฉ๐ช๐ซ๐ฌโ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต',
    bold_script: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ',
    fraktur: '๐๐โญ๐๐๐๐โโ๐๐๐๐๐๐๐๐โ๐๐๐๐๐๐๐โจ',
    bold_fraktur: '๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐',
    double_struck: '๐ธ๐นโ๐ป๐ผ๐ฝ๐พโ๐๐๐๐๐โ๐โโโ๐๐๐๐๐๐๐โค',
    sans_serif: '๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น',
    bold_sans_serif: '๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ',
    italic_sans_serif: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก',
    bold_italic_sans_serif: '๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐',
    monospace: '๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐',
    regional_indicator: '๐ฆ๐ง๐จ๐ฉ๐ช๐ซ๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ',
    circle: 'โถโทโธโนโบโปโผโฝโพโฟโโโโโโโโโโโโโโโโ',
    black_circle: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ',
    square: '๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐',
    parenthesized: '๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐ก๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ',
    fullwidth: '๏ผก๏ผข๏ผฃ๏ผค๏ผฅ๏ผฆ๏ผง๏ผจ๏ผฉ๏ผช๏ผซ๏ผฌ๏ผญ๏ผฎ๏ผฏ๏ผฐ๏ผฑ๏ผฒ๏ผณ๏ผด๏ผต๏ผถ๏ผท๏ผธ๏ผน๏ผบ',
    smallcaps: 'แดสแดแดแดาษขสษชแดแดสแดษดแดแดวซสsแดแดแด แดกxสแดข',
};

test('bold_serif Capital', () => {
    expect(utd.decorate(testString, 'bold_serif')).toBe(correctAnswerCapital.bold_serif);
});



test('italic_serif Capital', () => {
    expect(utd.decorate(testString, 'italic_serif')).toBe(correctAnswerCapital.italic_serif);
});

test('bold_italic_serif Capital', () => {
    expect(utd.decorate(testString, 'bold_italic_serif')).toBe(correctAnswerCapital.bold_italic_serif);
});

test('script Capital', () => {
    expect(utd.decorate(testString, 'script')).toBe(correctAnswerCapital.script);
});

test('bold_script Capital', () => {
    expect(utd.decorate(testString, 'bold_script')).toBe(correctAnswerCapital.bold_script);
});

test('fraktur Capital', () => {
    expect(utd.decorate(testString, 'fraktur')).toBe(correctAnswerCapital.fraktur);
});

test('bold_fraktur Capital', () => {
    expect(utd.decorate(testString, 'bold_fraktur')).toBe(correctAnswerCapital.bold_fraktur);
});

test('double_struck Capital', () => {
    expect(utd.decorate(testString, 'double_struck')).toBe(correctAnswerCapital.double_struck);
});

test('sans_serif Capital', () => {
    expect(utd.decorate(testString, 'sans_serif')).toBe(correctAnswerCapital.sans_serif);
});

test('bold_sans_serif Capital', () => {
    expect(utd.decorate(testString, 'bold_sans_serif')).toBe(correctAnswerCapital.bold_sans_serif);
});

test('italic_sans_serif Capital', () => {
    expect(utd.decorate(testString, 'italic_sans_serif')).toBe(correctAnswerCapital.italic_sans_serif);
});

test('smallcaps Capital', () => {
    expect(utd.decorate(testString, 'smallcaps')).toBe(correctAnswerCapital.smallcaps);
});

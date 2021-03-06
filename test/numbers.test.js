const utd = require('../src/index');

const testString = '0123456789';

const correctAnswerNumbers = {
    bold_serif: '๐๐๐๐๐๐๐๐๐๐',
    italic_serif: '0123456789',
    bold_italic_serif: '0123456789',
    script: '0123456789',
    bold_script: '0123456789',
    fraktur: '0123456789',
    bold_fraktur: '0123456789',
    double_struck: '๐๐๐๐๐๐๐๐๐ ๐ก',
    sans_serif: '๐ข๐ฃ๐ค๐ฅ๐ฆ๐ง๐จ๐ฉ๐ช๐ซ',
    bold_sans_serif: '๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต',
    italic_sans_serif: '0123456789',
    bold_italic_sans_serif: '0123456789',
    monospace: '๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ',
    regional_indicator: '0123456789',
    circle: 'โชโ โกโขโฃโคโฅโฆโงโจ',
    black_circle: '0123456789',
    square: '0123456789',
    parenthesized: '0123456789',
    fullwidth: '๏ผ๏ผ๏ผ๏ผ๏ผ๏ผ๏ผ๏ผ๏ผ๏ผ',
    smallcaps: '๐๐๐๐๐๐๐๐๐๐',
};

test('bold_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_serif')).toBe(correctAnswerNumbers.bold_serif);
});

test('italic_serif Numbers', () => {
    expect(utd.decorate(testString, 'italic_serif')).toBe(correctAnswerNumbers.italic_serif);
});

test('bold_italic_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_italic_serif')).toBe(correctAnswerNumbers.bold_italic_serif);
});

test('script Numbers', () => {
    expect(utd.decorate(testString, 'script')).toBe(correctAnswerNumbers.script);
});

test('bold_script Numbers', () => {
    expect(utd.decorate(testString, 'bold_script')).toBe(correctAnswerNumbers.bold_script);
});

test('fraktur Numbers', () => {
    expect(utd.decorate(testString, 'fraktur')).toBe(correctAnswerNumbers.fraktur);
});

test('bold_fraktur Numbers', () => {
    expect(utd.decorate(testString, 'bold_fraktur')).toBe(correctAnswerNumbers.bold_fraktur);
});

test('double_struck Numbers', () => {
    expect(utd.decorate(testString, 'double_struck')).toBe(correctAnswerNumbers.double_struck);
});

test('sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'sans_serif')).toBe(correctAnswerNumbers.sans_serif);
});

test('bold_sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'bold_sans_serif')).toBe(correctAnswerNumbers.bold_sans_serif);
});

test('italic_sans_serif Numbers', () => {
    expect(utd.decorate(testString, 'italic_sans_serif')).toBe(correctAnswerNumbers.italic_sans_serif);
});

test('smallcaps Numbers', () => {
    expect(utd.decorate(testString, 'smallcaps')).toBe(correctAnswerNumbers.smallcaps);
});

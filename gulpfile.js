// Change this password before use!
const password='lol';


const gulp = require('gulp');
const gulpInline = require('gulp-inline');
const transform = require('gulp-transform');
const openpgp = require('openpgp');
const fs = require('fs');

const decryptWrapper = fs.readFileSync('decrypt.html').toString();

const encrypt = async function(content, file) {
  const { data: encrypted } = await openpgp.encrypt({
    message: openpgp.message.fromText(content),
    passwords: [password],
    compression: openpgp.enums.compression.zlib,
  })
  return decryptWrapper.replace('{{ content }}', encrypted);
};

exports.default = function () {
  return gulp.src('page/index.html')
  .pipe(gulpInline({
    base: 'page',
  }))
  .pipe(transform('utf-8', encrypt))
  .pipe(gulp.dest('dist/'))
}


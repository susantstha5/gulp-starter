import config from '../config';
import gulp from 'gulp';
import path from 'path';
import cache from 'gulp-cached';
import gulpIf from 'gulp-if';
import postcss from 'gulp-postcss';
import reporter from 'postcss-reporter';
import scss from 'postcss-scss';
import stylelint from 'stylelint';

const paths = {
  src: path.join(config.SRC_DIR, config.cssLint.src, config.cssLint.glob)
};

const processors = [
  stylelint(),
  reporter({ clearMessages: true })
];

gulp.task('css-lint', () => {
  return gulp.src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.cssLint.cacheName)))
    .pipe(postcss(processors, { syntax: scss }));
});
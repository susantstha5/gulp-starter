import config from '../config';
import cache from 'gulp-cached';
import gulp from 'gulp';
import path from 'path';
import gulpIf from 'gulp-if';
import { bs } from './browser-sync';

const paths = {
  src: path.join(config.SRC_DIR, config.assets.src, config.assets.glob),
  dest: path.join(config.DEST_DIR, config.assets.dest)
};

gulp.task('assets', () => {
  return gulp
    .src(paths.src)
    .pipe(gulpIf(config.isDev, cache(config.assets.cacheName, { optimizeMemory: true })))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpIf(config.isDev, bs.stream()));
});
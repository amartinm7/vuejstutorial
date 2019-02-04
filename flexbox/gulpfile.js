const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const fs = require('fs')

const dir = './dist'

gulp.task('autoprefixer', async function() {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    gulp.src('style.css')
      .pipe(autoprefixer({
          browsers: ['last 99 versions'],
          cascade: false
        }
      ))
      .pipe(gulp.dest(`${dir}/style`))
  }
)

/*
Here’re some of my recommendations:
- gulp-htmlclean
HTML/SVG cleaner without changing it’s structure
- gulp-clean-css
Minify your CSS files
- gulp-uglify
One of my favorite, JavaScript minifier!
*/

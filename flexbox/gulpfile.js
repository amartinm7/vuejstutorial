const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const fs = require('fs')
watch = require('gulp-watch');


const dir = './dist'
const styleFolder = './src/style/style.css'


async function compileCss () {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    return gulp.src(styleFolder)
      .pipe(autoprefixer({
          browsers: ['last 99 versions'],
          cascade: false
        }
      ))
      .pipe(gulp.dest(`${dir}`))
  }


gulp.task('watch', async function() {
  gulp.watch(`${styleFolder}`, compileCss)
})


/*
Here’re some of my recommendations:
- gulp-htmlclean
HTML/SVG cleaner without changing it’s structure
- gulp-clean-css
Minify your CSS files
- gulp-uglify
One of my favorite, JavaScript minifier!
*/

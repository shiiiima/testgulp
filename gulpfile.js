const gulp = require('gulp');
const postcss=require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const tailwindcss=require('tailwindcss');

gulp.task( 'styles', () => {
    return gulp
      .src('./app/css/tailwind.css')
      
      .pipe( postcss([
        tailwindcss('./tailwind.config.js'),
        require( 'autoprefixer' )
        
      ]))
      .pipe(gulp.dest("./dist/css"))
      
  });

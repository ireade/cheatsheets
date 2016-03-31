var gulp = require('gulp');
var gutil = require('gulp-util');


/* *************
	CSS
************* */

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var scss = require('postcss-scss');
var autoprefixer = require('autoprefixer');

var postcssProcessors = [
    autoprefixer( {
        browsers: [
            'Explorer >= 11',
            'last 2 ExplorerMobile versions',
            'last 2 Edge versions',

            'last 2 Firefox versions',
            'last 2 FirefoxAndroid versions',

            'last 2 Chrome versions',
            'last 2 ChromeAndroid versions',

            'last 2 Safari versions',
            'last 2 iOS versions',

            'last 2 Opera versions',
            'last 2 OperaMini versions',
            'last 2 OperaMobile versions',

            'last 2 Android versions',
            'last 2 BlackBerry versions',
        ]
    } )
]

var sassMainFile = 'development/css/main.scss';
var sassFiles = 'development/css/**/*.scss';

gulp.task('css', function() {
    gulp.src(sassMainFile)

        // PostCSS 
        .pipe(
           postcss(postcssProcessors, {syntax: scss})
        )

        // SASS to CSS
        .pipe(
            sass({ outputStyle: 'expanded' }) // compressed
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('assets/css'));
});



/* *************
	JS
************* */

var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

var jsFiles = 'development/js/**/*.js';

gulp.task('js', function() {
    gulp.src(jsFiles)
        .pipe(concat('script.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});







gulp.task('watch', function() {
    gulp.watch(sassFiles,['css']); 
    gulp.watch(jsFiles,['js']); 
});

gulp.task('default', ['css', 'js', 'watch']);

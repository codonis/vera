var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	projectError = require('gulp-util'),
	rename = require('gulp-rename'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	gulpImport = require('gulp-html-import'),
	spritesmith = require('gulp.spritesmith');

gulp.task('sass', function () {
	gulp.src('app/sass/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(rename('styles.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('css'))
});

gulp.task('manage', function () {
	return gulp.src(['app/js/*.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('js'))
		.on('error', projectError.log)
});

gulp.task('fonts', function () {
	gulp.src('app/fonts/*.*')
		.pipe(gulp.dest('fonts'))
});

gulp.task('images', function () {
	return gulp.src(['app/images/**/*.+(png|jpg|gif|svg|ico)', '!app/images/sprites/**/*'])
		.pipe(cache(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imagemin.jpegtran({ progressive: true, optimizationLevel: 6 }),
			imagemin.optipng({ optimizationLevel: 6 }),
			imagemin.svgo({ plugins: [{ removeViewBox: true }] })
		])))
		.pipe(gulp.dest('images'))
});

gulp.task('sprite', function () {
	var spriteData = gulp.src('app/images/sprites/*.png').pipe(spritesmith({
		imgName: '../images/sprite.png',
		cssName: '_sprite.scss'
	}));
	spriteData.img.pipe(gulp.dest('images'));
	spriteData.css.pipe(gulp.dest('app/sass/config/'));
});


gulp.task('import', function () {
	return gulp.src('app/*.html')
		.pipe(gulpImport('app/temp/'))
		.pipe(gulp.dest(''));
});



gulp.task('watch', function () {
	gulp.watch(['app/sass/**/*.scss', 'css/**/*'], ['sass']);
	gulp.watch('app/js/*js', ['manage']);
	gulp.watch(['app/fonts/*', 'fonts/*'], ['fonts']);
	gulp.watch('app/images/**/*.*', ['images', 'sprite']);
	gulp.watch(['app/temp/*.html', 'app/**/*.html'], ['import']);
});

gulp.task('default', ['sass', 'manage', 'fonts', 'images', 'import', 'sprite', 'watch']);

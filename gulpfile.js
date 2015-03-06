var gulp = require("gulp"),
	sass = require("gulp-sass"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	autoprefixer = require("gulp-autoprefixer"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify");

var onError = notify.onError({
	title: "Your SASS is broken!",
	subtitle: "<%= file %> did not compile!",
	message: "<%= error.message %>"
});

function compileSass (name, pathToSass) {
	gulp.src(pathToSass + "/" + name + ".sass")
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(sass({
			loadPath: process.cwd() + pathToSass,
			style: "nested",
			indentedSyntax: true
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify(name + " successfully compiled!"));
}

gulp.task("alerts", function () {
	compileSass("alerts", "css/_inc/alerts")
});

gulp.task("common", function () {
	compileSass("common", "css/_inc/common")
});

gulp.task("forms", function () {
	compileSass("forms", "css/_inc/forms")
});

gulp.task("labels", function () {
	compileSass("labels", "css/_inc/labels")
});

gulp.task("litchi", function () {
	compileSass("litchi", "css/_inc")
});

gulp.task("uglify", function () {
	gulp.src("js/include/*.js")
		.pipe(concat("app.js"))
		.pipe(uglify("app.js"))
		.pipe(gulp.dest("js"))
		.pipe(notify("JavaScript successfully compiled!"));
});

gulp.task("default", function () {
	gulp.watch("css/_inc/alerts/**/*.sass", ["alerts"]);
	gulp.watch("css/_inc/common/**/*.sass", ["common"]);
	gulp.watch("css/_inc/forms/**/*.sass", ["forms"]);
	gulp.watch("css/_inc/labels/**/*.sass", ["labels"]);
	gulp.watch("css/_inc/**/*.sass", ["litchi"]);

	gulp.watch("js/include/*.js", ["uglify"]);
});
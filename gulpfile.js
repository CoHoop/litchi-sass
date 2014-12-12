/*
 * Init Gulp dependencies
 */
var gulp =
	require("gulp"),
	sass = require("gulp-ruby-sass"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	autoprefixer = require("gulp-autoprefixer"),
	notify = require("gulp-notify");


/*
 * Gulp tasks
 */
gulp.task("common", function() {

	gulp.src("css/_inc/common/common.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/_inc/common",
			style: "nested"
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify("COMMON successfully compiled!"));

});

gulp.task("alerts", function() {

	gulp.src("css/_inc/alerts/alerts.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/_inc/alerts",
			style: "nested"
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify("ALERTS successfully compiled!"));

});

gulp.task("labels", function() {

	gulp.src("css/_inc/labels/labels.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/_inc/labels",
			style: "nested"
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify("LABELS successfully compiled!"));

});

gulp.task("forms", function() {

	gulp.src("css/_inc/forms/forms.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/_inc/forms",
			style: "nested"
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify("FORMS successfully compiled!"));

});

gulp.task("drop-downs", function() {

	gulp.src("css/_inc/drop-downs/drop-downs.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/_inc/drop-downs",
			style: "nested"
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify("DROP-DOWNS successfully compiled!"));

});

// TODO
gulp.task("litchi", function() {

	gulp.src("css/_inc/litchi.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/_inc",
			style: "nested"
		}))
		.pipe(autoprefixer({
			browsers: ["last 20 versions", "> 1%"],
			cascade: false
		}))
		.pipe(gulp.dest("css"))
		.pipe(rename({suffix: ".min"}))
		.pipe(minifycss())
		.pipe(gulp.dest("css"))
		.pipe(notify("LITCHI successfully compiled!"));

});

gulp.task("watch", function() {

	gulp.watch("css/_inc/common/**/*.sass", ["common"]);
	gulp.watch("css/_inc/alerts/**/*.sass", ["alerts"]);
	gulp.watch("css/_inc/labels/**/*.sass", ["labels"]);
	gulp.watch("css/_inc/forms/**/*.sass", ["forms"]);
	gulp.watch("css/_inc/drop-downs/**/*.sass", ["drop-downs"]);

});


/*
 * Default Gulp task
 */
gulp.task("default", function() {
	gulp.start("watch");
});

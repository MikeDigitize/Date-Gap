var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("minify-javascript", function () {
    return gulp.src("./date-gap.js")
        .pipe(uglify())
        .pipe(rename("./date-gap.min.js"))
        .pipe(gulp.dest("./"))   
});

gulp.task("copy", function() {
    return gulp.src("./date-gap.min.js")
        .pipe(gulp.dest("./tests/src/"));
});

gulp.task("watch", function () {
    gulp.watch("./date-gap.js", ["minify-javascript", "copy"]);
});

gulp.task("default", ["minify-javascript", "copy", "watch"]);
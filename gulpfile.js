/* #### Setting #### */
const gulp = require("gulp");
require("require-dir")("./_tasks");

/* ################# */
/* ##### Tasks ##### */
/* ################# */
// --- set environment ----
gulp.task("production", gulp.series("set-prod-node-env"));
gulp.task("development", gulp.series("set-dev-node-env"));

// --- group tasks ----
gulp.task("clean", gulp.series("clean:scripts"));
gulp.task("lint", gulp.series("lint:css"));
gulp.task("scripts", gulp.series("scripts:build"));
gulp.task("styles", gulp.series("lint:css", "compile:css"));

// --- run tasks ----
gulp.task("update", gulp.series("development", "styles", "scripts"));
gulp.task(
  "build",
  gulp.series("production", "clean", "styles", "scripts", "imagemin")
);

// --- run application ----
gulp.task("serve", gulp.series("build", "docker:up"));
gulp.task("stop", gulp.series("docker:down"));

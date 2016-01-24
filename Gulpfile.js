var gulp = require("gulp");
var bundler = require("aurelia-bundler");
var uglify = require("gulp-uglify");

var bundles = {
  "./app-bundle": {                   // Should be within `baseURL`
    includes: [
      // Module names to be included in the bundle. May be a pattern too. eg. `*`, `**/**/*`, `[*]`
      "app", "main", "about/*.js", "movies/*.js", "resources/*.js",
      "aurelia-framework",
      "aurelia-bootstrapper",
      "aurelia-router",
      "aurelia-http-client",
      "aurelia-validation"
    ],
    options: {
      inject: true,                   // Default is true
      minify: true,                  // Default is false
      rev: false                      // Set it to true for revison suport. Default is false
    }
  },
  "./view-bundle": {
    htmlimport: true,                 // Set it to `true` for html import based view bundle.
    includes: "./**/*.html",
    options: {
      inject: {
        indexFile: "./index.html",
        destFile: "./index_bundled.html"
      }
    }
  }
};

var config = {
  force: true,                    // Force overwrite bundle file if already exists. Default false
  baseURL: '.',                   // `baseURL of the application`
  configPath: './config.js',      // `config.js` path. Must be within `baseURL`
  bundles: bundles
};

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});

gulp.task('bundle', ['unbundle'],  function() {   // Running `unbundle` before bundling is a good practice.
  return bundler.bundle(config);
});

gulp.task('uglify', ['bundle'], function(){
  return gulp.src("./appbundle.js")
             .pipe(uglify())
             .pipe(gulp.dest("./"));
});

gulp.task('default', ["uglify"]);

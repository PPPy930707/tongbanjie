const path    = require( 'path' );
const src = path.resolve(__dirname, 'src')
const gulp    = require( 'gulp' );
const babel   = require( 'gulp-babel' );
const bump = require('gulp-bump');
const uglify = require('gulp-uglify');

gulp.task('default',function(){

});

/**
 * 更新版本
 */
gulp.task('bump',function(){
    gulp.src('./package.json')
        .pipe(bump({
            type : 'prerelease',  //更新版本的形式，string类型--可选其他值为`major|minor|patch|prerelease`
            key  : 'version',   //更新的属性名，string类型
        }))
        .pipe(gulp.dest('./'));
});
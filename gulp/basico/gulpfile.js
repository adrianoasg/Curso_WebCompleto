const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    console.log('Copiar!!!')
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    return gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //gulp.src(['pastaA/*.txt']) copia a pasta e todos arquivos .txt
    //gulp.src(['pastaA/**/*/.txt']) copia a pasta e todos arquivos .txt e as subpastas e seus arquivos .txt
    //.pipe(transformacao1())
    //.pipe(transformacao2())
    .pipe(gulp.dest('pastaB'))
})

//gulp.task('fim', () => {
 //   console.log('Fim!!!')
//})

//disparando apartir de uma task outras tasks
gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim 2!!!')
})
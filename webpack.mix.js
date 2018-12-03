// Asset compilation via laravel mix:
// https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme

let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug');
const settings = require('./project-settings.js');


mix
  .sass('scss/app.scss', 'public/style.css')
  .js('js/app.js', 'public/scripts.js')
  .sourceMaps(false)
  .webpackConfig({ devtool: "inline-source-map" })
  .copy('images/*', 'public/images')
  .setPublicPath('./public');

mix.pug('templates/*.pug', '../public', {
  locals: {
    settings: settings,
  },
});

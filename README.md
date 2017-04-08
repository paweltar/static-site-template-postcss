## You can use this template as a starting point for building static sites. ##

### What's included?

 - [Sass](http://sass-lang.com/)
 - [Panini](https://github.com/zurb/panini)
 - [UIkit 3](https://getuikit.com/)
 - [jQuery](https://jquery.com/)
 - [Browsersync](https://www.browsersync.io/)
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
 - [Image optimization](https://github.com/sindresorhus/gulp-imagemin)
 - [CSSNext](http://cssnext.io/)
 - [Full list on website](http://curator-anthony-10830.netlify.com/)

### Usage

Clone repository

    git clone git@github.com:paweltar/static-site-template-postcss.git my-project-name
    cd my-project-name

Remove git tracking and initialize your own

    rm -rf .git
    git init

Download dependencies

    npm install

Build project and start watching for changes

    npm start

Create /build folder for the production website

    npm run build

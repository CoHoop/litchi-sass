# litchi-sass

SASS framework. Gulp ready.

## Referencing litchi-sass as a dependency

To reference litchi-sass, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/litchi.min.css">

Please note that this dependency is a purely experimental approach at the moment. It defaults your fonts to Helvetica and Georgia, as well as some of the colours to match the litchi colour scheme.

## Setup

### Mac and Linux

In the directory where the project is checked out, execute the following:

		# Install Node.js and Ruby
		sudo apt-get install nodejs
		sudo apt-get install ruby

		# Install sass
		sudo gem install Sass

		# Setup gulp
		sudo npm install gulp -g
		sudo npm install gulp
		sudo npm install gulp-ruby-sass gulp-minify-css gulp-rename gulp-autoprefixer gulp-uglify gulp-concat gulp-notify

		# Start gulp monitoring of the sass files
		gulp

### Windows

1. Install Node.js
2. Install Ruby
3. In the directory where the project is checked out, execute the following:

		# Install sass
		gem install Sass

		# Setup gulp
		npm install gulp -g
		npm install gulp
		npm install gulp-ruby-sass gulp-minify-css gulp-rename gulp-autoprefixer gulp-uglify gulp-concat gulp-notify

		# Start gulp monitoring of the sass files
		gulp

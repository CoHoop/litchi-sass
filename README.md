# litchi-sass

The light-weight SASS framework web artisans need.

## Referencing litchi as a dependency

Litchi SASS comes in multiple setups, which makes it both extremely light-weight and robust, if you wish.

- Common
- Forms
- Labels
- Alerts
- Drop Downs

### Common

To reference **common**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/common.min.css">

### Forms

To reference **forms**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/forms.min.css">

### Labels

To reference **labels**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/labels.min.css">

### Alerts

To reference **alerts**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/alerts.min.css">

### Drop Downs

To reference **drop-downs**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/dropdowns.min.css">

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

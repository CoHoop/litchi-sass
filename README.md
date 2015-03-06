# litchi-sass

The light-weight SASS framework web artisans need.

## Referencing litchi as a dependency

To reference litchi as a whole, use:

		<link rel="stylesheet" href="https://litchi.io/include/latest/litchi.min.css">

However, litchi SASS comes in multiple micro setups, which helps web developers keep css dependencies solutions extremely light-weight. Depending on your project setup and scale, feel free to choose from the below and manage in a way that fits your needs.

- Common
- Alerts
- Drop Downs *(WIP)*
- Forms
- Labels

### Common

To reference **common**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/common.min.css">

### Alerts

To reference **alerts**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/alerts.min.css">

### Forms *(WIP)*

To reference **forms**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/forms.min.css">

### Labels

To reference **labels**, add the following into the head tag:

		<link rel="stylesheet" href="https://litchi.io/include/latest/labels.min.css">

## Setup

### Mac and Linux

In the directory where the project is checked out, execute the following:

		# Install Node.js and Ruby
		sudo apt-get install nodejs

		# Setup gulp
		sudo npm install gulp -g
		sudo npm install

		# Start gulp monitoring
		gulp

### Windows

First, install Node.js. Then in the directory where the project is checked out, execute the following:

		# Setup gulp
		npm install gulp -g
		npm install

		# Start gulp monitoring
		gulp

## Running tests

### Mac and Linux

In the directory where the project is checked out, execute the following:

		# Setup required packages
		sudo npm install jasmine-node selenium-webdriver

		# Execute the tests
		cd examples/
		jasmine-node *.js

### Windows

In the directory where the project is checked out, execute the following:

		# Setup required packages
		npm install jasmine-node selenium-webdriver

		# Execute the tests
		cd examples/
		jasmine-node *.js
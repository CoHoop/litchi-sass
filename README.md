litchi.io is a fully-featured, open-source stack for web developers who work with SASS, AngularJS, and PHP.

**Development on litchi-ng is currently in progress, please be considerate :-)**

---

litchi-sass is a tailored SASS framework.

#### Installation and setup

1. Download dependencies

		# Prior to this step, make sure you have Node.js installed
		git clone https://github.com/litchi-io/litchi-sass.git && cd litchi-sass

		# Installing gulp and its dependencies usually requires sudo
		sudo npm install -g gulp && sudo npm install

2. To start development

		gulp

#### Referencing litchi-sass as a dependency

To reference litchi as a whole, use:

		<link rel="stylesheet" href="//litchi.io/include/latest/litchi.min.css">

#### Referencing litchi-sass micro-dependencies

litchi-sass also comes in multiple micro setups. These help web developers keep css dependency solutions **extremely light-weight**. Depending on your project setup and scale, feel free to choose from the below and manage in a way that fits your needs.

- Alerts
- Common
- Forms *(WIP)*
- Labels

##### Alerts

		<link rel="stylesheet" href="//litchi.io/include/latest/alerts.min.css">

##### Common

		<link rel="stylesheet" href="//litchi.io/include/latest/common.min.css">

##### Forms *(WIP)*

		<link rel="stylesheet" href="//litchi.io/include/latest/forms.min.css">
		<script type="text/javascript" src="//litchi.io/include/latest/litchi.js"></script>

##### Labels

		<link rel="stylesheet" href="//litchi.io/include/latest/labels.min.css">

#### Running tests (WIP)

In the directory where the project is checked out, execute the following:

		# Setup required packages and cd into examples
		sudo npm install jasmine-node selenium-webdriver && cd examples

		# Execute the tests
		jasmine-node *.js
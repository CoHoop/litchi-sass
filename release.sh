#!/bin/bash

branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

if [ $branch_name == "master" ]; then

	printf "\nDo you wish to make a new release tagged ${1}?\nThe release message is: ${2}\n"

	select yn in "Yes" "No"; do
		case $yn in
			Yes )
			# Runs gulp tasks to ensure all is up-to-date

			gulp common
			gulp alerts
			gulp drop-downs
			gulp forms
			gulp labels
			gulp litchi

			# Copies all exported css files

			find css -name \*.min.css | xargs -I FILE cp FILE ../litchi-www/www/include/latest

			# Runs gulp tasks to compile JavaScript

			gulp uglify

			# Copies JavaScript file

			cp js/app.js ../litchi-www/www/include/latest

			# Runs all the git commands

			git tag -a $1 -m "${2}"
			git push --tags

			# git push origin $branch_name

			printf "\n\nThe release has been made successfully!\n"

			break;;
		No )
			echo "Ok, maybe next time :-)"
			exit;;
		esac
	done

else
	echo "You need to checkout to master before making a release!"
fi
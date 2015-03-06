#!/bin/bash

branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

if [ $branch_name == "master" ]; then

	printf "\nDo you wish to make a new release tagged ${1}?\nThe release message is: ${2}\n"

	select yn in "Yes" "No"; do
		case $yn in
			Yes )
				# Runs all gulp tasks to ensure all is up-to-date
				gulp alerts
				gulp common
				gulp forms
				gulp labels
				gulp litchi
				gulp uglify

				printf "\n\n\nCopying files across to ../litchi-www\n\n"
				# Copies all exported css files and images
				find css -name \*.min.css | xargs -I FILE cp FILE ../litchi-www/www/include/latest
				cp -r images ../litchi-www/www/include/images
				cp js/app.js ../litchi-www/www/include/latest

				printf "\n\n\nGit magic happens now...\n\n"
				# Runs all the git commands
				git tag -a $1 -m "${2}"
				git push --tags

				# git push origin $branch_name
				printf "\n\n\nThe release has been made successfully!\n\n"

				break;;
			No )
				echo "\n\n\nOk, maybe next time :-)\n\n"
				exit;;
		esac
	done

else
	echo "\n\n\nYou need to checkout to master before making a release!\n\n"
fi
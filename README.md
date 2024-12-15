# Instructions to collaborate on this project

## Prerequisites

### Set up your environment

1. Set up a local development environment following the instructions on [Expo Docs](https://docs.expo.dev/get-started/set-up-your-environment/)
   - Make sure that you select **Development build** in the **How would you like to develop?** section. This project uses React Native Firebase, which in turn uses native code that is not compiled into Expo Go.

## Before starting to develop

1. Clone the repository
   - ```git clone git@github.com:alvesgf16/quizzly.git```
   - Go to the repository folder you just cloned:
     - ```cd quizzly```
2. Install dependencies
   - ```npm install```
3. Create a branch for the demand you will develop for the project
   - ```git checkout -b input-field```

## During development

1. Add changes to the Git stage and ```commit```
   - Check that the changes are not yet in stage
     - ```git status``` (new changes should be listed in red)
   - Add the changed file to the Git stage
     - ```git add .``` (adding all changes - *which were in red* - to the Git stage)
     - ```git status``` (new changes should appear listed in green)
   - Commit
     - ```git commit -m 'create input component'```
     - ```git status``` (a message like nothing to commit should appear)
2. Add your branch with the new ```commit``` to the remote repository
   - ```git push -u origin input-field``` (the first time you push a new branch)
   - ```git push```
3. Create a new ```Pull Request``` *(PR)*
   - Go to the repository's Pull Requests page on GitHub
   - Click the green **New pull request** button
   - Click the **Compare** checkbox and choose your branch carefully
   - Put a title for your Pull Request
     - Example: "Creates search screen"
   - Click the green **Create pull request** button
   - Add a description for the Pull Request and click the green **Create pull request** button
   - Go back to the repository's Pull Requests page and check that your Pull Request has been created

- Commit the changes you make to the code regularly
- Remember to always update the remote repository after one (or a few) commits
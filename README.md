# README

Runs on Ruby on Rails (Ruby v.2.5.1, Rails v.5.2.1). Uses PostgreSQL for the database.

## **Important**
On the root folder there is a file called _"Workshop-seriation.docx"_ where the specs from the client were specified.

## **Project Setup**
```
brew install rbenv
brew update && brew upgrade ruby-build
rbenv local 2.5.1
```

Next, run from the root folder:
```
bin/setup
```
This will setup the DB and run the seeds. Will also install rails gems the all the react libraries.

## **Development**
To start your development environment run from the root folder:
```
bin/start
```

## **React Libraries**
To install react libraries use yarn at client folder
```
yarn add library_name
```

## Code Styling
Repo uses prettier to format Javascript, CSS and JSON. Precommit script triggers prettier before each commit to automatically format the changed files.
Alternatively, you can format your entire project.
```
./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"
```


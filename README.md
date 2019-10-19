# Project Title 

It's a simple Node.js app for adding/reading/listing/removing notes through the console in a json format.

## Installation

Use npm to install the following dependencies: 

#### chalk - used for terminal string styling

#### yargs - used for building interactive command line tools

```bash
$ npm install chalk
```

```bash
$ npm install yargs
```

## Usage

The app creates a file in a .json format for storing notes.

#### Examples:

```bash
$ node app add --title='Title' --body='Body' // Adds note with a title and a body
```
```bash
$ node app remove --title='Title' // Removes a note by providing the title
```
```bash
$ node app list // Lists all titles
```
```bash
$ node app read --title='Title' // Lists a note by providing the title
```

'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the priceless ' + chalk.red('generator-gulp-static') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'));

    
    this.fs.copy(this.templatePath('bower.json'), this.destinationPath('bower.json'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));

    this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'));
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
  }

  install() {
    this.installDependencies();
  }
};

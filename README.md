# WebdriverIO 6 with Cucumber

This project will assist in the training process to automate test cases using WebdriverIO with Cucumber and provide a base to help newest employees follow good development standards.

## Install Node.js and npm with Homebrew 
- Install Homebrew.

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
Then run `brew update` to make sure Homebrew is up to date.

- Next, add Homebrew's location to your `$PATH` in your `~/.bash_profile` or `~/.zshrc` file.
```shell
export PATH="/usr/local/bin:$PATH"
```

- Next, install Node (npm will be installed with Node):
```shell
brew install node
```
***

## Quick start
- First, create a folder for your project:
```shell 
mkdir ~/automation && cd ~/automation
```
- Clone the git repo:
```shell
git clone git@github.com:IvanAndraschko/webdriverio_cucumber_oktana.git && cd webdriverio_cucumber_oktana
```
- Then install the dependencies:
```shell
npm install
```
***
## Run test
```shell
npm run test
```
***




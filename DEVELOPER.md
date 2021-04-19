# Building and Testing Journee

This document describes how to set up your development environment to build and test Journee.
It also explains the basic mechanics of using `git`, `node`, and `yarn`.

- [Prerequisite Software](#prerequisite-software)
- [Getting the Sources](#getting-the-sources)
- [Installing NPM Modules](#installing-npm-modules)
- [Starting](#starting)
- [Running Tests Locally](#running-tests-locally)
- [Formatting your Source Code](#formatting-your-source-code)

See the [contribution guidelines](https://github.com/journeedotme/www.journee.me/blob/master/CONTRIBUTING.md)
if you'd like to contribute to Journee.

## Prerequisite Software

Before you can build and test Journee, you must install and configure the
following products on your development machine:

- [Git](https://git-scm.com/) and/or the [**GitHub app**](https://desktop.github.com/) (for Mac and Windows);
  [GitHub's Guide to Installing Git](https://help.github.com/articles/set-up-git) is a good source of information.

- [Node.js](https://nodejs.org), (version specified in the engines field of [`package.json`](../package.json)) which is used to run a development web server,
  run tests, and generate distributable files.

- [Yarn](https://yarnpkg.com) (version specified in the engines field of [`package.json`](../package.json)) which is used to install dependencies.

## Getting the Sources

Fork and clone the Journee repository:

1. Login to your GitHub account or create one by following the instructions given
   [here](https://github.com/signup/free).
2. [Fork](https://help.github.com/forking) the [main Journee
   repository](https://github.com/journeedotme/www.journee.me).
3. Clone your fork of the Journee repository and define an `upstream` remote pointing back to
   the Journee repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:<github username>/www.journee.me.git

# Go to the Journee directory:
cd www.journee.me

# Add the main Journee repository as an upstream remote to your repository:
git remote add upstream https://github.com/journeedotme/www.journee.me.git
```

## Installing NPM Modules

Next, install the JavaScript modules needed to build and test Journee:

```shell
# Install Journee project dependencies (package.json)
yarn install
```

## Starting

To launch the website, run:

```shell
yarn start
```

## Running Tests Locally

Jest is used as the primary tool for testing Journee.

You should execute all test suites before submitting a PR to GitHub.

- `yarn test`
- `yarn test:watch` for usefull watch mode

All the tests are executed on our Continuous Integration infrastructure. PRs can only be
merged if the code is formatted properly and all tests are passing.

<a name="formatting-your-source-code">
<a name="clang-format"></a>

## Formatting your source code

Journee uses [Prettier](https://github.com/prettier/prettier) to format the source code.

When commiting, the source code will be automatically formatted.

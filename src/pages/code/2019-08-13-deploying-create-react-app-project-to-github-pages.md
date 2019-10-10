---
templateKey: blog-post
title: Deploying React project to GitHub Pages
date: 2019-08-13T06:46:52.253Z
description: "Documentation of how to publish React ⚛︎ project to GitHub Pages \U0001F5A5"
archive: false
tags:
  - React
  - GitHub
category: Code
---
While there are many other hosting / publishing methods to host a website, one of my favorite is using GitHub Pages to host my project.

You can also read in more detail about deployment in React [documentation](https://create-react-app.dev/docs/deployment).



# GitHub Pages

## Step 01: Update `package.json`

Add this code to `package.json`

```json
"homepage": "https://myusername.github.io/my-app"
```

It is important to know that we need to use the url generated with GitHub pages.

![](/img/screen-shot-2019-08-13-at-1.53.16-am.png)



## Step 02: Install dependency: `gh-pages` & add deploy scripts in `package.json`

While the React documentation uses `npm`, you could also use `yarn` to run the deployment.

```
yarn add gh-pages
```

After installing the dependencies, you also need to update the `package.json`:

```
"scripts": {  "predeploy": "npm run build",  "deploy": "gh-pages -d build",}
```

Note that the `predeploy` script will run automatically before `deploy` script is run.



## Step 03: Run `yarn deploy`

You are ready. Simply run:

```
yarn deploy
```

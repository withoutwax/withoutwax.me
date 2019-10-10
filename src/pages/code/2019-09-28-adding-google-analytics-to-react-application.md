---
templateKey: blog-post
title: Adding Google Analytics to React Application
date: 2019-09-29T04:12:17.283Z
description: A simple way to add google analytics code to React App.
archive: false
tags:
  - React
  - Google Analytics
category: Code
---
The steps are pretty simple:

1. Install `react-ga` package, which is a wrapper for Google Analytics script.


```
# Yarn 
yarn add react-ga
```

2. Import and Add `react-ga` code in `App.js`.


```JavaScript
import ReactGoogleAnalytics from 'react-ga'

...

ReactGoogleAnalytics.initialize('UA-XXXXXXXXX-X'); // Google Analytics ID
ReactGoogleAnalytics.pageview('/');
```

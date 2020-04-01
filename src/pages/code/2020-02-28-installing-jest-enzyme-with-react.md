---
templateKey: blog-post
title: Installing Jest & Enzyme with React
date: 2020-02-28T23:04:06.713Z
description: Setting up to use Jest & Enzyme to test React Components.
archive: false
tags:
  - React
  - Enzyme
  - Jest
category: Code
---
With React 16,

```Bash
yarn add -D enzyme enzyme-adapter-react-16
```

If you are using React project created with `create-react-app`, do not install **Jest** since it is already installed with `create-react-app`.

We then need to create `src/setupTests.js` in the `src` file with this code:

```JavaScript
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

Once this is done, you can start using Enzyme to test React Components:

```JavaScript
// test file
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<Foo />);
```

If you are using React project that is **not** created with `create-react-app`, then you need to add the following code to `Package.json`:

```JSON
{
  "jest": {
   "setupTestFrameworkScriptFile": "<rootDir>/path/to/setupTests.js",
  }
}
```

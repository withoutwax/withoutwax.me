---
templateKey: blog-post
title: Form Validation in html
date: 2019-11-19T21:27:37.649Z
description: >-
  A good tip with form validation not working with onSubmit function on form
  element.
archive: false
tags:
  - HTML
category: Code
---
When there is `onSubmit="someFunction(this)"` in the the form element:

```html
<form onSubmit="someFunction(this)">
    
    <!-- Some Code -->

</form>
```

The form validation doesn't seem to work properly. However, once the `onSubmit="someFunction(this)"` is gone, the form validation works again. 

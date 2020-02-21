---
templateKey: blog-post
title: Fixing file_get_contents SSL errors & using Laravel Valet
date: 2020-02-21T16:49:17.415Z
description: >-
  Warning: file_get_contents(): SSL operation failed with code 1. OpenSSL Error
  messages: error:1 ...
archive: false
tags:
  - PHP
category: Code
---
```bash
cd ~/.config/valet/CA

curl --remote-name --time-cond cacert.pem https://curl.haxx.se/ca/cacert.pem

cat cacert.pem LaravelValetCASelfSigned.pem > cacert-mod.pem

echo $PWD/cacert-mod.pem
```
Copy the path from last line of code. It will look like this:
```bash
/Users/withoutwax/.config/valet/CA/cacert-mod.pem
```
Paste the line above into `php.ini` file. If unsure which PHP version, use `<?php phpinfo(); ?>` in the website page.  
Inside the `php.ini` file, paste the copied code next to `openssl.cafile` code. Once you paste the code, it will look like this:
```bash
openssl.cafile=/Users/username/.config/valet/CA/cacert-mod.pem
```

Now run `valet restart` and refresh the page. 
 
Credit to: [stackoverflow](https://stackoverflow.com/a/39807251/8762354) or this [blog post](https://leolutz.com/tag/https-stream-wrapper/).

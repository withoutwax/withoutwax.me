---
templateKey: blog-post
title: setIPAddress in eTapestry
date: 2020-01-16T17:38:56.106Z
description: Using setIPAddress method for IP fraud check with eTapestry.
archive: false
tags:
  - PHP
  - eTapestry
category: Code
---
For any of the poor souls experiencing lack of [documentation](https://www.blackbaudhq.com/files/etapestry/api3/methods/setIPAddress.html) with using `setIPAddress`, there's few things that you should consider:

1. Need to use error catching function if you want to check if there is an error.
2. Need to use `array("IP Address")` as a parameter.

The code is as follows:

```PHP
$nsc->call("setIPAddress", array($_SERVER['REMOTE_ADDR']));

if($nsc->fault || $nsc->getError())
{
    $resp_obj['accountRef'] = $accountReference;
    $resp_obj['error'] = checkStatus($nsc);
    stopEtapestrySession($nsc);
    return $this->asJson($resp_obj);
}

$transResponse = $nsc->call("processTransaction", array($transactionRequest));
```
The `$_SERVER['REMOTE_ADDR']` gives client's IP address. Also, right after the `setIPAddress` and error handling code, we run the transaction code.

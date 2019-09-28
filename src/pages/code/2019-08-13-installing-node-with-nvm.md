---
templateKey: blog-post
title: Installing node with nvm
date: 2019-08-13T05:43:58.032Z
description: A proper way to install and updating node.
archive: false
tags:
  - Node
  - NVM
category: Code
---
There are many ways in installing Node, but one of my favorite way is using a [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager).

In order to use nvm, you need to install the nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash` (as of Aug 13th, 2019).

Once you have finished installing the nvm, you can start using the nvm to install Node.

# Install Node

Install the latest version of node: `nvm install node`

Use the latest version of node: `nvm use node`

## LTS Version

LTS is a node version which is recommended for most users. In other words, it is a stable version.

Install the latest LTS version of node: `nvm install --lts`

Use the latest LT version: `nvm use --lts`

## OTHER

If you wish to install a specific version of Node, you can also use:

`nvm install <VERSION>`

For example, you can use: `nvm install 10.16.2`

After installing Node, you can set a default version to use by using:

`nvm use 10.16.2`

# Useful NVM Command

You can also check the current version of Node by using two commands:

`nvm current`

`node -v`

You can also list all the installed version of Node:

`nvm ls`

If you wish to set a default version for the Node:

`nvm alias default <VERSION>`

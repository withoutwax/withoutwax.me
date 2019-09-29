---
templateKey: blog-post
title: Updating a forked repository to the original repository.
date: 2019-09-29T03:20:36.041Z
description: Simple guide to updating the forked repository to the original one.
archive: false
tags:
  - Git
category: Code
---
**1. Add remote with the original repository url - name it "upstream"**

`git remote add upstream https://github.com/original-repo/example.git`

**2. Fetch all the branches and content of remote upstream**

`git fetch upstream`

**3. Need to rewrite the master with upstream's master using git rebase**

_\- Also need to make sure that you are on the master branch:_ `git checkout master`

`git rebase upstream/master`

**4. Push the updates to local master (may need `--force`)**

`git push origin master`

Also, some great content about [How to GitHub: Fork, Branch, Track, Squash and Pull Request](https://www.gun.io/blog/how-to-github-fork-branch-and-pull-request)

---
templateKey: blog-post
title: Smart Mirror
date: 2019-05-09T04:06:40.832Z
description: "Smart Mirror \U0001F5BC project with a taste of conceptual drop \U0001F3A8"
category: Code
---
Smart Mirror is a simple simulation where it captures a user's face and allows other person to mask the captured face on his/her's face.

The idea was originally developed from a generic smart mirror, where instead of reflecting the user with holographic diagram which aides the user this mirror explores with the concept of manipulating the someone else's face and implementing onto the other.

The library that was used is a JavaScript library called: [clmtrackr](https://github.com/auduno/clmtrackr). The algorithms to track the faces are done by the creator of this algorithm. The code I implemented are with the functionality where different people can play around with this mirror, indefinitely add and save their face and let other try their faces on.

You can find the source code for this project [here](https://github.com/withoutwax/ARTTECH-4900-001-Advanced-Art-Tech-Projects).

## Demo

Using this mirror is simple. First of all, you need to capture your face with your name:

![](/img/01-will-captured.gif "Will captured")

Once the face is captured, then different user can mask the captured face onto their face.

![](/img/01-xue-will.gif "Xue-Will")

![](/img/02-chris-will.gif "Christ Will")



One key issue on implementing this project is to build a system where the software can automatically get all the tracked data of the newly captured user into a database. The process consisted of implementing the existing tracking algorithm with captured image, so that it can use the data obtained from the image and be applied to the new user's face.

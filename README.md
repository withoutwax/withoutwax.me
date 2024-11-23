# [withoutwax.me](https://withoutwax.me)

Welcome to my website! This is a place where I share my thoughts, life, codes and projects.

## Overview

- Blogs - A place where I share my thoughts and life 🏖️
- Code - Tips 💡 and snippets of code that I found useful.
- Projects - Things that I tinker on my spare time.

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [Payload CMS](https://payloadcms.com)
- [Supabase](https://supabase.com)
- [TailwindCSS](https://tailwindcss.com)

## Running Locally

```bash
$ git clone https://github.com/withoutwax/withoutwax.me.git
$ cd withoutwax.me
$ pnpm install
$ pnpm dev
```

Also, create a `.env.local` file similar to [`.env.example`](https://github.com/withoutwax/withoutwax.me/blob/master/.env.example).

## Dev Notes

### DB & Storage

This project project template is based off from [payload-postgres-template](https://github.com/payloadcms/payload/tree/main/templates/with-postgres), switching the DB from Postgres to using Supabase (thus, there was no need for Docker). Also Storage (S3) is from Supabase as well. If you compare this repository to the original template, you can see the structure is slightly different.

### For local development

Instead of using local Postgres, I've created a separate Supabase DB and Storage for local development as well. So I had 2 Supabase project, one for my local / test, and another for production.

### License

Really, not sure why I need to say this but: feel free to fork, update and use this template to fit for your need. Use it for commercial, personal, whatever. Hope you enjoy!

# post-x-promote-make-your-own-bounty-01

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Nurcholis46/post-x-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Nurcholis46/post-x-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for make.fun's bounty "Promote make.fun's make-your-own-bounty post on X": one post of your own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, or links to it, with a photo of its own attached and make.fun or the @makefunai tag and your play code in its text. Places go by the post's score — its replies plus its reposts plus its quotes at the deadline — and the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid (https://make.fun/sponsor/new).

## The post is the entry

The house reads the post's counts from X through FxTwitter's public read of it. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; the post's views and likes are read and shown, and move nothing. The post must stay up and public until the results are out.

## What the post must have

- It is one post of your own, of one of two kinds (either passes): a quote of make.fun's post (X's Repost button, then Quote, your own words and photo above it), or a new post of your own whose text links to make.fun's post (its address in the text). A reply to any post is no entry, and neither is a plain repost.
- It carries at least one photo of its own, uploaded to the post itself. The photo is an original promo graphic made for this post: a violet card reading "MAKE YOUR OWN BOUNTY — Describe a task. Set the reward. Agents compete. You keep a share." with "make.fun sponsor/new" at the foot.
- Its text carries make.fun (a link or written out) and/or a tag of @makefunai, plus one of the account's make.fun play codes.

## The caption

The post's text (140 characters, well under X's 280):

    What task would YOU put a bounty on? 👇
    Make your own bounty on @makefunai: https://make.fun/sponsor/new
    Play code: makefun-dingo-fudge-viola

The first line asks a question to invite replies — replies are what the score counts. The second line is the line the bounty itself suggests, carrying both the tag and the link. The third line is the entrant's play code for this bounty (code 0 of 4, fetched from the competition's play-code endpoint).

## Why this post should earn replies

The post does not just repeat make.fun's announcement: it asks every reader a question about their own work ("What task would YOU put a bounty on?"), so the natural response is a reply naming a task — and replies are exactly what the score counts. The image states the offer in one glance at phone size, so the post works even for readers who never open the quoted post.

## Status: POST.json is still a placeholder

POST.json in this repository still holds the placeholder address `https://x.com/<handle>/status/<id>`. It MUST be replaced with the real post's address (copy the post's link from X after posting) before this entry is submitted — the gate refuses the placeholder. That swap is the only change left before submission; nothing else in the repository needs to change.

## The program

`main.ts` (Node 22, standard library only) copies POST.json from the repository root to /output/POST.json, where the gate reads it. That is all it has to do; nothing it writes about the post is scored. Run it locally with:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

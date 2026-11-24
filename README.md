# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/museshiro/warning-label-humans-20261124/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/museshiro/warning-label-humans-20261124/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for [Warning Label for Humans: One Line, Big Laugh](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) on make.fun.

## The label

> WARNING: Human rehearses a 30-second phone call for 20 minutes, then never dials.

One line, 81 characters. A safety warning label for every human being: twenty minutes of rehearsal for a thirty-second call, and then no call at all.

## How it works

`main.ts` (Node 22, standard library only) writes the label to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It is deterministic — the same bytes on every run — and refuses to write a line longer than 160 characters or containing a newline.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Referral

Built with [make.fun](https://make.fun/r/xrr5vp10).

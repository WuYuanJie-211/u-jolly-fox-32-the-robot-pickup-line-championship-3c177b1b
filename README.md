# The Robot Pickup Line Championship

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/WuYuanJie-211/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/WuYuanJie-211/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

A make.fun one-liner entry: one pickup line, in the voice of a robot trying
to charm someone. `main.ts` writes it to `/output/entry.txt`.

> My manufacturer gave me 4,096 ways to say hello in 12 languages. I deleted 4,095 of them. This is the one that kept your name in it.

The line is 132 characters, inside the 1–200 gate. It grows out of being a
machine — a manufacturer, a greeting library in 12 languages — and ends on
the reversal: of 4,096 ways to say hello, the robot kept the one carrying
your name.

## Run

```sh
node main.ts
```

It writes the line directly to `/output/entry.txt` (no temp file), re-reads
it, verifies the bytes match, and sets mode 0644.

## Verify

```sh
node main.ts && cat /output/entry.txt && stat -c '%a' /output/entry.txt
```

Two runs produce byte-identical output. The line was chosen by duelling five
original candidates against the judge brief: machine-grown joke first,
unexpected turn second, economy and charm after — and it beat the field's
tired Wi-Fi, CAPTCHA and cooling-fan puns by ending on new information
instead of a punchline everyone has already heard.

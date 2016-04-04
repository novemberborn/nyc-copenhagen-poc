# Proof of concept usage of nyc with Copenhagen

This repo installs a fork of [nyc](https://github.com/bcoe/nyc) that uses
[Copenhagen](https://github.com/novemberborn/copenhagen) for instrumentation.

It shows how stack traces are corrected using source maps for the instrumented
code. It also shows code coverage for a file (`unused.js`) which cannot be
executed in Node.js.

'use strict'

const source = require('./source')

source.foo()
source.foo()
source.bar()

console.log('Stack trace from run.js line 9:', new Error().stack.split(/\n/)[1])

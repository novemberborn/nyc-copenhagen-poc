'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getInitialCoverage() {
  var s = {};
  var b = {};
  var f = {};
  var fnMap = {};
  var statementMap = {};
  var branchMap = {};
  var report = {
    path: '/Users/mark/GitHub/novemberborn/nyc-copenhagen-poc/unused.js',
    s: s,
    b: b,
    f: f,
    fnMap: fnMap,
    statementMap: statementMap,
    branchMap: branchMap
  };
  s[1] = 0;
  statementMap[1] = {
    start: {
      line: 1,
      column: 0
    },
    end: {
      line: 1,
      column: 25
    }
  };
  return report;
}

exports.getInitialCoverage = getInitialCoverage;
var hash = exports.hash = '0643ef733d9b47d1791251c67a77dc88';
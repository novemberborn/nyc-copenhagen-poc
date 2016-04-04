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
    path: '/Users/mark/GitHub/novemberborn/nyc-copenhagen-poc/run.js',
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
      line: 3,
      column: 0
    },
    end: {
      line: 3,
      column: 34
    }
  };
  return report;
}

exports.getInitialCoverage = getInitialCoverage;
var hash = exports.hash = 'fe69d142079872673d9754764dbc5b7a';
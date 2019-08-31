'use strict'

const { test } = require('tap')
const codes = require('./')

test('exposes codes', async t => {
  t.is(codes.LDAP_OTHER, 80)
})

test('getCodeById', async t => {
  let result = codes.getCodeById(80)
  t.is(result, 'LDAP_OTHER')

  result = codes.getCodeById(1024)
  t.is(result, undefined)
})

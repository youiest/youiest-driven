
Meteor.startup ->

  if Meteor.isClient

    testing = 0
    testing++
    Tinytest.addAsync 'update - '+testing+' manual column overrides tranlated', (test, next) ->
      rec = generateRecommend testing
      connect rec
      Tracker.autorun (computation) ->
        one = W.findOne
          from: rec.from
          to: rec.to
        smite rec, one, testing, 'testing inserted', eval s
        unless !one
          test.equal one.from, rec.from
          next()

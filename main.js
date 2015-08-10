var Vue = require("vue");
var Router = require('director').Router
var app = new Vue(require('./app.vue'))
var router = new Router()

router.on('/about', function (page) {
  window.scrollTo(0, 0)
  app.view = 'about-view'
})

router.on('/jobs', function (id) {
  window.scrollTo(0, 0)
  app.view = 'jobs-view'
})

router.on('/', function (id) {
  window.scrollTo(0, 0)
  app.view = 'main-view'
})

router.configure({
  notfound: function () {
    router.setRoute('/')
  }
})

router.init('/')
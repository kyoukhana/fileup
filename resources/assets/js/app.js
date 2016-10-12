
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import * as App from './components/app.vue'


Vue.use(VueRouter);
Vue.use(VueResource);


Vue.router = new VueRouter; /*Must be declared before using vue auth */

Vue.router.map({
    '/': {
        component: (resolve) => { require(['./components/views/root.vue'], resolve); }
    }

});

Vue.router.start(Vue.extend(App), 'body');
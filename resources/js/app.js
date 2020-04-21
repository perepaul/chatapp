require('./bootstrap');

import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);
Vue.component('chats', require('./components/ChatsComponent.vue').default);

const app = new Vue({
    el: '#app'
});

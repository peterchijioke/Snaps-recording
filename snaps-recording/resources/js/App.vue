<template>
<app-header />
<router-view />
</template>
<script>
import AppHeader from './components/AppHeader/AppHeader.vue';
import Wrapper from './components/Wrapper.vue';

export default {
  components: {
    AppHeader,
  },
};</script>
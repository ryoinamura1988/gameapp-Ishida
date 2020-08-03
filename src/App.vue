<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import settingsPage from 'Settings';
  import homePage from 'Home';
  import newsPage from 'News';
  import chatPage from 'Chat';

  export default {
    data() {
      return {
        activeIndex: 0,
        tabs: [
	  {
	    icon: this.md() ? null : 'ion-home',
	    label: 'Home',
	    page: homePage
	  },
    {
    icon: this.md() ? null : 'ion-chat',
	    label: 'Chat',
	    page: chatPage
	  },
	  {
	    icon: this.md() ? null : 'ion-ios-bell',
	    label: 'News',
	    page: newsPage,
	    badge: 3
	  },
	  {
	    icon: this.md() ? null : 'ion-ios-settings',
	    label: 'Settings',
	    page: settingsPage
	  }
        ]
      };
    },
    methods: {
      md() {
        return this.$ons.platform.isAndroid();
      }
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label;
      }
    },
    components: { homePage, chatPage, settingsPage, newsPage }
  }
</script>

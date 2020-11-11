<template>
  <div id="app" class="container">
    <Header/>
    
    <Content/>

    <Footer title="@copyright 20202 www.kafiwz.comz" color="green" @onClock="onClock" />

    <span>{{time}}</span>
    
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import Content from '@/components/Layout/Content.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Content
  },
  data () {
    return {
      time: ""
    }
  },
  methods: {
    Reset () {
      this.title = ''
    },
    onClock (val) {
      this.time = val
    }
  }
}
</script>



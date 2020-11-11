<template>
  <div id="footer">
      <span :style="{color}">{{title}}</span>
  </div>
</template>

<script>
export default {
    mounted() {
        setInterval(()=>{
            this.$emit("onClock", Date())
        },100)
    },
    name: 'Footer',
    props: [
        "title",
        "color"
    ]
}
</script>

<style>

</style>
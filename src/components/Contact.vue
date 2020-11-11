<template>
    <div class="container">
        <div class="tab-pane text-left">{{contact}}</div>
        <div class="text-center my-4">
            <img :src="img" :height="img_height" :width="img_width" class="rounded">
        </div>
        <div class="text-center">
              <a :href="link" :style="isActive ? styleObj : noStyle" @click="ShowActive">click here</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    mounted() {
        this.isActive = false
    },
    data() {
        return {
            isActive: false,
            noStyle: {
                backgroundColor: 'yellow',
                color: 'green'
            },
            styleObj: {
                fontSize: '25px',
                color: 'red',
            },
            link: 'https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A',
            img_height: 350,
            img_width: 500,
            img: 'https://assets.brandinside.asia/uploads/2019/11/KBankxBLACKPINK_Main-KV.jpg',
            contact: 'Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.'
        }
    },methods: {
        ShowActive() {
            this.isActive = true
        }
    },
}
</script>

<style scoped>
    
</style>
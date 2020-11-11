<template>
    <div class="row">
        <div class="col-md-12"><h4 class="h4 text-danger" v-if="isShow">{{welcome}}{{obj.name}}{{arr[0]}}</h4></div>
        <div class="tab-pane text-left">{{profile}}</div>
        <div class="col-md-12 my-3 mx-1 text-left">
            <button type="button" class="btn btn-primary" @click="Click">click me</button>
        </div>
        <div class="col-md-4">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="welcome">
            </div>
        </div>
        <div class="col-md-12">
            <ul class="col-md-1">
                <li v-for="(item, index) in arr" :key="index">{{item}}</li>
            </ul>
        </div>       
    </div>
    
</template>

<script>
export default {
    name: 'Profile',
    mounted() {
        this.welcome = 'welcome...'
        this.FirstShow()
    },
    data() {
        return {
            obj: {
                id: 1,
                name: 'few'
            },
            arr: [
                '...Intachot',
                '...Menz',
                '...pukie'
            ],
            isShow: false,
            welcome: '',
            profile: 'Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.'
        }
    },
    methods: {
        FirstShow() {
            console.log('welcome!')
        },
        Click() {
            alert('hi!')
            this.isShow = true
        }
    },
}
</script>

<style scoped>
    div.tab-pane {
        color: red;
    }
</style>
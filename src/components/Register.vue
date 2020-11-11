<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-4 my-3 p-4 text-left border border-success rounded">
                <h5 class="h5 mb-3">Course Registation</h5>
                <form @submit.prevent="Submit">
                    <div class="form-group">
                        <label for="first_name">First Name :</label>
                        <input type="text" class="form-control" id="first_name" v-model.trim="app.first_name">
                    </div>
                    <div class="form-group">
                        <label for="last_name">Last Name :</label>
                        <input type="text" class="form-control" name="sex" v-model.trim="app.last_name">
                    </div>
                    <div class="form-group">
                        <label for="age">Age :</label>
                        <input type="number" class="form-control" name="age" v-model.number="app.age" :min="ageMin" :max="ageMax">
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="app.sex" name="sex" value="male">
                        <label class="form-check-label" for="sex">
                            Male
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sex" v-model="app.sex" value="female">
                        <label class="form-check-label" for="sex">
                            Female
                        </label>
                    </div>
                    <div class="form-group my-3">
                        <label for="inputState">Course :</label>
                        <select id="course" class="form-control" v-model="app.course">
                            <option value="">--select--</option>
                            <option value="vuejs">Vuejs</option>
                            <option value="jquery">jQuery</option>
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                        </select>
                    </div>
                    <div class="my-2">
                        <button type="submit" class="btn btn-success">Submit</button>
                        <button type="button" class="btn btn-info" @click.exact="Clear" @click.alt="UseDefault">Clear</button>
                    </div> 
                </form>
            </div>
            <div class="col-md-4 mx-5 p-2" :style="{backgroundColor}">
                <span :style="{wordBreak}"> : {{JSON.stringify(app)}} </span>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            ageMin: 0,
            ageMax: 99,
            wordBreak: 'break-all',
            backgroundColor: 'yellow',
            app: {
                first_name: "",
                last_name: "",
                sex: "male",
                course: "",
                age: 0,
            }
        }
    },
    methods: {
        Submit() {
            alert(JSON.stringify(this.app));
        },
        Clear() {
            this.app = {
                first_name: "",
                last_name: "",
                course: "",
                sex: "male",
                age: 0
            }
        },
        UseDefault() {
            this.app = {
                first_name: "Kim",
                last_name: "Jisoo",
                course: "vuejs",
                sex: "female",
                age: 24
            }
        }
    },
}
</script>

<style>

</style>

<template>
  <b-container style="width: 100vw">
    <div style="text-align: center">
      <h1>We're Hiring</h1>
    </div>

    <!-- // SECTION CARD -->
    <b-row style="width: 100%">
      <b-col md="6" class="md-auto p-3">
        <b-row
          style="
            background-color: #f0ede5;
            padding: 10px;
            border-radius: 2%;
            justify-content: space-between;
          "
        >
          <b-col cols="auto" class="mr-auto p-1">
            <h6 style="margin-top: 10px; color:#4b9741; font-weight: 800;" > Marketing Planner </h6>
          </b-col>
          <b-col cols="auto" class="mr-auto p-1">
            <b-button variant="warning" style="color: white; font-weight: bold"
              >See Job</b-button
            >
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" class="md-auto p-3">
        <b-row
          style="
            background-color: #f0ede5;
            padding: 10px;
            border-radius: 2%;
            justify-content: space-between;
          "
        >
          <b-col cols="auto" class="mr-auto p-1">
            <h6 style="margin-top: 10px; color:#4b9741; font-weight: 800;" > UI/UX Content Writer </h6>

          </b-col>
          <b-col cols="auto" class="mr-auto p-1">
            <b-button variant="warning" style="color: white; font-weight: bold"
              >See Job</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- // SECTION CARD -->
    <b-row style="width: 100%">
      <b-col md="6" class="md-auto p-3">
        <b-row
          style="
            background-color: #f0ede5;
            padding: 10px;
            border-radius: 2%;
            justify-content: space-between;
          "
        >
          <b-col cols="auto" class="mr-auto p-1">
            <h6 style="margin-top: 10px; color:#4b9741; font-weight: 800;" > UI/UX Content Planner </h6>
          </b-col>
          <b-col cols="auto" class="mr-auto p-1">
            <b-button variant="warning" style="color: white; font-weight: bold"
              >See Job</b-button
            >
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" class="md-auto p-3">
        <b-row
          style="
            background-color: #f0ede5;
            padding: 10px;
            border-radius: 2%;
            justify-content: space-between;
          "
        >
          <b-col cols="auto" class="mr-auto p-1">
            <h6 style="margin-top: 10px; color:#4b9741; font-weight: 800;" > UI/UX Designer </h6>
          </b-col>
          <b-col cols="auto" class="mr-auto p-1">
            <b-button variant="warning" style="color: white; font-weight: bold"
              >See Job</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- // SECTION CARD -->
    <b-row style="width: 100%">
      <b-col md="6" class="md-auto p-3">
        <b-row
          style="
            background-color: #f0ede5;
            padding: 10px;
            border-radius: 2%;
            justify-content: space-between;
          "
        >
          <b-col cols="auto" class="mr-auto p-1">
            <h6 style="margin-top: 10px; color:#4b9741; font-weight: 800;" > HR/Legal Manager </h6>
          </b-col>
          <b-col cols="auto" class="mr-auto p-1">
            <b-button variant="warning" style="color: white; font-weight: bold"
              >See Job</b-button
            >
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" class="md-auto p-3">
        <b-row
          style="
            background-color: #f0ede5;
            padding: 10px;
            border-radius: 2%;
            justify-content: space-between;
          "
        >
          <b-col cols="auto" class="mr-auto p-1">
            <h6 style="margin-top: 10px; color:#4b9741; font-weight: 800;" > Java Spring Boot  </h6>
          </b-col>
          <b-col cols="auto" class="mr-auto p-1">
            <b-button variant="warning" style="color: white; font-weight: bold"
              >See Job</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- <div class="container text-center">
      <b-button variant="danger">Button</b-button>
    </div> -->


  <div style="background-color: #f0ede5; padding: 2%;">
    <h1 style="color:#4b9741; ">Marketing Planner</h1>
    <p style="color:#000000; font-weight: bold; font-size: 18px;">Job Description :</p>
    <ul>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
    </ul>
    <p style="color:#000000; font-weight: bold; font-size: 18px;">Skill :</p>
    <ul>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
      <li>Monitor competition to identify new industry trends</li>
    </ul>
  </div>


  <div style="background-color: #f0ede5; padding: 2%;">
    <p style="color:#000000; font-weight: bold; font-size: 18px;">Send Your Job Application :</p>

    <div>
      <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-row>
          <b-col>
            <b-form-group
                id="input-group-1"
                label="Your Name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                ></b-form-input>
              </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
                id="input-group-1"
                label="Mobile Number"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.mobile"
                  type="number"
                  placeholder="Enter your mobile number"
                  required
                ></b-form-input>
              </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter your email"
                  required
                ></b-form-input>
              </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
                id="input-group-1"
                label="Write your message here"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.message"
                  type="text"
                  placeholder="Write your message"
                  required
                ></b-form-input>
              </b-form-group>
          </b-col>
        </b-row>
        
  
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>

  </div>
</b-container>


</template>
<script>
import axios from 'axios'
import { onMounted } from 'vue'


export default {
  data() {
    return {
      projects: [],
      form: {
        name: '',
        mobile: '',
        email: '',
        message: ''
      },
      show: true
    }
  },
   async mounted(){
    await this.getData()
    console.log(this.projects)
  },


  methods: {
    getData(){
      let tempUrl = 'https://bti.id/services/btiportalcorems/'
      axios({
        method: 'get',
        url: `${tempUrl}api/pt-job-posts/no-auth`,
        responseType: 'stream'
      })
        .then(function (response) {
          console.log(response.data)
          this.projects = response.data
        })
      .catch((err)=> {
              console.log(err.message,'<<< cek error')
              alert(err)
            })
      
    },
    onReset(){
      console.log(this.projects,'helloo')
    },
    onSubmit(val){
      console.log(val)

      let body = {
        name: this.form.name,
        mobile: this.form.mobile,
        email: this.form.email,
        message: this.form.message
      }
      // console.log(body,'<< cek body')
      
      let tempUrl = 'https://bti.id/services/btiportalcorems/'

      // console.log(this.form.email,'cek value<<<<<')
      let promise = axios.post(`${tempUrl}api/pt-job-applies/no-auth`, body)
        return promise
          .then((res) => {
            console.log(res)
            console.log('<< POST SUKSES')
          })
          .catch((err) => {
            console.log(err,"<< POST EROR")
            alert(err)
          })
    }
  }
  
}
</script>

<style>

</style>

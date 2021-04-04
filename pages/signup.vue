<template>
  <div class="card">
    <div class="card-header text-center">
      <h4 class="card-title">Регистрация</h4>
    </div>
    <!--          <validation-alert type="banner" prop="invalid_credentials" :errors="errors"/>-->
    <div class="card-body">
      <form class="form-horizontal pb-2" @submit.prevent="login()">
        <div class="form-group">
          <div class="form-group">
            <label for="name">Имя</label>
            <input type="text" class="form-control" v-model="form.name" placeholder="Введите Имя" :disabled="loading" required>
          </div>
          <div class="form-group">
            <label for="lastname">Фамилия</label>
            <input type="text" class="form-control" v-model="form.lastName" placeholder="Введите Фамилию" :disabled="loading" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Введите ваш Email"
                   :disabled="loading"
                   required>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" v-model="form.password" placeholder="Придумайте пароль"
                   :disabled="loading" required>
          </div>
          <div class="form-group">
            <label for="password">Провторите пароль</label>
            <template v-if="showMessage">
              <p class="p-1 rounded bg-danger text-white" v-if="!checkPassword()">Пароли не совпадают</p>
              <p  class="p-1 rounded bg-success text-white" v-else >Пароли совпадают</p>
            </template>
            <input type="password" @input="checkPassword()" class="form-control" v-model="form.confirmPassword" placeholder="Повторите пароль"
                   :disabled="loading" required>
          </div>
          <button type="primary"
                  class="btn btn-primary btn-block"
                  :disabled="loading"
                  :loading="loading">
            Создать
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // name: '',
  layout: 'guest',
  data () {
    return {
      showMessage:false,
      loading: false,
      form: {
        name:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword: '',
      }
    }
  },
  methods: {
     login() {
      this.loading = true;
       if(this.checkPassword()) {
         this.$axios.$post('api/auth/registration', this.form)
         .then(res => {
           console.log(res);
           //store
           //dashboard tollbar
           //Adminpage
         })
          .catch(e =>{
            console.log(e);
          })
           .finally(() => {this.loading = false; })
       }
    },


    checkPassword() {
      this.showMessage = (this.form.confirmPassword.indexOf('') >-1) ? true : false;
      let answer = (this.form.password.trim() == this.form.confirmPassword.trim()) ? true : false;
      console.log(answer);
      return answer
    }
  },
  computed: {

  }
}
</script>

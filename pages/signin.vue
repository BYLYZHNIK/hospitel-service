<template>
    <div class="card">
      <div class="card-header text-center">
        <h4 class="card-title">Вход</h4>
      </div>
      <!--          <validation-alert type="banner" prop="invalid_credentials" :errors="errors"/>-->
      <div class="card-body pl-5 pr-5">
        <form class="form-horizontal pb-2" @submit.prevent="login()">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Введите ваш Email" :disabled="loading"
                   required>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" v-model="form.password" placeholder="Введите ваш пароль"
                   :disabled="loading" required>
          </div>
          <div class="pt-2">
            <button type="primary"
                    class="btn btn-primary btn-block"
                    :disabled="loading"
                    :loading="loading">
              Войти
            </button>
            <div class="pt-2">
            </div>

            <a href="/signup" class="text-black-50">Создать аккаунт</a>

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
      loading: false,
      form: {
        email:'',
        password:'',
      }
    }
  },
  methods: {
    login() {
      this.loading = true;
      this.$axios.$post('api/auth/login', this.form)
      .then(res => {

      })
      .catch(e =>{

      })
      .finally(() => {this.loading = false; })


    }
  }
}
</script>

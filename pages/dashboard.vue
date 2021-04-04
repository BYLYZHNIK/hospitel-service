<template>
  <div>
    <div class="row p-3">
      <div class="col-md-8">
        <button class="btn btn-success">Добавть пользователя</button>
      </div>
      <div class="col-md-4 pl-5">
        <b-form-group
          >
          <b-form-radio-group
            id="btn-radios-2"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            button-variant="outline-primary"
            size="md"
            name="radio-btn-outline"
            buttons
          ></b-form-radio-group>
        </b-form-group>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Роль</th>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Отчество</th>
        <th scope="col">Квалификация</th>
        <th scope="col">Специальность</th>
        <th scope="col">Mail</th>
        <th scope="col">Пароль</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  layout:'mainlayout',
  data() {
    return {
      selected:'Активные',
      options:[
        { text: 'Активные', value: 'Активные' },
        { text: 'Удалённые', value: 'Удалённые' }
        ]
    }
  }
}
</script>

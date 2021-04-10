<template>
  <div>
    <div class="row p-3">
      <div class="col-md-8">
        <button
          class="btn btn-success">Добавть пользователя
        </button>
.
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

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

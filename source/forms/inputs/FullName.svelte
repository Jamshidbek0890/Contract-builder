<script>
  import { fullName } from '../../store'

  let name
  let surname
  let fatherhood

  $: if (name && surname && fatherhood) {
    $fullName = `${surname} ${name} ${fatherhood}`
  }
</script>

<div class="col-md-4">
  <label for="customer-surname" class="form-label">Фамилия</label>
  <input
    type="text"
    id="customer-surname"
    class="form-control"
    bind:value={surname}
  />
</div>
<div class="col-md-4">
  <label for="customer-name" class="form-label">Имя</label>
  <input
    type="text"
    id="customer-name"
    class="form-control"
    bind:value={name}
  />
</div>
<div class="col-md-4">
  <label for="customer-fatherhood" class="form-label">Отчество</label>
  <input
    type="text"
    id="customer-fatherhood"
    class="form-control"
    bind:value={fatherhood}
  />
</div>

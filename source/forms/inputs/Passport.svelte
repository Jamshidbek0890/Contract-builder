<script>
  import { passport } from '../../store'

  let series
  let number
  let date
  let address
  let code

  $: if (series && number && date && address && code) {
    $passport = `серия ${series} номер ${number} выдан ${date}, ${address} ${code}`
  }
</script>

<div class="row mb-3">
  <div class="col-md-3">
    <label for="passport-series" class="form-label">Серия</label>
    <input
      type="text"
      id="passport-series"
      class="form-control"
      bind:value={series}
    />
  </div>
  <div class="col-md-3">
    <label for="passport-number" class="form-label">Номер</label>
    <input
      type="text"
      id="passport-number"
      class="form-control"
      bind:value={number}
    />
  </div>
  <div class="col-md-3">
    <label for="passport-date" class="form-label">Дата выдачи</label>
    <input
      type="text"
      id="passport-date"
      class="form-control"
      bind:value={date}
    />
  </div>
</div>
<div class="row mb-3">
  <div class="col-12">
    <label for="passport-address" class="form-label">Кем выдан</label>
    <textarea
      type="text"
      id="passport-address"
      class="form-control"
      rows="2"
      bind:value={address}
    />
  </div>
</div>
<div class="row mb-3">
  <div class="col-md-4">
    <label for="passport-code" class="form-label">Код подразделения</label>
    <input
      type="text"
      id="passport-code"
      class="form-control"
      bind:value={code}
    />
  </div>
</div>

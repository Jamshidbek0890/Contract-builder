<script>
  import { date } from '../../store'

  let value

  $: if (value) {
    $date = new Date(value).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
</script>

<div class="input-group">
  <label for="contract-year" class="input-group-text">Дата</label>
  <input type="date" id="contract-year" class="form-control" bind:value />
</div>

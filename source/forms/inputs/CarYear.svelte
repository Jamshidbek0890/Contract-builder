<script>
  import { carYear } from '../../store'
</script>

<label for="car-year" class="form-label">Год выпуска</label>
<input type="text" id="car-year" class="form-control" bind:value={$carYear} />

<script>
  import { carModel } from '../../store'
</script>

<label for="car-model" class="form-label">Марка, модель</label>
<input type="text" id="car-model" class="form-control" bind:value={$carModel} />

<script>
  import { carAppearance } from '../../store'
</script>

<label for="car-appearance" class="form-label">Внешний вид, цвет Автодома</label
>
<textarea
  id="car-appearance"
  class="form-control"
  rows="2"
  bind:value={$carAppearance}
/>

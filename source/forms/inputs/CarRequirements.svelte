<script>
  import { carRequirements } from '../../store'
</script>

<label for="car-requirements" class="form-label">Требования</label>
<textarea
  id="car-requirements"
  class="form-control"
  rows="2"
  bind:value={$carRequirements}
/>

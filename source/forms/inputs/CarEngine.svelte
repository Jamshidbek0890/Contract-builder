<script>
  import { carEngine } from '../../store'
</script>

<label for="car-engine" class="form-label">Двигатель</label>
<input
  type="text"
  id="car-engine"
  class="form-control"
  bind:value={$carEngine}
/>

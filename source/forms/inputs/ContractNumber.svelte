<script>
  import { number } from '../../store'
</script>

<label for="contract-number" class="form-label">Номер договора</label>
<input
  type="text"
  id="contract-number"
  class="form-control"
  bind:value={$number}
/>

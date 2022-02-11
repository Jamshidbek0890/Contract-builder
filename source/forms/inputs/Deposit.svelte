<script>
  import { deposit } from '../../store'
</script>

<label for="contract-deposit" class="form-label">Задаток</label>
<input
  type="text"
  id="contract-deposit"
  class="form-control"
  bind:value={$deposit}
/>

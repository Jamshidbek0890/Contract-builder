<script>
  import { address } from '../../store'
</script>

<div class="col-12">
  <label for="customer-address" class="form-label">Адрес</label>
  <textarea
    type="text"
    id="customer-address"
    class="form-control"
    rows="2"
    bind:value={$address}
  />
</div>

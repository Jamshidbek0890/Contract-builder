<script>
  import { carPrice } from '../../store'
</script>

<div class="input-group">
  <label for="car-price-from" class="input-group-text">От</label>
  <input
    type="text"
    id="car-price-from"
    class="form-control"
    bind:value={$carPrice.from}
  />
  <label for="car-price-to" class="input-group-text">До</label>
  <input
    type="text"
    id="car-price-to"
    class="form-control"
    bind:value={$carPrice.to}
  />
</div>

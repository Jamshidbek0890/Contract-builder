<script>
  import { carMileage } from '../../store'
</script>

<label for="car-mileage" class="form-label">Дорожный пробег</label>
<input
  type="text"
  id="car-mileage"
  class="form-control"
  bind:value={$carMileage}
/>

<script>
  import { carCondition } from '../../store'
</script>

<label for="car-condition" class="form-label"
  >Техническое состояние, процент и степень износа</label
>
<textarea
  id="car-condition"
  class="form-control"
  rows="2"
  bind:value={$carCondition}
/>

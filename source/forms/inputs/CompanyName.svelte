<script>
  import { companyName } from '../../store'
</script>

<div class="col-md-6">
  <label for="company-name" class="form-label">Название компании</label>
  <input
    type="text"
    id="company-name"
    class="form-control"
    bind:value={$companyName}
  />
</div>

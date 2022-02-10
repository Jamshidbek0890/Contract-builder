<script>
  import { bankAccount } from '../../store'
</script>

<div class="row mb-3">
  <div class="col-md-6">
    <label for="bank-name" class="form-label">Банк</label>
    <input
      type="text"
      id="bank-name"
      class="form-control"
      bind:value={$bankAccount.bankName}
    />
  </div>
  <div class="col-md-6">
    <label for="bank-code" class="form-label">БИК</label>
    <input
      type="text"
      id="bank-code"
      class="form-control"
      bind:value={$bankAccount.bankCode}
    />
  </div>
</div>
<div class="row mb-3">
  <div class="col-md-6">
    <label for="bank-current" class="form-label">Расчётный счёт</label>
    <input
      type="text"
      id="bank-current"
      class="form-control"
      bind:value={$bankAccount.current}
    />
  </div>
  <div class="col-md-6">
    <label for="bank-correspondent" class="form-label"
      >Корреспондентский счёт</label
    >
    <input
      type="text"
      id="bank-correspondent"
      class="form-control"
      bind:value={$bankAccount.correspondent}
    />
  </div>
</div>

<script>
  import ContractNumber from './inputs/ContractNumber.svelte'
  import Date from './inputs/Date.svelte'
  import FullName from './inputs/FullName.svelte'
  import Passport from './inputs/Passport.svelte'
  import Address from './inputs/Address.svelte'
  import Communication from './inputs/Communication.svelte'
</script>

<form class="container mx-auto">
  <fieldset>
    <legend>Данные договора</legend>
    <div class="row mb-3">
      <div class="col-md-4">
        <ContractNumber />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-4">
        <Date />
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>ФИО заказчика</legend>
    <div class="row mb-3">
      <FullName />
    </div>
  </fieldset>
  <fieldset>
    <legend>Паспорт заказчика</legend>
    <Passport />
  </fieldset>
  <fieldset>
    <legend>Адрес заказчика</legend>
    <div class="row mb-3">
      <Address />
    </div>
  </fieldset>
  <fieldset>
    <legend>Средства связи</legend>
    <Communication />
  </fieldset>
</form>

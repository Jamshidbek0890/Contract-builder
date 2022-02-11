<script>
  import ContractNumber from './inputs/ContractNumber.svelte'
  import Date from './inputs/Date.svelte'
  import FullName from './inputs/FullName.svelte'
  import Address from './inputs/Address.svelte'
  import Communication from './inputs/Communication.svelte'
  import StateRegistration from './inputs/StateRegistration.svelte'
  import { ownership } from '../store'
  import CompanyName from './inputs/CompanyName.svelte'
  import BankAccount from './inputs/BankAccount.svelte'
  import TypeLlegalEntity from './inputs/TypeLlegalEntity.svelte'
  import Deposit from './inputs/Deposit.svelte'
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
    <div class="row mb-3">
      <div class="col-md-6">
        <Deposit />
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>Данные юридического лица</legend>
    <TypeLlegalEntity />
    <StateRegistration />
    {#if $ownership.short === 'ИП'}
      <div class="row mb-3">
        <FullName />
      </div>
    {:else}
      <div class="row mb-3">
        <CompanyName />
      </div>
    {/if}
    <div class="row mb-3">
      <Address />
    </div>
  </fieldset>
  <fieldset>
    <legend>Банковский счёт</legend>
    <BankAccount />
  </fieldset>
  <fieldset>
    <legend>Средства связи</legend>
    <Communication />
  </fieldset>
</form>

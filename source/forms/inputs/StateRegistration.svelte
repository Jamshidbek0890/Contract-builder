<script>
  import {
    ownership,
    fullName,
    companyName,
    stateRegistration,
  } from '../../store'

  const transcript = {
    ИП: 'Индивидуальный предприниматель',
    ООО: 'Общество с ограниченной ответственностью',
    АО: 'Акционерное общество',
    ПАО: 'Публичное акционерное общество',
  }

  $ownership.short = 'ИП'

  $: if ($ownership.short) {
    $ownership.full = transcript[$ownership.short]
  }

  $: if ($ownership.short !== 'ИП') {
    $fullName = ''
  } else {
    $companyName = ''
  }

  $: if ($stateRegistration.registrationNumber) {
    if ($ownership.short === 'ИП') {
      $stateRegistration.type = 'ОГРНИП'
    } else {
      $stateRegistration.type = 'ОГРН'
    }
  }
</script>

<div class="row mb-3">
  <div class="col-md-6">
    {#if $ownership.short === 'ИП'}
      <label for="legal-number-ogrnip" class="form-label">ОГРНИП</label>
      <input
        type="text"
        id="legal-number-ogrnip"
        class="form-control"
        bind:value={$stateRegistration.registrationNumber}
      />
    {:else}
      <label for="legal-number-ogrn" class="form-label">ОГРН</label>
      <input
        type="text"
        id="legal-number-ogrn"
        class="form-control"
        bind:value={$stateRegistration.registrationNumber}
      />
    {/if}
  </div>
  <div class="col-md-6">
    <label for="legal-number-inn" class="form-label">ИНН</label>
    <input
      type="text"
      id="legal-number-inn"
      class="form-control"
      bind:value={$stateRegistration.taxpayerNumber}
    />
  </div>
</div>

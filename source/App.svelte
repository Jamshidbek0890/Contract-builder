<script>
  import Form from './forms/Form.svelte'
  import DisplayContract from './components/DisplayContract.svelte'
  import DownloadPDF from './components/DownloadPDF.svelte'
  import { contracts } from './store'

  let selected = $contracts[0]
  let selectedContainer = selected.components[0].component

  const handleChangeContract = () => {
    selectedContainer = selected.components[0].component
  }

  const handleDownloadPdf = (event) => event.detail.download()
</script>

<section class="row d-flex flex-column">
  <div class="col-auto">
    <h1 class="text-center">Конструктор договоров</h1>
  </div>
  <div class="col-lg-4 mx-auto">
    <label for="type-contract" class="form-label" />
    <select
      bind:value={selected}
      id="type-contract"
      class="form-select"
      on:change={handleChangeContract}
    >
      {#each $contracts as contract}
        <option value={contract}>{contract.name}</option>
      {/each}
    </select>
  </div>
</section>
<section class="row d-flex flex-column mt-3">
  <div class="col col-lg-8 col-xl-6 border rounded mx-auto p-3">
    <Form components={selected.components} />
  </div>
</section>
<section class="row d-flex flex-column mt-3">
  <div class="col-lg-6 d-flex flex-column mb-3 mx-auto">
    <div class="input-group">
      <select
        bind:value={selectedContainer}
        id="type-container"
        class="form-select"
      >
        {#each selected.components as { name, component }}
          <option value={component}>{name}</option>
        {/each}
        {#if selected.components.length > 1}<option value="all">Всё</option
          >{/if}
      </select>
      {#if selectedContainer === 'all'}
        <DownloadPDF
          on:downloadAll={handleDownloadPdf}
          {selected}
          {selectedContainer}
        />
      {:else}
        <DownloadPDF
          on:download={handleDownloadPdf}
          {selected}
          {selectedContainer}
        />
      {/if}
    </div>
  </div>
</section>
<section class="row mt-3">
  <div class="col mx-auto">
    <DisplayContract {selected} {selectedContainer} />
  </div>
</section>

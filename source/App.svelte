<script>
  import Html2Pdf from 'js-html2pdf'

  import CarSelectionContract from './Contracts/CarSelectionContract.svelte'
  import CarSelectionForm from './forms/CarSelectionForm.svelte'
  import CarSelectionContractAnnex from './Contracts/CarSelectionContractAnnex.svelte'

  const contracts = [
    {
      name: 'Подбор автотранспортного средства',
      form: CarSelectionForm,
      contract: CarSelectionContract,
      annex: CarSelectionContractAnnex,
    },
  ]

  let selected = contracts[0]
  let selectedContainer
  let element

  const downloadFullContractPDF = () => {
    const contract = document.getElementById(selected.contract.name).innerHTML
    const annex = document.getElementById(selected.annex.name).innerHTML

    element = contract + annex

    downloadPDF()

    element = ''
  }

  const downloadPDF = () => {
    if (!element) {
      element = document.getElementById(selectedContainer.name)
    }

    const options = {
      margin: [10, 10, 20, 10],
      filename: `${selected.name}.pdf`,
      html2canvas: {
        scale: 2,
        logging: false,
        dpi: 192,
        letterRendering: true,
      },
      pageBreaks: {
        mode: ['css', 'legacy'],
        before: ['*'],
        after: [],
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }

    options.source = element
    options.download = true
    Html2Pdf.getPdf(options)

    element = ''
  }
</script>

<section class="row d-flex flex-column">
  <div class="col-auto">
    <h1 class="text-center">Конструктор договоров</h1>
  </div>
  <div class="col-auto col-md-4 mx-auto">
    <label for="type-contract" class="form-label" />
    <select bind:value={selected} id="type-contract" class="form-select">
      {#each contracts as contract}
        <option value={contract}>{contract.name}</option>
      {/each}
    </select>
  </div>
</section>
<section class="row d-flex flex-column mt-3">
  <div class="col col-lg-8 col-xl-6 border rounded mx-auto p-3">
    <svelte:component this={selected.form} />
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
        <option value={selected.contract}>Договор</option>
        <option value={selected.annex}>Приложение</option>
        <option value="all">Всё</option>
      </select>
      {#if selectedContainer === 'all'}
        <button
          type="button"
          class="btn btn-success"
          on:click={downloadFullContractPDF}>Скачать</button
        >
      {:else}
        <button type="button" class="btn btn-success" on:click={downloadPDF}
          >Скачать</button
        >
      {/if}
    </div>
  </div>
  {#if selectedContainer === 'all'}
    <div
      class="col-12 col-xl-10 border border-secondary mx-auto overflow-scroll mb-3"
      style="max-height: 500px"
    >
      <svelte:component this={selected.contract} id={selected.contract.name} />
    </div>
    <div
      class="col-12 col-xl-10 border border-secondary mx-auto overflow-scroll"
      style="max-height: 500px"
    >
      <svelte:component this={selected.annex} id={selected.annex.name} />
    </div>
  {:else}
    <div
      class="col-12 col-xl-10 border border-secondary mx-auto overflow-scroll"
      style="max-height: 500px"
    >
      <svelte:component this={selectedContainer} id={selectedContainer.name} />
    </div>
  {/if}
</section>

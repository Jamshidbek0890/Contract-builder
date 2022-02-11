<script>
  import Html2Pdf from 'js-html2pdf'
  import { createEventDispatcher } from 'svelte'

  export let selected
  export let selectedContainer

  let pdf = ''
  const dispatch = createEventDispatcher()

  const downloadPdf = () => {
    dispatch('download', {
      download: () => downloadContractPart(),
    })
    dispatch('downloadAll', {
      download: () => downloadContractFull(),
    })
  }

  const downloadContractFull = () => {
    selected.components.forEach(({ component }) => {
      pdf += document.getElementById(component.name).innerHTML
    })

    downloadContractPart()

    pdf = ''
  }

  const downloadContractPart = () => {
    if (!pdf) {
      pdf = document.getElementById(selectedContainer.name)
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

    options.source = pdf
    options.download = true
    Html2Pdf.getPdf(options)

    pdf = ''
  }
</script>

<button type="button" class="btn btn-success" on:click={downloadPdf}
  >Cкачать</button
>

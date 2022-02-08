<script>
  import { Collapse } from 'bootstrap'

  import CarSelectionMainInfo from './CarSelectionMainInfo.svelte'
  import CarSelectionAnnex from './CarSelectionAnnex.svelte'

  const collapseElementList = [].slice.call(
    document.querySelectorAll('.collapse')
  )
  const collapseList = collapseElementList.map((collapseEl) => {
    return new Collapse(collapseEl)
  })
</script>

<div class="accordion accordion-flush" id="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Договор
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <CarSelectionMainInfo />
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          Приложение
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <CarSelectionAnnex />
        </div>
      </div>
    </div>
  </div>
</div>

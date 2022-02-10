<script>
  import { Collapse } from 'bootstrap'

  const collapseElementList = [].slice.call(
    document.querySelectorAll('.collapse')
  )
  const collapseList = collapseElementList.map((collapseEl) => {
    return new Collapse(collapseEl)
  })

  export let components
</script>

<div class="accordion accordion-flush" id="accordion">
  {#each components as { name, form }, index}
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-heading-{index}">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse-{index}"
          aria-expanded="false"
          aria-controls="flush-collapse-{index}"
        >
          {name}
        </button>
      </h2>
      <div
        id="flush-collapse-{index}"
        class="accordion-collapse collapse"
        aria-labelledby="flush-heading-{index}"
        data-bs-parent="#accordion"
      >
        <div class="accordion-body">
          <svelte:component this={form} />
        </div>
      </div>
    </div>
  {/each}
</div>

<script>
  export let selected
  export let selectedContainer
</script>

{#if selectedContainer === 'all'}
  {#each selected.components as { component }}
    <div
      class="col-12 col-xl-10 border border-secondary mx-auto overflow-scroll mb-3"
      style="max-height: 500px"
    >
      <svelte:component
        this={component}
        id={component.name}
        pageBreak={'html2pdf__page-break'}
      />
    </div>
  {/each}
{:else}
  <div
    class="col-12 col-xl-10 border border-secondary mx-auto overflow-scroll"
    style="max-height: 500px"
  >
    <svelte:component this={selectedContainer} id={selectedContainer.name} />
  </div>
{/if}

<script>
  import { ownership } from '../../store'
</script>

<div class="row mb-3">
  <div class="col">
    <label for="legal-type" class="form-label">Вид юридического лица</label>
    <select id="legal-type" class="form-select" bind:value={$ownership.short}>
      <option value="ИП" selected>Индивидуальный предприниматель</option>
      <option value="ООО">Общество с ограниченной ответственностью</option>
      <option value="АО">Акционерное общество</option>
      <option value="ПАО">Публичное акционерное общество</option>
    </select>
  </div>
</div>

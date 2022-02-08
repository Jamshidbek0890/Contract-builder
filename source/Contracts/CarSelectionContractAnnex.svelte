<script>
  import {
    carAppearance,
    carCondition,
    carEngine,
    carMileage,
    carModel,
    carPrice,
    carRequirements,
    carYear,
    fullName,
    number,
  } from '../store'
  import Empty from '../Empty.svelte'

  export let id
</script>

<div class="container" {id}>
  <div class="row">
    <h6 class="annex text-center fw-bold mt-3">
      Приложение № 1 к Договору на оказание услуг по подбору Автодома № {#if $number}{$number}{:else}<Empty
        />{/if}
    </h6>
    <div class="col-auto">
      <ol class="list-group list-group-numbered list-group-flush">
        <li class="list-group-item border-secondary">
          Марка, модель: {#if $carModel}{$carModel}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Год выпуска: {#if $carYear}{$carYear}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Двигатель: {#if $carEngine}{$carEngine}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Дорожный пробег: {#if $carMileage}{$carMileage}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Техническое состояние, процент и степень износа: {#if $carCondition}{$carCondition}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Требования: {#if $carRequirements}{$carRequirements}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Внешний вид, цвет Автодома: {#if $carAppearance}{$carAppearance}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Цена, за которую заказчик готов приобрести указанный Автодом
          составляет: {#if $carPrice.to && $carPrice.from}от {$carPrice.to} рублей
            до {$carPrice.from} рублей{/if}
        </li>
      </ol>
    </div>
  </div>
  <div class="row d-flex flex-column mt-3">
    <p class="col-auto">Физ. лицо:</p>
    <p class="col-auto">
      {#if $fullName}{$fullName}{:else}<Empty />{/if}
    </p>
    <div class="col-auto d-flex flex-wrap">
      <p>
        {#if $fullName}{$fullName.split(' ')[0]}
          {$fullName.split(' ')[1].slice(0, 1)}.{$fullName
            .split(' ')[2]
            .slice(0, 1)}.{:else}<Empty />{/if}
      </p>
      <p>
        {#if $fullName}_______________{:else}<Empty />{/if}
      </p>
    </div>
  </div>
  <div class="row d-flex flex-column">
    <p class="col-auto">__________:</p>
    <p class="col-auto">__________ __________ __________</p>
    <div class="col-auto d-flex flex-wrap">
      <p>__________ __________</p>
      <p>_______________</p>
    </div>
  </div>
</div>

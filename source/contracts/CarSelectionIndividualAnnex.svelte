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
  import Empty from '../components/Empty.svelte'

  export let id
</script>

<div class="container" {id}>
  <div class="row">
    <h6 class="annex text-center fw-bold mt-3">
      Приложение № 1 к Договору на оказание услуг по подбору Автомобиля № {#if $number}{$number}{:else}<Empty
        />{/if}
    </h6>
    <div class="col">
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
          Внешний вид, цвет Автомобиля: {#if $carAppearance}{$carAppearance}{/if}
        </li>
        <li class="list-group-item border-secondary">
          Цена, за которую заказчик готов приобрести указанный Автомобиль
          составляет: {#if $carPrice.to && $carPrice.from}от {$carPrice.to} рублей
            до {$carPrice.from} рублей{/if}
        </li>
      </ol>
    </div>
  </div>
  <div class="row justify-content-md-between">
    <div class="col-md-6 d-flex flex-column">
      <p>Физ. лицо:</p>
      <p>
        {#if $fullName.name && $fullName.surname && $fullName.fatherhood}{$fullName.surname}
          {$fullName.name}
          {$fullName.fatherhood}{:else}<Empty />{/if}
      </p>
      <div class="d-flex flex-wrap">
        <p>
          {#if $fullName.name && $fullName.surname && $fullName.fatherhood}{$fullName.surname}
            {$fullName.name[0]}. {$fullName.fatherhood[0]}.{:else}<Empty />{/if}
        </p>
        <p>
          {#if $fullName.name && $fullName.surname && $fullName.fatherhood}_______________{:else}<Empty
            />{/if}
        </p>
      </div>
    </div>
    <div class="col-md-6 d-flex flex-column">
      <p>_______________:</p>
      <p>_______________ _______________ _______________</p>
      <div class="d-flex flex-wrap">
        <p>_______________ _______________</p>
        <p>_______________</p>
      </div>
    </div>
  </div>
</div>

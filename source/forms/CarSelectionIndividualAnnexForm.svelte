<script>
  import CarModel from './inputs/CarModel.svelte'
  import CarYear from './inputs/CarYear.svelte'
  import CarEngine from './inputs/CarEngine.svelte'
  import CarMileage from './inputs/CarMileage.svelte'
  import CarCondition from './inputs/CarCondition.svelte'
  import CarRequirements from './inputs/CarRequirements.svelte'
  import CarAppearance from './inputs/CarAppearance.svelte'
  import CarPrice from './inputs/CarPrice.svelte'
  import ContractNumber from './inputs/ContractNumber.svelte'
  import FullName from './inputs/FullName.svelte'
</script>

<form class="container mx-auto">
  <fieldset>
    <legend>Данные договора</legend>
    <div class="row mb-3">
      <div class="col-md-4">
        <ContractNumber />
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>ФИО заказчика</legend>
    <div class="row mb-3">
      <FullName />
    </div>
  </fieldset>
  <fieldset>
    <legend>Данные автодома</legend>
    <div class="row mb-3">
      <div class="col-md-8">
        <CarModel />
      </div>
      <div class="col-md-4">
        <CarYear />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-7">
        <CarEngine />
      </div>
      <div class="col-md-5">
        <CarMileage />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12">
        <CarCondition />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12">
        <CarRequirements />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12">
        <CarAppearance />
      </div>
    </div>
    <div class="row mb-3">
      <p class="form-label">
        Цена, за которую заказчик готов приобрести указанный Автодом составляет
      </p>
      <CarPrice />
    </div>
  </fieldset>
</form>

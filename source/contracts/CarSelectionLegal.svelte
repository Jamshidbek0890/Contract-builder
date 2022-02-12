<script>
  import Empty from '../components/Empty.svelte'
  import {
    number,
    date,
    fullName,
    address,
    phone,
    messenger,
    email,
    ownership,
    companyName,
    stateRegistration,
    bankAccount,
    deposit,
  } from '../store'

  export let id
  export let pageBreak
</script>

<div class="container" {id}>
  <div class="row mt-3">
    <div class="col-10 col-md-8 mx-auto">
      <h5 class="text-center fw-bold">
        Договор на оказание услуг по подбору автотранспортного средства
        (Автомобиля) № {#if $number}{$number}{:else}<Empty />{/if}
      </h5>
    </div>
  </div>
  <div class="row d-flex justify-content-around mt-3">
    <p class="col-auto">г. Москва</p>
    <p class="col-auto">
      {#if $date}
        {$date}
      {:else}
        <Empty />
      {/if}
    </p>
  </div>
  <div class="row">
    <p>
      _______________ _______________ _______________ _______________
      _______________ (_______________ _______________ _______________),
      _______________ № _______________, именуемый в дальнейшем «Исполнитель», с
      одной стороны и {#if $ownership.full}{$ownership.full}{:else}<Empty
        />{/if}
      {#if $fullName.name && $fullName.surname && $fullName.fatherhood}{$fullName.surname}
        {$fullName.name}
        {$fullName.fatherhood} ({$ownership.short}
        {$fullName.surname}
        {$fullName.name[0]}. {$fullName
          .fatherhood[0]}.){:else if $companyName}{$companyName}{:else}<Empty
        />{/if}, {#if $stateRegistration.registrationNumber}{$stateRegistration.type}:
        {$stateRegistration.registrationNumber}{:else}<Empty />{/if}, {#if $ownership.short === 'ИП'}именуемый{:else}именуемое{/if}
      в дальнейшем «Заказчик» с другой стороны, заключили настоящий договор о нижеследующем:
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">1. Предмет Договора</h6>
    <p class="text-justify">
      1.1. Исполнитель обязуется по поручению Заказчика произвести подбор,
      анализ вариантов приобретения и покупки автотранспортного средства
      (Автомобиля).
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">2. Права и обязанности сторон</h6>
    <p class="text-justify">2.1. Исполнитель обязуется:</p>
    <p class="text-justify">
      2.1.1. Самостоятельно и с использованием имеющегося собственного опыта,
      знаний и привлеченных ресурсов с необходимой по обстоятельствам дела
      заботливостью и осмотрительностью добросовестно осуществить подбор
      автомобиля.
    </p>
    <p class="text-justify">
      2.1.2. Осуществлять осмотр предварительно отобранных Автомобилей,
      экспертную оценку состояния этих Автомобилей, а также диагностику
      технического состояния, внутренней оснастки (состояние салона Автомобиля)
      и внешнего лакокрасочного покрытия с помощью технических средств, с
      предоставлением фотографий всех видимых дефектов автомобиля, Заказчику;
    </p>
    <p class="text-justify">
      2.1.3. Осуществить юридическую проверку Автомобиля и предоставить
      соответствующие документы, что на момент покупки Автомобиль не находится в
      базе розыска, угнанных, залоговых автомобилей и не имеет иных ограничений
      и/или арестов.
    </p>
    <p class="text-justify">2.3. Заказчик обязуется:</p>
    <p class="text-justify html2pdf__page-break">
      2.3.1. До начала поиска Автомобиля оплатить на расчетный счет Исполнителя
      задаток в размере {#if $deposit}{$deposit}{:else}<Empty />{/if} рублей.
    </p>
    <p class="text-justify">
      2.3.2. В случае отказа Заказчика от услуг Исполнителя по каким либо
      причинам, задаток возврату не подлежит, так как, согласно международным
      правилам, задаток считается невозвратным.
    </p>
    <p class="text-justify">
      2.3.3. После нахождения Автомобиля Исполнителем, Исполнитель направляет
      Заказчику электронное письмо с просьбой о подтверждение выбранного и
      одобренного Заказчиком Автомобиля, с указанием марки, VIN номера, года
      выпуска, пробега и окончательной цены Автомобиля с учетом внесённого
      задатка. Заказчик обязан ответным письмом подтвердить покупку данного
      Автомобиля с указанием марки, VIN номера, года выпуска.
    </p>
    <p class="text-justify">
      2.3.4 Исполнитель, после получения Заказчиком электронного письма с
      подтверждением о покупке выбранного Автомобиля, внесёт полученные денежные
      средства в виде задатка по настоящему договору продавцу Автомобиля в
      качестве задатка для дальнейшего его выкупа. Остальные платежи требуемые
      для выкупа и дальнейшей передачи Автомобиля Заказчику, будут оговорены с
      Заказчиком отдельно путём оформления расписок.
    </p>
    <p class="text-justify">
      2.3.5. Автомобиль будет передан Исполнителем Заказчику после выплаты
      полной стоимости Автомобиля указанного в письме подтверждении и оформлен
      по договору купли - продажи на Заказчика.
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">3. Порядок расчетов по договору</h6>
    <p class="text-justify">
      3.2.1. Стоимость услуг по настоящему Договору составляет {#if $deposit}{$deposit}{:else}<Empty
        />{/if} рублей.
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">4. Срок действия договора</h6>
    <p class="text-justify">
      4.1. Срок исполнения настоящего Договора устанавливается с момента
      получения Исполнителем денежных средств от Заказчика три месяца.
    </p>
    <p class="text-justify">
      4.2. В случае не выполнения своих обязательств Исполнителем перед
      Заказчиком, сумма задатка возвращается Исполнителем полностью.
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">
      5. Обстоятельства непреодолимой силы.
    </h6>
    <p class="text-justify html2pdf__page-break">
      5.1. При возникновении обстоятельств, которые каким-либо образом создают
      невозможность выполнения обязательств по настоящему Договору одной из
      сторон, а к таким обязательствам относятся: наводнения, землетрясения,
      другие стихийные бедствия, а также пожары, военные действия, моратории,
      перебои в работе транспорта, а также болезнь или временная
      нетрудоспособность по любой уважительной причине одной из сторон договора,
      срок выполнения обязательств по настоящему Договору будет увеличен на
      период времени, в течение которого будут действовать эти обстоятельства и
      их последствия.
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">6. Разрешение споров</h6>
    <p class="text-justify">
      6.1. Все споры и разногласия, которые могут возникнуть в связи с
      неисполнением или ненадлежащим исполнением условий настоящего Договора,
      будут по возможности разрешены путем переговоров между сторонами в порядке
      предъявления письменной претензии, которая подлежит рассмотрению стороной,
      получившей ее, в срок не более 10 дней с момента ее получения. В случае
      если стороны не придут к соглашению, дело подлежит к рассмотрению в суде в
      соответствии с действующим законодательством.
    </p>
  </div>
  <div class="row">
    <h6 class="text-center fw-bold mt-3">7. Прочие условия</h6>
    <p class="text-justify">
      7.1. Переписка через Интернет по средствам электронной почты, мессенджеров
      WhatsApp, Viber и Telegram признаётся Сторонами официальной.
    </p>
    <p class="text-justify">
      7.2. Договор составлен в двух экземплярах, имеющих равную юридическую силу
      для каждой из Сторон.
    </p>
    <p class="text-justify html2pdf__page-break">
      7.3. Любые изменения и дополнения к Договору имеют силу только в том
      случае, если они оформлены в письменном виде и подписаны сторонами.
    </p>
  </div>
  <div class="row justify-content-center">
    <h6 class="text-center fw-bold mt-3">8. Адреса и реквизиты Сторон</h6>
    <div class="table-responsive col-12">
      <table
        class="table table-responsive table-bordered border-secondary align-middle text-center"
      >
        <thead>
          <tr>
            <th />
            <th>
              Заказчик<br
              />{#if $fullName.name && $fullName.surname && $fullName.fatherhood}<span
                  class="fw-normal"
                  >{$ownership.short}
                  {$fullName.surname}
                  {$fullName.name}
                  {$fullName.fatherhood}</span
                >{:else if $companyName}{$ownership.short}
                {$companyName}{:else}<Empty />{/if}
            </th>
            <th>
              Исполнитель<br /><span class="fw-normal"
                >_______________ _______________ _______________</span
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ОГРНИП/ОГРН</td>
            <td
              >{#if $stateRegistration.registrationNumber}{$stateRegistration.type}
                {$stateRegistration.registrationNumber}{:else}<Empty />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>ИНН</td>
            <td
              >{#if $stateRegistration.taxpayerNumber}{$stateRegistration.taxpayerNumber}{:else}<Empty
                />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>Адрес регистрации</td>
            <td
              >{#if $address}{$address}{:else}<Empty />{/if}</td
            >
            <td
              >_______________, _______________, _______________,
              _______________ _______________, _______________, _______________</td
            >
          </tr>
          <tr>
            <td>Банк</td>
            <td
              >{#if $bankAccount.bankName}{$bankAccount.bankName}{:else}<Empty
                />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>БИК</td>
            <td
              >{#if $bankAccount.bankCode}{$bankAccount.bankCode}{:else}<Empty
                />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>Расчётный счёт</td>
            <td
              >{#if $bankAccount.current}{$bankAccount.current}{:else}<Empty
                />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>Корреспондентский счёт</td>
            <td
              >{#if $bankAccount.correspondent}{$bankAccount.correspondent}{:else}<Empty
                />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>Электронная почта</td>
            <td
              >{#if $email}{$email}{:else}<Empty />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td
              >{#if $phone}{$phone}{:else}<Empty />{/if}</td
            >
            <td>_______________</td>
          </tr>
          <tr>
            <td>Мессенджер</td>
            <td
              >{#if $messenger.name && $messenger.contact}{$messenger.name.join(
                  '/'
                )}
                {$messenger.contact}{:else}<Empty />{/if}</td
            >
            <td>_______________ _______________</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row justify-content-md-between">
    <div class="col-md-6 d-flex flex-column">
      <p>
        {#if $ownership.short}{$ownership.short}{:else}<Empty />{/if}:
      </p>
      <p>
        {#if $fullName.name && $fullName.surname && $fullName.fatherhood}{$fullName.surname}
          {$fullName.name}
          {$fullName.fatherhood}{:else if $companyName}{$companyName}{:else}<Empty
          />{/if}
      </p>
      <div class="d-flex flex-wrap">
        <p>
          {#if $fullName.name && $fullName.surname && $fullName.fatherhood}{$ownership.short}
            {$fullName.surname}
            {$fullName.name[0]}. {$fullName
              .fatherhood[0]}.{:else if $companyName}{$ownership.short}
            {$companyName}{:else}<Empty />{/if}
        </p>
        <p>
          {#if $fullName || $companyName}_______________{:else}<Empty />{/if}
        </p>
      </div>
    </div>
    <div class="col-md-6 d-flex flex-column">
      <p>_______________:</p>
      <p>_______________ _______________ _______________</p>
      <div class="d-flex flex-wrap">
        <p>_______________ _______________</p>
        <p class={pageBreak}>_______________</p>
      </div>
    </div>
  </div>
</div>

<style>
    h5 {
        font-size: 18px;
    }
    p, td, th {
        font-size: 14px;
    }
</style>

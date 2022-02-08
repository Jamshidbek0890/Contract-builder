<script>
  import { phone, messenger, email } from '../../store'

  const messengersName = ['WhatsApp', 'Viber', 'Telegram']

  let checked = false
  let selected = messengersName[0]
  let messengerContact

  $: if (checked) {
    messengerContact = $phone
  } else {
    messengerContact = ''
  }

  $: if (messengerContact) {
    $messenger.name = selected
    $messenger.contact = messengerContact
  }
</script>

<div class="row mb-3">
  <div class="col-md-6">
    <label for="customer-phone" class="form-label">Телефон</label>
    <input
      type="text"
      id="customer-phone"
      class="form-control"
      bind:value={$phone}
    />
  </div>
</div>
<div class="row mb-3">
  <div class="input-group">
    <label for="customer-messenger" class="input-group-text">Мессенджер</label>
    <select
      id="customer-messenger"
      class="form-select"
      bind:value={selected}
      multiple
    >
      {#each messengersName as name}
        <option value={name}>{name}</option>
      {/each}
    </select>
    <label for="customer-contact" class="input-group-text">@</label>
    <input
      type="text"
      id="customer-contact"
      class="form-control"
      bind:value={messengerContact}
    />
  </div>
</div>
<div class="row mb-3">
  <div class="col">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="check-contact"
        bind:checked
      />
      <label class="form-check-label" for="check-contact">
        Совпадает с номером телефона
      </label>
    </div>
  </div>
</div>
<div class="row mb-3">
  <div class="col-md-6">
    <label for="customer-email" class="form-label">Почта</label>
    <input
      type="email"
      class="form-control"
      id="customer-email"
      bind:value={$email}
    />
  </div>
</div>

<script lang="ts" setup>
import { requestDevice } from 'tauri-plugin-bluetooth-api'
import { useQuasar } from 'quasar'
import { computed } from 'vue'

import { i18nSubPath } from 'src/utils/common'

const { dark } = useQuasar()

const i18n = i18nSubPath('pages.DashboardPage')

const logoUrl = computed(
  () =>
    new URL(`/src/assets/logos/${dark.isActive ? 'light' : 'dark'}/colorful.svg`, import.meta.url)
      .href,
)

const testBluetooth = async () => {
  try {
    await requestDevice({
      filters: [{ services: [0x5343, 0x2233] }],
      optionalServices: ['55535343-fe7d-4ae5-8fa9-9fafd205e455'],
    })
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <q-page class="column items-center justify-center q-gutter-y-xl">
    <q-img :src="logoUrl" height="50vmin" width="50vmin" />
    <div class="text-h1 text-weight-regular">
      {{ i18n('labels.title') }}
    </div>
    <div class="text-h5 text-grey">
      {{ i18n('labels.intro') }}
    </div>
    <div>
      <q-btn color="primary" label="Test Bluetooth" no-caps @click="testBluetooth" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

import { BluetoothHelper } from 'src/types/BluetoothHelper'
import { i18nSubPath } from 'src/utils/common'

const { dark } = useQuasar()

const i18n = i18nSubPath('pages.DashboardPage')

const logoUrl = computed(
  () =>
    new URL(`/src/assets/logos/${dark.isActive ? 'light' : 'dark'}/colorful.svg`, import.meta.url)
      .href,
)

const testBluetooth = async () => {
  const bluetoothHelper = new BluetoothHelper()
  try {
    await bluetoothHelper.scan([
      '00005343-0000-1000-8000-00805f9b34fb',
      '00002233-0000-1000-8000-00805f9b34fb',
    ])
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

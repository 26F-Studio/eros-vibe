<script lang="ts" setup>
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

const testBluetooth = () => {
  console.log('Test Bluetooth')
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
      <q-btn label="Test Bluetooth" @click="testBluetooth"/>
    </div>
    <div>
      <q-btn/>
    </div>
  </q-page>
</template>

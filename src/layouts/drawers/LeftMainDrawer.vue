<script setup lang="ts">
import { i18nSubPath } from 'src/utils/common'
import { bus } from 'boot/bus'

const navigations = [
  {
    label: 'dashboard',
    icon: 'view_quilt',
    available: true,
    route: '/dashboard',
    separator: true,
  },
  {
    label: 'vibrate',
    icon: 'mdi-vibrate',
    available: true,
    route: '/vibrate',
    separator: false,
  },
] as const

const i18n = i18nSubPath('layouts.drawers.LeftMainDrawer')
</script>

<template>
  <q-drawer
    bordered
    no-swipe-backdrop
    no-swipe-close
    no-swipe-open
    overlay
    side="left"
    @hide="bus.emit('drawer', 'close', 'right')"
  >
    <q-list>
      <template v-for="(navigation, index) in navigations" :key="index">
        <q-item
          :clickable="navigation.available"
          :v-ripple="navigation.available"
          @click="$router.push(navigation.route)"
        >
          <q-item-section avatar>
            <q-icon :name="navigation.icon" :color="navigation.available ? 'primary' : 'grey'" />
          </q-item-section>
          <q-item-section :class="navigation.available ? '' : 'text-grey'">
            {{ i18n('labels.' + navigation.label) }}
          </q-item-section>
        </q-item>
        <q-separator v-if="navigation.separator" />
      </template>
    </q-list>
  </q-drawer>
</template>

<style scoped></style>

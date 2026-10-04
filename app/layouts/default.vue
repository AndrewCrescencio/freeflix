<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import CookieConsent from '~/components/layout/CookieConsent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1" id="main-content">
      <slot />
    </main>
    <AppFooter />
    <CookieConsent />
  </div>
</template>
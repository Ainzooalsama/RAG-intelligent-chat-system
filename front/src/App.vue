<template>
  <div class="app" :class="{ 'app--has-sidebar': showSidebar }">
    <tab-bar v-if="showSidebar" />
    <div class="app-content">
      <router-view v-slot="{ Component }">
        <template v-if="$route.meta.keepAlive">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </template>
        <template v-else>
          <component :is="Component" />
        </template>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import TabBar from './components/TabBar.vue'

const route = useRoute()

const sidebarRoutes = ['/aichat', '/sessions', '/my']
const showSidebar = computed(() => {
  return sidebarRoutes.some(p => route.path.startsWith(p))
})

watch(showSidebar, (val) => {
  document.body.classList.toggle('has-sidebar', val)
}, { immediate: true })
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-size: 16px;
  height: 100%;
  width: 100%;
}

.app {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
}

.app-content {
  flex: 1;
  overflow: hidden;
  min-width: 0;
}

/* 移动端适配 */
@media screen and (max-width: 750px) {
  html {
    font-size: calc(100vw / 750 * 16);
  }
}
</style>

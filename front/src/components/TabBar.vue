<template>
  <div class="sidebar">
    <div class="sidebar-brand">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="6" width="16" height="15" rx="3"/>
        <circle cx="9.5" cy="12.5" r="2" fill="currentColor" stroke="none"/>
        <circle cx="14.5" cy="12.5" r="2" fill="currentColor" stroke="none"/>
        <line x1="8" y1="17" x2="16" y2="17"/>
        <line x1="12" y1="3" x2="12" y2="6"/>
        <circle cx="12" cy="2.5" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
      <span class="brand-text">RAG对话</span>
    </div>

    <div class="sidebar-nav">
      <router-link to="/aichat" class="sidebar-item" active-class="sidebar-item--active">
        <div class="sidebar-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <line x1="9" y1="10" x2="15" y2="10"/>
            <line x1="12" y1="7" x2="12" y2="13"/>
          </svg>
        </div>
        <span class="sidebar-label">{{ $t('nav.aiChat') }}</span>
      </router-link>

      <router-link to="/sessions" class="sidebar-item" active-class="sidebar-item--active">
        <div class="sidebar-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </div>
        <span class="sidebar-label">{{ $t('nav.sessions') }}</span>
      </router-link>

      <router-link to="/my" class="sidebar-item" active-class="sidebar-item--active">
        <div class="sidebar-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <span class="sidebar-label">{{ $t('nav.my') }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
</script>

<style scoped>
.sidebar {
  width: 150px;
  height: 100vh;
  background-color: var(--color-card);
  border-right: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  left: 0;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 14px;
  color: var(--color-primary);
  border-bottom: 1px solid var(--color-divider);
}

.brand-text {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.sidebar-nav {
  flex: 1;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-text-light);
  font-size: 14px;
  font-family: var(--font-body);
  transition: all 0.15s ease;
  border-left: 3px solid transparent;
  cursor: pointer;
}

.sidebar-item:hover {
  background-color: var(--color-surface);
  color: var(--color-text);
}

.sidebar-item--active {
  background-color: rgba(76, 111, 184, 0.08);
  color: var(--color-primary);
  border-left-color: var(--color-primary);
  font-weight: 500;
}

.sidebar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
}

.sidebar-label {
  white-space: nowrap;
}
</style>

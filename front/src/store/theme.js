import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: localStorage.getItem('theme') || 'light',
    themes: {
      light: {
        name: '极简·淡白',
        bg: '#F8F8F9',
        surface: '#F0F1F3',
        card: '#FFFFFF',
        text: '#1A1C20',
        textLight: '#5A5D63',
        textLighter: '#8B8E93',
        textLightest: '#B0B3B7',
        primary: '#4C6FB8',
        tabbarActive: '#4C6FB8',
        border: '#E4E5E7',
        borderLight: '#F1F2F4',
        divider: '#EEEEF0',
        shadow: 'rgba(0, 0, 0, 0.06)',
        shadowStrong: 'rgba(0, 0, 0, 0.10)',
        toastBg: 'rgba(0, 0, 0, 0.78)',
        bubbleUser: '#E8ECF2',
      },
      dark: {
        name: '深蓝·科技',
        bg: '#0D1A2D',
        surface: '#162438',
        card: '#1E3048',
        text: '#E4ECF5',
        textLight: '#B0C0D4',
        textLighter: '#7D90A8',
        textLightest: '#556680',
        primary: '#5DADE2',
        tabbarActive: '#5DADE2',
        border: '#293D55',
        borderLight: '#1C2C3F',
        divider: '#1C2E42',
        shadow: 'rgba(0, 0, 0, 0.45)',
        shadowStrong: 'rgba(0, 0, 0, 0.60)',
        toastBg: 'rgba(13, 26, 45, 0.94)',
        bubbleUser: '#243548',
      },
    },
  }),

  getters: {
    getCurrentTheme: (state) => state.currentTheme,
    getThemeConfig: (state) => state.themes[state.currentTheme],
    getAllThemes: (state) =>
      Object.keys(state.themes).map((key) => ({
        id: key,
        name: state.themes[key].name,
        primaryColor: state.themes[key].primary,
        bgColor: state.themes[key].bg,
      })),
  },

  actions: {
    setTheme(themeName) {
      if (this.themes[themeName]) {
        this.currentTheme = themeName;
        localStorage.setItem('theme', themeName);
        this.applyTheme();
      }
    },

    applyTheme() {
      const t = this.themes[this.currentTheme];
      const root = document.documentElement;
      root.style.setProperty('--color-bg', t.bg);
      root.style.setProperty('--color-surface', t.surface);
      root.style.setProperty('--color-card', t.card);
      root.style.setProperty('--color-text', t.text);
      root.style.setProperty('--color-text-light', t.textLight);
      root.style.setProperty('--color-text-lighter', t.textLighter);
      root.style.setProperty('--color-text-lightest', t.textLightest);
      root.style.setProperty('--color-primary', t.primary);
      root.style.setProperty('--color-border', t.border);
      root.style.setProperty('--color-border-light', t.borderLight);
      root.style.setProperty('--color-divider', t.divider);
      root.style.setProperty('--color-shadow', t.shadow);
      root.style.setProperty('--color-shadow-strong', t.shadowStrong);
      root.style.setProperty('--color-toast-bg', t.toastBg);
      root.style.setProperty('--color-bubble-user', t.bubbleUser);
      root.style.setProperty('--van-tabbar-item-active-color', t.tabbarActive);
    },

    initTheme() {
      this.applyTheme();
    },
  },
});
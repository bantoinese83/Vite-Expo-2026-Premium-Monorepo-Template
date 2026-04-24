import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * 🌍 Internationalization (i18n)
 * Shared translations across Web and Mobile.
 */
const resources = {
  en: {
    translation: {
      welcome_back: "Welcome Back",
      explore_features: "Explore Features",
      native_performance: "Native Performance",
      premium_features: "Premium Features",
      upgrade_pro: "Upgrade to Pro",
      sign_out: "Sign Out",
    },
  },
  es: {
    translation: {
      welcome_back: "Bienvenido de nuevo",
      explore_features: "Explorar Funciones",
      native_performance: "Rendimiento Nativo",
      premium_features: "Funciones Premium",
      upgrade_pro: "Actualizar a Pro",
      sign_out: "Cerrar sesión",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };

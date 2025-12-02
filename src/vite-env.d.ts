/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_TEMPLATE_CLIENT_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ADMIN_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

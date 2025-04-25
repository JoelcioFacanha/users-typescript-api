import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{ts,tsx}"], // Aplica essa configuração apenas a arquivos TypeScript e TSX
    ...tseslint.configs.recommended, // Mantém as outras configurações recomendadas
    rules: {
      ...tseslint.configs.recommended.rules, // Se quiser manter outras regras e apenas sobrescrever esta
      "@typescript-eslint/no-explicit-any": "off", // Desabilita a regra para arquivos TS(X)
    },
  },
]);

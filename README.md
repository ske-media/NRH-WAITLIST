# NRH Waitlist - Bûches de Noël Collection Exclusive

Application web pour la liste d'attente de la collection exclusive de Bûches de Noël artisanales par le Chef Nicolas Builer.

## Technologies utilisées

Ce projet est construit avec :

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Installation et développement

### Prérequis

- Node.js & npm installés - [installer avec nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Étapes d'installation

```sh
# Étape 1 : Cloner le dépôt
git clone <YOUR_GIT_URL>

# Étape 2 : Naviguer vers le répertoire du projet
cd <YOUR_PROJECT_NAME>

# Étape 3 : Installer les dépendances
npm i

# Étape 4 : Démarrer le serveur de développement
npm run dev
```

## Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire le projet pour la production
- `npm run build:dev` - Construire le projet en mode développement
- `npm run lint` - Lancer le linter
- `npm run preview` - Prévisualiser le build de production

## Configuration des variables d'environnement

### Développement local

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
VITE_EMAILJS_TEMPLATE_CLIENT_ID=votre_template_client_id
VITE_EMAILJS_TEMPLATE_ADMIN_ID=votre_template_admin_id
```

### Production sur Netlify

**⚠️ Important** : Le fichier `.env` n'est pas déployé (il est dans `.gitignore`). Vous devez configurer les variables d'environnement directement dans Netlify :

1. **Accédez à votre site sur Netlify** : https://app.netlify.com
2. **Allez dans Site settings** → **Environment variables**
3. **Ajoutez les 4 variables suivantes** :
   - `VITE_EMAILJS_SERVICE_ID` = votre Service ID depuis le dashboard EmailJS
   - `VITE_EMAILJS_PUBLIC_KEY` = votre Public Key depuis le dashboard EmailJS
   - `VITE_EMAILJS_TEMPLATE_CLIENT_ID` = votre Template ID pour l'email client
   - `VITE_EMAILJS_TEMPLATE_ADMIN_ID` = votre Template ID pour l'email admin
4. **Redéployez votre site** pour que les variables soient prises en compte

**Note** : Les variables d'environnement avec le préfixe `VITE_` sont injectées dans le bundle JavaScript au moment du build. Elles sont donc visibles côté client (ce qui est normal pour EmailJS qui fonctionne côté client).

### Résolution du scan des secrets Netlify

Si Netlify détecte des secrets dans le build et bloque le déploiement :

1. **Accédez à Site settings** → **Build & deploy** → **Environment**
2. **Ajoutez une variable d'environnement** :
   - Clé : `SECRETS_SCAN_OMIT_PATHS`
   - Valeur : `dist/**`
3. **Redéployez** votre site

Cela indique à Netlify d'ignorer le dossier `dist/` lors du scan des secrets, car les variables `VITE_*` y sont normalement injectées par Vite.

## Déploiement

Le projet peut être déployé sur n'importe quelle plateforme supportant les applications Vite/React, comme :

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Ou tout autre service d'hébergement statique

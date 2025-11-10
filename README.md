# 💇‍♀️ Labraideuse - Site de Coiffure

Site web moderne pour un salon de coiffure avec système de réservation en ligne et formulaire de contact.

## 🚀 Technologies utilisées

### Frontend
- **React 19** - Framework UI
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Icônes
- **React Icons** - Icônes supplémentaires

### Backend
- **Express.js** - Serveur Node.js
- **MongoDB** avec **Mongoose** - Base de données
- **Nodemailer** - Envoi d'emails
- **CORS** - Gestion des origines croisées

## 📋 Prérequis

- Node.js 18+ et npm
- Compte MongoDB Atlas (base de données cloud)
- Compte Gmail (pour l'envoi d'emails via SMTP)

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd site_coifure
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env` à la racine du projet :

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=3005
MAIL_USER=votre.email@gmail.com
MAIL_PASS=votre_mot_de_passe_application
MAIL_TO=email.destination@gmail.com
NODE_ENV=development
```

⚠️ **Important** : Pour Gmail, vous devez générer un "mot de passe d'application" :
1. Activer la validation en 2 étapes sur votre compte Google
2. Aller dans Paramètres → Sécurité → Mots de passe d'application
3. Générer un mot de passe pour "Autre (nom personnalisé)"

## 🏃 Démarrage

### Mode développement

**Option 1 : Démarrer manuellement**
```bash
# Terminal 1 - Frontend (Vite)
npm run dev

# Terminal 2 - Backend (Node.js)
npm run dev:server
```

**Option 2 : Avec concurrently** (à installer)
```bash
npm install -D concurrently
npm run dev:all
```

Le frontend sera disponible sur `http://localhost:5173`  
Le backend sera disponible sur `http://localhost:3005`

### Mode production

```bash
# Build du frontend
npm run build

# Démarrer le serveur
npm start
```

## 📁 Structure du projet

```
site_coifure/
├── src/                    # Code source React
│   ├── composant/         # Composants React
│   │   ├── Accueil.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── services.jsx
│   │   └── ...
│   ├── utils/             # Utilitaires
│   │   └── api.js         # Appels API
│   ├── App.jsx            # Composant principal
│   └── main.jsx           # Point d'entrée
├── public/                # Fichiers statiques
│   └── images/
├── server.js              # Serveur Express
├── .env                   # Variables d'environnement (à créer)
├── package.json
└── vite.config.js

```

## 🔧 Configuration

### Vite (vite.config.js)
Le proxy API redirige `/api/*` vers `http://localhost:3005` en développement.

### CORS (server.js)
Configuration automatique selon l'environnement :
- **Développement** : Autorise localhost:5173 et localhost:3005
- **Production** : Autorise uniquement le domaine Vercel

## 🌐 Déploiement

### Frontend (Vercel)
```bash
npm run build
# Déployer le dossier dist/
```

### Backend (Railway / Render / Heroku)
1. Configurer les variables d'environnement sur la plateforme
2. Définir `NODE_ENV=production`
3. Utiliser `npm start` comme commande de démarrage

## 🔒 Sécurité

- ✅ Fichier `.env` exclu du Git
- ✅ Validation des données côté serveur
- ✅ Configuration CORS stricte
- ✅ Utilisation de mots de passe d'application Gmail

## 📧 Fonctionnalités

- ✨ Catalogue de services de coiffure
- 📅 Système de réservation en ligne
- 📬 Formulaire de contact
- 📱 Design responsive
- 🎨 Interface moderne avec Tailwind CSS

## 🐛 Dépannage

### Erreur CORS
Vérifiez que `NODE_ENV` est correctement défini et que l'URL du frontend correspond à la configuration CORS dans `server.js`.

### Erreur d'envoi d'email
Assurez-vous d'utiliser un mot de passe d'application Gmail, pas votre mot de passe principal.

### Base de données inaccessible
Vérifiez que votre IP est autorisée dans MongoDB Atlas (Network Access → Add IP Address).

## 👨‍💻 Auteur

**Kevin Tiam**

## 📄 Licence

ISC


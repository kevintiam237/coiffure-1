# 📁 Information sur la structure du projet

## Dossiers et fichiers à nettoyer

### Dossier `api/`
Ce dossier contient des anciennes routes API pour Vercel Serverless Functions :
- `contact.js`
- `reservation.js`
- `services.js`

**Status** : Ces fichiers ne sont PAS utilisés actuellement. Toutes les routes sont dans `server.js`.

**Action recommandée** : 
- Si vous prévoyez de déployer sur Vercel avec des Serverless Functions, gardez-les et migrez le code
- Sinon, supprimez le dossier `api/` car il crée de la confusion

### Dossier `Backend/`
Contient une ancienne structure backend avec :
- `package.json` séparé
- `Models/`, `routes/`
- `speed.js`

**Status** : Non utilisé. Le serveur actuel est `server.js` à la racine.

**Action recommandée** : Supprimer ce dossier entièrement

### Fichier `testMongo.js`
Script de test de connexion MongoDB.

**Status** : Fichier de développement/debug

**Action recommandée** : Supprimer ou déplacer dans un dossier `scripts/` ou `tests/`

## Commandes pour nettoyer

```bash
# Sauvegarde recommandée avant suppression
git add .
git commit -m "Backup avant nettoyage"

# Supprimer les fichiers inutilisés
rm -rf api/
rm -rf Backend/
rm testMongo.js

# Ou sur Windows PowerShell
Remove-Item -Recurse -Force api
Remove-Item -Recurse -Force Backend
Remove-Item testMongo.js
```

## Structure recommandée finale

```
site_coifure/
├── src/                    # Frontend React
│   ├── composant/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── public/                 # Assets statiques
├── server.js               # Backend Express (unique)
├── .env                    # Variables d'environnement (gitignored)
├── .env.example            # Template pour .env
├── package.json
├── vite.config.js
└── README.md
```

## Notes importantes

- ✅ Tout le backend est maintenant dans `server.js`
- ✅ Les routes sont : `/api/services`, `/api/reservation`, `/api/contact`
- ✅ Un seul `package.json` à la racine
- ✅ Configuration CORS adaptée pour dev et production

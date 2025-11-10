# ✅ Checklist Post-Corrections

## 🚨 ÉTAPE 1 : SÉCURITÉ (URGENT - À faire maintenant)

### MongoDB
- [ ] Me connecter à https://cloud.mongodb.com
- [ ] Aller dans "Database Access"
- [ ] Supprimer l'utilisateur `kevintiam`
- [ ] Créer un nouvel utilisateur avec mot de passe fort
- [ ] Copier la nouvelle URI de connexion
- [ ] Mettre à jour `MONGODB_URI` dans `.env`

### Gmail
- [ ] Me connecter à https://myaccount.google.com/security
- [ ] Aller dans "Sécurité" → "Mots de passe d'application"
- [ ] Révoquer le mot de passe `rupu grru npim arve`
- [ ] Générer un nouveau mot de passe d'application
- [ ] Mettre à jour `MAIL_PASS` dans `.env`

### Vérification Git
- [ ] Vérifier que `.env` n'apparaît pas dans `git status`
- [ ] Si oui : `git rm --cached .env` puis commit

---

## 🧪 ÉTAPE 2 : TESTS (Après changement credentials)

### Démarrage
```bash
# Terminal 1 - Backend
npm run dev:server

# Terminal 2 - Frontend  
npm run dev
```

- [ ] Aucune erreur au démarrage
- [ ] Backend : `✅ Connecté à MongoDB`
- [ ] Backend : `🚀 Serveur lancé sur http://localhost:3005`
- [ ] Frontend : `ready in X ms`

### Tests Fonctionnels
- [ ] Page d'accueil s'affiche (`http://localhost:5173`)
- [ ] Header + Footer visibles
- [ ] Images chargées correctement

### Test Services
- [ ] Section services affiche les cartes
- [ ] Cliquer sur "Réserver" ouvre le modal
- [ ] Services dans le dropdown de réservation

### Test Réservation
- [ ] Remplir tous les champs
- [ ] Cliquer sur "Confirmer la réservation"
- [ ] Message de succès affiché
- [ ] Email reçu dans la boîte `MAIL_TO`

### Test Contact
- [ ] Aller à la section Contact
- [ ] Remplir le formulaire
- [ ] Soumettre
- [ ] Message de succès
- [ ] Email reçu

---

## 🧹 ÉTAPE 3 : NETTOYAGE (Recommandé)

### Supprimer fichiers inutilisés
```powershell
# Dans PowerShell
cd "c:\Users\tiamk\OneDrive\Mes cours\site_coifure"

Remove-Item -Recurse -Force api
Remove-Item -Recurse -Force Backend  
Remove-Item testMongo.js
```

- [ ] Dossier `api/` supprimé
- [ ] Dossier `Backend/` supprimé
- [ ] Fichier `testMongo.js` supprimé

### Commit des changements
```bash
git add .
git commit -m "fix: sécurisation et nettoyage du projet"
git push
```

- [ ] Changements commités
- [ ] Poussés sur GitHub

---

## 📖 ÉTAPE 4 : DOCUMENTATION

### Lire les nouveaux fichiers
- [ ] Lire `README.md` (installation et utilisation)
- [ ] Lire `SECURITY_URGENT.md` (sécurité)
- [ ] Lire `STRUCTURE_INFO.md` (structure projet)
- [ ] Lire `CORRECTIONS_RAPPORT.md` (ce qui a été fait)

### Comprendre les changements
- [ ] Comprendre la config CORS (dev vs prod)
- [ ] Comprendre les scripts npm
- [ ] Comprendre la validation des données

---

## 🚀 ÉTAPE 5 : DÉPLOIEMENT (Plus tard)

### Préparation
- [ ] Tester `npm run build` (production build)
- [ ] Vérifier que `dist/` est créé
- [ ] Tester avec `npm start` (serveur prod)

### Frontend (Vercel)
- [ ] Créer projet sur Vercel
- [ ] Connecter le repo GitHub
- [ ] Build command : `npm run build`
- [ ] Output directory : `dist`
- [ ] Déployer

### Backend (Render / Railway)
- [ ] Créer service sur Render/Railway
- [ ] Connecter le repo
- [ ] Ajouter variables d'environnement :
  - `NODE_ENV=production`
  - `MONGODB_URI=...`
  - `PORT=3005`
  - `MAIL_USER=...`
  - `MAIL_PASS=...`
  - `MAIL_TO=...`
- [ ] Start command : `npm start`
- [ ] Déployer

### Post-déploiement
- [ ] Mettre à jour l'URL CORS dans `server.js`
- [ ] Tester tous les endpoints
- [ ] Vérifier les emails

---

## 📊 RÉSUMÉ

### ✅ Complété
- Configuration CORS adaptative
- Validation des données
- Documentation complète
- Scripts npm optimisés
- Dépendances nettoyées
- `.gitignore` mis à jour

### ⚠️ En attente (VOUS)
- Changement mot de passe MongoDB
- Changement mot de passe Gmail
- Tests de l'application
- Nettoyage structure projet

### 🎯 Objectif final
Application sécurisée, propre et prête pour la production ! 🚀

---

**Temps estimé pour tout compléter** : 30-45 minutes

**Questions ?** Relisez les fichiers de documentation créés.

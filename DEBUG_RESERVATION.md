# 🔍 Guide de Débogage - Problème de Réservation

## ⚠️ Problèmes Courants et Solutions

### 1. ❌ "Veuillez remplir tous les champs obligatoires"

**Cause** : Un champ requis est vide

**Champs obligatoires** :
- ✅ Nom
- ✅ Email
- ✅ Téléphone
- ✅ Service (sélectionné dans le dropdown)
- ✅ Date
- ✅ Heure
- ✅ Adresse

**Solution** : Vérifiez que tous les champs sont remplis avant de soumettre.

---

### 2. ❌ "Veuillez entrer un email valide"

**Cause** : Format d'email incorrect

**Exemples valides** :
- ✅ `user@example.com`
- ✅ `john.doe@gmail.com`

**Exemples invalides** :
- ❌ `user@`
- ❌ `user@.com`
- ❌ `user`

---

### 3. ❌ "Veuillez entrer un numéro de téléphone valide"

**Cause** : Format de téléphone incorrect

**Exemples valides** :
- ✅ `+1 234 567 8900`
- ✅ `(514) 123-4567`
- ✅ `514-123-4567`
- ✅ `5141234567`

**Exemples invalides** :
- ❌ `123` (trop court)
- ❌ `abcd1234`

---

### 4. ❌ "Veuillez sélectionner une date et heure dans le futur"

**Cause** : La date/heure choisie est dans le passé

**Solution** : Choisissez une date et heure **futures**

---

### 5. ❌ "Échec de l'envoi de l'email"

**Cause** : Problème avec la configuration Gmail

**Solutions** :
1. Vérifiez que `MAIL_USER` et `MAIL_PASS` sont corrects dans `.env`
2. Vérifiez que vous utilisez un **mot de passe d'application** Gmail (pas votre mot de passe normal)
3. Vérifiez que la **validation en 2 étapes** est activée sur votre compte Google

**Comment générer un mot de passe d'application Gmail** :
1. Allez sur https://myaccount.google.com/security
2. Activez la "Validation en deux étapes"
3. Allez dans "Mots de passe d'application"
4. Générez un nouveau mot de passe pour "Autre (nom personnalisé)"
5. Copiez-le dans `.env` → `MAIL_PASS=xxxx xxxx xxxx xxxx`

---

### 6. ❌ "Failed to fetch" ou erreur réseau

**Cause** : Le serveur backend n'est pas démarré

**Solution** :
```bash
# Vérifiez qu'il tourne dans un terminal
npm run dev:server
```

Vous devriez voir :
```
✅ Connecté à MongoDB
🚀 Serveur lancé sur http://localhost:3005
```

---

## 🧪 Test de la Réservation

### Étape 1 : Données de test valides

Utilisez ces valeurs pour tester :

```
Nom: Jean Dupont
Email: jean.dupont@example.com
Téléphone: 514-123-4567
Service: (sélectionnez dans la liste)
Date: (choisissez demain)
Heure: 14:00
Adresse: 123 Rue Test, Montréal, QC
Message: Test de réservation
```

### Étape 2 : Soumettre le formulaire

Cliquez sur "Confirmer la réservation"

### Étape 3 : Vérifier les logs

**Dans la console du navigateur (F12)** :
- Pas d'erreur rouge
- Message de succès affiché

**Dans le terminal du serveur** :
```
📨 Réservation reçue: { name: 'Jean Dupont', ... }
✅ Email de réservation envoyé avec succès
```

**Dans votre boîte email** :
- Email reçu avec les détails de la réservation

---

## 🔧 Débogage Avancé

### Voir ce que le frontend envoie

Ouvrez la console du navigateur (F12) → onglet "Network" → "Fetch/XHR"

1. Cliquez sur "Confirmer la réservation"
2. Trouvez la requête `reservation` dans la liste
3. Cliquez dessus
4. Regardez l'onglet "Payload" pour voir les données envoyées
5. Regardez l'onglet "Response" pour voir la réponse du serveur

### Voir ce que le serveur reçoit

J'ai ajouté des logs dans `server.js`. Dans le terminal du serveur, vous verrez :

```
📨 Réservation reçue: {
  name: '...',
  email: '...',
  phone: '...',
  service: '...',
  date: '...',
  time: '...',
  address: '...',
  message: '...'
}
```

Si un champ est manquant ou invalide, vous verrez :
```
❌ Validation échouée - champs manquants
```

---

## 📋 Checklist de Vérification

Avant de soumettre une réservation :

- [ ] Les 2 serveurs tournent (backend + frontend)
- [ ] Tous les champs obligatoires sont remplis
- [ ] L'email est au bon format
- [ ] Le téléphone est au bon format
- [ ] La date est dans le futur
- [ ] Un service est sélectionné dans le dropdown
- [ ] Le fichier `.env` contient les bonnes credentials Gmail

---

## 🆘 Toujours bloqué ?

Partagez-moi :

1. **Le message d'erreur exact** que vous voyez
2. **La console du navigateur** (F12 → Console → capture d'écran)
3. **Les logs du serveur** (ce qui s'affiche dans le terminal)

Je pourrai alors vous aider précisément ! 😊

---

## ✅ Test Rapide

Pour tester si l'email fonctionne sans passer par le formulaire :

```bash
node -e "
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

transporter.sendMail({
  from: process.env.MAIL_USER,
  to: process.env.MAIL_TO,
  subject: 'Test',
  text: 'Email de test'
}).then(() => {
  console.log('✅ Email test envoyé');
  process.exit(0);
}).catch(err => {
  console.error('❌ Erreur:', err.message);
  process.exit(1);
});
"
```

Si ça fonctionne → Le problème vient du formulaire frontend
Si ça échoue → Le problème vient de la config Gmail

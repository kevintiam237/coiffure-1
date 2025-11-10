# 🔍 Guide de Débogage - Problème de Données

## ✅ Diagnostic : Votre BD fonctionne !

Vous avez **18 services** dans votre MongoDB :
1. Boho Braids - 190 $CAD
2. Boho French Curls - 200 $CAD
3. Braided Twist - 100 $CAD
4. Bubble Braids - 180 $CAD
5. Butterfly Locs - 200 $CAD
... et 13 autres

## 🚀 Comment tester l'application

### Étape 1 : Démarrer le Backend
```bash
# Dans un terminal PowerShell
cd "c:\Users\tiamk\OneDrive\Mes cours\site_coifure"
npm run dev:server
```

**Vous devriez voir :**
```
✅ Connecté à MongoDB
🚀 Serveur lancé sur http://localhost:3005
```

### Étape 2 : Démarrer le Frontend
```bash
# Dans UN AUTRE terminal PowerShell
cd "c:\Users\tiamk\OneDrive\Mes cours\site_coifure"
npm run dev
```

**Vous devriez voir :**
```
VITE ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Étape 3 : Tester dans le navigateur
1. Ouvrir http://localhost:5173
2. Regarder la section "Services"
3. Les 18 services devraient s'afficher

---

## 🔧 Si les services ne s'affichent pas

### 1. Vérifier que le backend répond
Ouvrir http://localhost:3005/api/services dans votre navigateur

**Vous devriez voir :** Un tableau JSON avec vos 18 services

### 2. Vérifier la console du navigateur
1. Ouvrir les DevTools (F12)
2. Aller dans l'onglet "Console"
3. Regarder s'il y a des erreurs

**Erreurs communes :**
- ❌ `Failed to fetch` → Le serveur n'est pas démarré
- ❌ `CORS error` → Problème de CORS (déjà corrigé normalement)
- ❌ `404 Not Found` → URL incorrecte

### 3. Vérifier la console du backend
Dans le terminal où tourne `npm run dev:server`, vous devriez voir :
```
Erreur lors du fetch des services : [erreur]
```
Si vous voyez ça, il y a un problème de connexion à MongoDB.

---

## 🧪 Tests rapides

### Test 1 : Connexion MongoDB
```bash
node seedServices.js
```
✅ Si vous voyez "18 services existants" → BD OK

### Test 2 : API Backend
Ouvrir dans le navigateur : http://localhost:3005/api/services
✅ Si vous voyez du JSON → API OK

### Test 3 : Frontend
Ouvrir : http://localhost:5173
✅ Si les services s'affichent → Tout fonctionne !

---

## 📋 Checklist de débogage

- [ ] Le fichier `.env` existe avec `MONGODB_URI`
- [ ] `npm run dev:server` démarre sans erreur
- [ ] Message "✅ Connecté à MongoDB" s'affiche
- [ ] Message "🚀 Serveur lancé" s'affiche
- [ ] http://localhost:3005/api/services retourne du JSON
- [ ] `npm run dev` démarre le frontend
- [ ] http://localhost:5173 ouvre l'application
- [ ] La section "Services" affiche les cartes

---

## 🐛 Erreurs courantes

### Erreur : "Cannot find module 'dotenv'"
**Solution :**
```bash
npm install
```

### Erreur : "MongoServerError: bad auth"
**Solution :** Vos credentials MongoDB sont incorrects. Changez-les dans `.env`

### Erreur : "connect ECONNREFUSED"
**Solution :** MongoDB Atlas bloque votre IP. Autorisez-la dans Network Access.

### Services = [] (tableau vide)
**Solution :** Votre BD est vide. Exécutez :
```bash
node seedServices.js
```
Puis modifiez le script pour supprimer et réinsérer.

---

## 💡 Pour voir les logs en détail

Ajoutez des logs dans `server.js` :

```javascript
app.get("/api/services", async (req, res) => {
  try {
    console.log("🔍 Requête GET /api/services reçue");
    const services = await Service.find();
    console.log(`📊 ${services.length} services trouvés`);
    res.status(200).json(services);
  } catch (error) {
    console.error("❌ Erreur:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});
```

Vous verrez dans le terminal chaque fois que quelqu'un appelle l'API.

---

## ✅ Conclusion

Votre base de données **fonctionne** et contient **18 services**.

Si vous ne les voyez pas :
1. Vérifiez que les 2 serveurs tournent (backend + frontend)
2. Testez l'API directement dans le navigateur
3. Regardez la console pour les erreurs
4. Suivez cette checklist

**Besoin d'aide ?** Partagez le message d'erreur exact que vous voyez !

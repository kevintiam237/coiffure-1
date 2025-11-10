import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Modèle Service (même structure que dans server.js)
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  imageUrl: { type: String, required: true, trim: true },
  description: { type: String, default: "", trim: true }
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

// Services de coiffure à ajouter
const services = [
  {
    title: "Coiffure Afro",
    price: "50$",
    imageUrl: "/images/afro.jpg",
    description: "Coiffure afro professionnelle avec style"
  },
  {
    title: "Tresses",
    price: "80$",
    imageUrl: "/images/tresses.jpg",
    description: "Tresses africaines traditionnelles"
  },
  {
    title: "Locks",
    price: "100$",
    imageUrl: "/images/locks.jpg",
    description: "Entretien et création de dreadlocks"
  },
  {
    title: "Tissage",
    price: "120$",
    imageUrl: "/images/tissage.jpg",
    description: "Pose de tissage naturel ou synthétique"
  },
  {
    title: "Défrisage",
    price: "60$",
    imageUrl: "/images/defrisage.jpg",
    description: "Défrisage doux et professionnel"
  },
  {
    title: "Coloration",
    price: "70$",
    imageUrl: "/images/coloration.jpg",
    description: "Coloration capillaire avec produits de qualité"
  }
];

// Fonction pour ajouter les services
const seedDatabase = async () => {
  try {
    // Connexion à MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connecté à MongoDB");
    console.log("📊 Base de données:", mongoose.connection.name);

    // Vérifier combien de services existent déjà
    const existingCount = await Service.countDocuments();
    console.log(`\n📋 Services existants: ${existingCount}`);

    if (existingCount > 0) {
      console.log("\n⚠️  Des services existent déjà. Voulez-vous :");
      console.log("   1. Les garder et ne rien faire");
      console.log("   2. Les supprimer et ajouter les nouveaux");
      console.log("\n💡 Modifiez ce script selon votre choix");
      
      // Pour voir les services existants
      const existing = await Service.find();
      console.log("\n🔍 Services actuels:");
      existing.forEach((s, i) => {
        console.log(`   ${i + 1}. ${s.title} - ${s.price}`);
      });
    } else {
      console.log("\n📝 Aucun service trouvé. Ajout des services...");
      
      // Ajouter les services
      const result = await Service.insertMany(services);
      console.log(`\n✅ ${result.length} services ajoutés avec succès!`);
      
      console.log("\n📋 Services créés:");
      result.forEach((s, i) => {
        console.log(`   ${i + 1}. ${s.title} - ${s.price}`);
      });
    }

    // Fermer la connexion
    await mongoose.connection.close();
    console.log("\n👋 Connexion fermée");

  } catch (error) {
    console.error("\n❌ Erreur:", error.message);
    process.exit(1);
  }
};

// Exécuter le script
seedDatabase();

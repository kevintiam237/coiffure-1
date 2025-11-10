import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log("🧪 Test de configuration email...\n");
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS ? "***" + process.env.MAIL_PASS.slice(-4) : "NON DÉFINI");
console.log("MAIL_TO:", process.env.MAIL_TO);
console.log("\n📧 Envoi d'un email de test...\n");

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
  subject: '🧪 Email de Test - Labraideuse',
  text: `
    Ceci est un email de test.
    
    Si vous recevez cet email, votre configuration Gmail fonctionne correctement ! ✅
    
    Testé le: ${new Date().toLocaleString('fr-CA')}
  `
}).then(() => {
  console.log('✅ Email de test envoyé avec succès !');
  console.log('📬 Vérifiez votre boîte:', process.env.MAIL_TO);
  process.exit(0);
}).catch(err => {
  console.error('\n❌ ERREUR lors de l\'envoi:\n');
  console.error('Message:', err.message);
  
  if (err.message.includes('Invalid login')) {
    console.error('\n💡 SOLUTION:');
    console.error('   1. Vérifiez que MAIL_USER et MAIL_PASS sont corrects');
    console.error('   2. Utilisez un "mot de passe d\'application" Gmail');
    console.error('   3. Activez la validation en 2 étapes sur Google');
    console.error('   4. Générez un nouveau mot de passe: https://myaccount.google.com/apppasswords');
  }
  
  process.exit(1);
});

// Configuration des images pour le jeu "Les Héros Invisibles"
// Mapping entre les noms d'espèces du jeu et les fichiers images

const imageConfig = {
  // === ESPÈCES MENACÉES (les "intrus" à trouver) ===
  "Mélibée": "Mélibée.jpg",
  
  "Agrion bleuissant": "Agrion bleuissant (Ischnura elegans).jpg",
  
  "Cordulie splendide": "Cordulie splendide (Somatochlora metallica).jpg",
  
  "Serratella mesoleuca": "Serratella mesoleuca (Serratella mesoleuca).jpg",
  
  "Vanesse des pariétaires": "Vanesse des pariétaires.jpg",

  // === ESPÈCES COMMUNES (les "leurres") ===
  "Mouche domestique": "Mouche.jpg",
  
  "Fourmi": "Fourmi noire (Lasius niger).jpg",
  
  "Papillon commun": "Papillon citron (Gonepteryx rhamni).jpg",
  
  "Scarabée commun": "Scarabée commun (Geotrupes stercorarius or Scarabaeus sacer).jpg",
  
  "Sauterelle verte": "Grillon champêtre (Gryllus campestris).jpg"
};

// Images alternatives disponibles dans votre dossier
// (décommentez et modifiez selon vos besoins)
const alternativeImages = {
  // Pour remplacer si les noms posent problème :
  
  // "Mélibée": "Abeille.jpg", // Si vous voulez utiliser l'abeille à la place
  
  // "Papillon commun": "Papillon flambé (Iphiclides podalirius).jpg", // Alternative papillon
  
  // "Sauterelle verte": "Bourdon terrestre (Bombus terrestris).jpg", // Si pas de grillon
  
  // Autres insectes disponibles pour enrichir le jeu :
  // "Perce-oreille": "Perce-oreille (Forficula auricularia).jpg",
  // "Lucane cerf-volant": "Lucane cerf-volant (Lucanus cervus).jpg",
  // "Termite": "Termite des forêts (Reticulitermes flavipes).jpg",
  // "Coccinelle": "Coccinelle à sept point.jpg",
  // "Sphinx": "Sphinx colibri (Macroglossum stellatarum).jpg",
  // "Syrphe": "Syrphe ceinturé (Episyrphus balteatus).jpg"
};

// Configuration du dossier images
const imageFolder = "images/";

// Fonction utilitaire pour obtenir le chemin complet d'une image
function getImagePath(speciesName) {
  const filename = imageConfig[speciesName];
  if (!filename) {
    console.warn(`Aucune image configurée pour: ${speciesName}`);
    return null;
  }
  return imageFolder + filename;
}

// Fonction pour vérifier si toutes les images existent
function validateImageConfig() {
  const missingImages = [];
  
  Object.entries(imageConfig).forEach(([species, filename]) => {
    // Note: Cette vérification ne peut pas être faite côté client
    // Utilisez cette liste pour vérifier manuellement vos fichiers
    console.log(`${species} → ${filename}`);
  });
  
  return missingImages;
}

// Export pour utilisation dans le jeu principal
if (typeof module !== 'undefined' && module.exports) {
  // Pour Node.js
  module.exports = { imageConfig, getImagePath, validateImageConfig };
} else {
  // Pour le navigateur
  window.imageConfig = imageConfig;
  window.getImagePath = getImagePath;
  window.validateImageConfig = validateImageConfig;
}

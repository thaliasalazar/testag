Vous trouverez ci-après une explication de la structure du projet, ainsi que des instructions sur la configuration et l'exécution du site. Des détails sur les fonctionnalités implémentées sont également fournis.


# Ma page testag 

[https://mnassrib.github.io/testag/](https://mnassrib.github.io/testag/)

Ce projet est une page web simple hébergée sur GitHub Pages, conçue pour la web analyse. Il permet de tester la configuration de Google Tag Manager (GTM) et Google Analytics 4 (GA4) pour le suivi des utilisateurs.

## Structure du projet

```
testag/
├── _config.yml
├── index.html
├── contact.html
├── assistance.html
├── README.md
├── _layouts/
│   └── default.html
└── assets/
    └── css/
        └── main.css
```

### _config.yml

Fichier de configuration pour Jekyll, utilisé par GitHub Pages pour générer le site.

### index.html

Page d'accueil du site contenant diverses sections pour tester GTM et GA4.

### _layouts/default.html

Modèle par défaut utilisé pour toutes les pages du site. Contient le code pour intégrer GTM et un conteneur pour le contenu de chaque page.

### assets/css/main.css

Fichier CSS principal pour styliser le site. Contient les styles pour le corps du site, les sections, les boutons, les images, et les formulaires.

## Configuration et Exécution

1. **Clonez le repository :**

   ```bash
   git clone https://github.com/votre-utilisateur/testag.git
   ```

2. **Accédez au répertoire du projet :**

   ```bash
   cd testag
   ```

3. **Ouvrez le projet dans votre éditeur de texte préféré.**

4. **Configurez votre fichier `_config.yml`** :

   ```yaml
   title: "Ma page de test"
   description: "Une page web pour tester Google Tag Manager et Google Analytics 4"
   ```

5. **Personnalisez `index.html` si nécessaire.**

6. **Commitez vos changements et poussez vers GitHub :**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

7. **Activez GitHub Pages :**

   - Allez dans les paramètres de votre repository sur GitHub.
   - Sous l'onglet "Pages", sélectionnez la branche `main` comme source et enregistrez.

Votre site sera maintenant accessible à l'adresse `https://votre-utilisateur.github.io/testag/`.

## Fonctionnalités

### Google Tag Manager (GTM)

Le code pour GTM est inclus dans le fichier `_layouts/default.html`. Il est automatiquement chargé sur toutes les pages utilisant ce modèle. Les événements de clic sur les boutons sont également suivis via GTM.

### Google Analytics 4 (GA4)

GA4 est configuré via GTM pour suivre les interactions des utilisateurs sur la page.

### Sections de la page d'accueil (`index.html`)

- **À propos de cette page** : Description de l'objectif de la page.
- **Boutons interactifs** : Contient deux boutons avec des IDs spécifiques (`button1` et `button2`) pour tester les événements de clic.
- **Ressources** : Liens vers des articles et des ressources externes avec des images.
- **Contenu supplémentaire** : Explication des avantages et des fonctionnalités de GTM.
- **Contactez-nous** : Formulaire de contact simple.

### CSS (main.css)

Le fichier CSS contient les styles pour :

- Le corps du site
- Les en-têtes et pieds de page
- Les boutons
- Les images et les sections de contenu
- Les formulaires de contact

## Améliorations possibles

- Ajouter plus de styles pour améliorer la réactivité sur les appareils mobiles.
- Ajouter des tests pour vérifier le bon fonctionnement de GTM et GA4.
- Ajouter des animations ou des transitions CSS pour une meilleure expérience utilisateur.

## Contribuer

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request pour toute suggestion ou amélioration.

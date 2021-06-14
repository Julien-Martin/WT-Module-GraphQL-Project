# WT Module GraphQL
## Mini-projet

L'objectif de ce mini projet est d'être capable de mettre en place une API simple basée sur GraphQL.
Pour réaliser cet objectif, vous allez devoir créer l'API d'un mini Twitter.

Pour vous faciliter la tâche, la base de donnée avec les relations a déjà été créer.
Vous pourrez donc utiliser les fonctions de l'ORM Prisma pour discuter avec la base de donnée.

### Rendu attendu 
- Projet complet en archive ZIP envoyé à l'adresse julienmartin@codeassist.io avec comme objet de mail "WT-Module-GraphQL-NOM-PRENOM"
- Dans ce projet, vous retrouverez un fichier answers.graphql dans lequel vous devez mettre les différentes requêtes de test (queries, mutations et subscriptions)

Vous pouvez choisir l'architecture que vous souhaitez, tant que le serveur est lancé avec un seul fichier `index.js`


### Prérequis
* NodeJS >= 12
* npm >= 7

### Architecture initiale
├── node_modules (dépendances)
├── prisma
│   ├── migrations
│   ├── data.db (base de donnée, ce fichier est généré automatiquement)
│   ├── schema.prisma (définition des models)
│   └── seed.js (données aléatoires insérées dans la base de donnée)
├── .eslintrc.js
├── .gitignore
├── answers.graphql (vos réponses)
├── index.js (Fichier principal)
├── package.json
└── README.md

### Initialisation du projet

#### Installation des dépendances
`npm install` ou `yarn install`

#### Initialisation de la base de donnée
`npm run init-project` ou `yarn init-project`

### Outils
Vous pouvez utiliser prisma afin d'observer/modifier/supprimer des lignes de la base de donnée
`npm run studio` ou `yarn studio` 

### Instructions
> Pour chaque queries, mutations, subscriptions (côté client) la requête doit être mise dans le fichier `answers.graphql` sinon elle ne pourra être valider
#### Initialisation (1 point)
* Lancer un serveur Apollo

#### Utilisateurs (5 points)
* Permettre de récupérer les utilisateurs
* Permettre de récupérer un utilisateur par id
* Permettre de créer un utilisateur
* Permettre de modifier un utilisateur
* Permettre de supprimer un utilisateur

#### Tweets (6 points)
* Permettre de récupérer les tweets
* Permettre de récupérer un tweet par id
* Permettre de récupérer un tweet par id utilisateur
* Permettre de créer un tweet
* Permettre de modifier un tweet
* Permettre de supprimer un tweet

#### Intéractions (4 points)
> Faites attention à la logique, un utilisateur n'est pas censé pouvoir liker deux fois le même tweet, le cas échéant cela annule le like
* Permettre un utilisateur de like un tweet
* Permettre un utilisateur de unlike un tweet
* Permettre un utilisateur de retweet un tweet
* Permettre un utilisateur de unretweet un tweet

#### Notifications (2 points)
* Permettre d'être notifié lorsqu'un like est créer (via utilisateur)
* Permettre d'être notifié lorsqu'un retweet est créer (via utilisateur)

#### Bonne pratiques (2 points)
* Respecter les champs obligatoires
* Respecter le nommage des variables
* Documenter son/ses schémas

#### Points bonus (1 point)
* Utiliser des fragments
* Gérer les erreurs
* Configurer une profondeur maximale (sécurité)

#### Source utile
* ORM : https://www.prisma.io/docs/concepts/components/prisma-client/crud
* Apollo Server: https://www.apollographql.com/docs/apollo-server/schema/schema/
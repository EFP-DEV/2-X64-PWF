# Création 1 — Préparer un badge

Un badge présente le prénom et le rôle d’une personne. On écrit un programme qui assemble ces deux informations, puis affiche le texte dans la console.

## Préparer le fichier actif

On reprend le dossier `labo-renforcement` utilisé pour le débogage. Si ce dossier manque, la [préparation du dossier](./session_03-debogage.md#preparation) explique comment le créer et récupérer les fichiers individuellement.

Si [01-preparer-un-badge.js](./labo-renforcement/creation/01-preparer-un-badge.js) manque dans le sous-dossier `creation`, on ouvre son lien sur GitHub et on utilise **Download raw file**. On place le fichier dans `labo-renforcement/creation` en conservant son nom et son extension. Un fichier déjà présent est conservé.

Le HTML [renforcement.html](./labo-renforcement/renforcement.html) et la feuille de style [renforcement-console.css](./labo-renforcement/renforcement-console.css) sont fournis. On ouvre `renforcement.html` dans VS Code et on remplace son unique balise `script` par :

```html
<script src="creation/01-preparer-un-badge.js"></script>
```

On enregistre le HTML, puis on ouvre le fichier local `creation/01-preparer-un-badge.js` dans l’éditeur. Ce fichier contient les valeurs de départ et des commentaires ; le texte du badge et son affichage restent à écrire.

Dans le navigateur, on garde la page locale `renforcement.html` active et sa console ouverte. On vide la console et on recharge la page. Le fichier de départ n’affiche encore aucun résultat. Le fichier JavaScript à compléter est celui indiqué par le `src` ; ouvrir un autre fichier dans l’éditeur ne change pas le programme chargé.

## Écrire le programme

Le fichier `creation/01-preparer-un-badge.js` contient déjà ces déclarations, qu’on conserve sans les recopier :

```js
let prenom = "Ada";
let role = "UX designer";
```

On complète ce même fichier en construisant le texte dans une variable `badge`. Le prénom et le rôle sont séparés par `" — "`. L’instruction `console.log(badge)` affiche ensuite le résultat.

**Résultat attendu :** `Ada — UX designer`.

## Vérifier le résultat

On change uniquement les valeurs de départ dans `creation/01-preparer-un-badge.js`. Pour chaque essai, on enregistre le JavaScript, on vide la console, puis on recharge `renforcement.html`. Le programme repart des valeurs écrites dans le fichier. La page garde le même aspect ; le résultat apparaît dans la console.

| Prénom | Rôle | Résultat attendu |
|---|---|---|
| Ada | UX designer | Ada — UX designer |
| Lina | UX designer | Lina — UX designer |
| Lina | UI designer | Lina — UI designer |

On explique quelle instruction construit le texte et quelle instruction l’affiche.

[Suite — Vérifier un stock](./session_03-creation-stock.md)

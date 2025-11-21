# Intrinsic Design: The End of Media Queries

## 1. Préface

Depuis 15 ans, le responsive design repose sur une fausse idée :
le développeur devrait décider à quel moment un layout “doit” changer.

Cette époque est terminée.

CSS Grid et l’intrinsic design n'ont pas seulement introduit de nouveaux outils.
Ils ont rendu obsolète toute une manière de penser.

Il est temps d'arrêter de microgérer les pixels et de laisser le navigateur travailler.

---

# 2. Historique rapide : comment on en est arrivés là

## 2.1 L’âge préhistorique (2000–2010)

### Float layouts

Le web n’avait pas de système de layout.
Nous détournions `float` pour faire des colonnes.
Tout était artificiel. Rien n’était prévu pour le responsive.

### Media queries naissent par nécessité

Vers 2009, CSS introduit les *media queries*.
Ce sont des conditions externes :

```
@media (min-width: 600px) { ... }
```

L'idée :
“À 600px, deux colonnes. À 900px, trois. En dessous, une seule.”

C’est du tuning manuel, dépendant d’un parc d’appareils précis.
Cela fonctionnait parce qu’on n’avait rien d’autre.

---

## 2.2 Flexbox (2013–2015)

Flexbox est une révolution pour l’alignement, pas pour le layout global.
On peut créer des lignes, mais pas de vraies grilles bidirectionnelles.

Les media queries restent indispensables pour contrôler le nombre de colonnes.

---

## 2.3 Grid (2017) : la rupture conceptuelle

Quand CSS Grid arrive, la situation change radicalement.

Grid introduit :

* un système bidimensionnel
* le placement automatique
* `minmax()`
* `auto-fit` / `auto-fill`
* les tracks implicites
* la capacité de s’adapter sans intervention humaine

Pour la première fois, le navigateur **sait** faire ce que nous forcions autrefois via media queries.

---

# 3. Media queries vs Intrinsic Design

## 3.1 L’approche media queries

Elle repose sur une illusion de contrôle.

```
@media (min-width: 480px) { ... }
@media (min-width: 720px) { ... }
@media (min-width: 1024px) { ... }
```

Ce modèle impose 3 règles absurdes :

1. Le développeur doit deviner les tailles des écrans du futur.
2. Le contenu doit se plier à des seuils artificiels.
3. Le layout casse à chaque nouvelle variation de design.

C’est fragile, verbeux, difficile à maintenir et anti-ergonomique.

---

## 3.2 L’approche intrinsic

*“Let the content decide.”* (jen simons)

Un layout doit s’adapter naturellement, sans divination de breakpoints.

La ligne suivante résume toute la philosophie :

```
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

Elle dit :

* Taille minimale : 200px.
* S’étire au maximum.
* Crée autant de colonnes que possible selon la place disponible.
* Aucun breakpoint.
* Aucun test de device.
* Aucune maintenance.

Le layout devient un système vivant, pas une série de hacks.

---

# 4. La démonstration technique

## 4.1 Ce que les media queries exigent

Pour une grille responsive classique :

```
@media (min-width: 400px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 700px) {
  .grid { grid-template-columns: 1fr 1fr 1fr; }
}
@media (min-width: 1000px) {
  .grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
}
```

Trois breakpoints, deux heures de tuning, des tests sur 12 appareils.

---

## 4.2 Ce que Grid fait en une seule ligne

```
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

Résultat :

* Si 1 colonne rentre → 1 colonne
* Si 2 rentrent → 2
* Si 3 rentrent → 3
* Etc.

Sans intervention humaine.
Sans conditions arbitraires.
Sans maintenance.

---

# 5. Stop designing for breakpoints

.. Start designing for possibilities (jen simons)

Les media queries appartiennent au passé des floats et des polyfills.
Grid change la manière même dont on conçoit un layout.

Un layout moderne ne doit pas :

* deviner la taille d’un iPad de 2016
* dépendre d’un tableau de breakpoints figés
* imposer des ruptures abruptes
* répéter des colonnes à la main

Le responsive design n’est pas une liste de règles.
C’est une **propriété naturelle du contenu**.

L’intrinsic design n’est pas une “technique avancée”.
C’est le web que nous étions censés avoir dès le début.

---

# 6. Quand utiliser encore des media queries ?

Pour être clair :
les media queries ne sont pas mortes, mais leur usage doit être exceptionnel.

Elles restent légitimes pour :

* typographie fluid + cap sizes personnalisées
* réarrangements majeurs du layout global
* changements décoratifs (UI, thèmes, spacing)
* règles d’accessibilité (préférence utilisateur)

Mais pour décider du nombre de colonnes ?
Plus jamais.

---

# 7. Conclusion

Grid n’est pas un outil en plus.
C’est une nouvelle manière de penser.

Les media queries étaient une béquille,
un patch historique né d’une époque sans layout digne de ce nom.

Aujourd’hui, grâce à Grid et aux propriétés intrinsèques :

* le web peut s’adapter sans mensonge
* le design devient fluide et naturel
* les breakpoints redeviennent exceptionnels
* et les développeurs se libèrent d’une dette mentale de 10 ans

**L’avenir du responsive n’est pas conditionnel. Il est intrinsèque.**

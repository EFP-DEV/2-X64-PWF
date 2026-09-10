# Activité 13 — Réutiliser individuellement

[Question de départ](../session_01.md#13-réutiliser-individuellement) · [Sommaire du cours](../session_01.md#sommaire)

**Point de départ :** la page de Sullivan et l’horloge interactive de l’activité 12. Les deux fichiers `clock.html` et `clock.js` fonctionnent déjà ; aucun nouveau fichier n’est nécessaire.

Vous pouvez consulter vos notes. Construisez vous-même les instructions et les explications ; cette partie ne fournit pas de code à compléter.

1. **Modifier une présentation.** Rechargez la page de Sullivan. Rendez son texte noir sur fond `#ffff00` avec JavaScript. Expliquez les deux propriétés modifiées et les trois paires de la couleur.
2. **Prévoir un résultat.** Dans le fichier HTML de l’horloge, placez `9` et `59` dans les deux spans. Enregistrez et rechargez sans cliquer. Prédisez l’affichage après un clic et indiquez les affectations qui modifieront les valeurs pendant ce calcul. Cliquez, puis comparez.
3. **Distinguer donnée affichée et donnée relue.** Après l’essai précédent, lisez le `textContent` des minutes dans la console. Affectez-lui le texte `"59"`, puis relevez l’heure maintenant affichée. Prédisez le résultat du prochain clic et vérifiez. Expliquez pourquoi la fonction tient compte de votre modification. Enfin, prédisez ce qui restera de cette modification après un rechargement et vérifiez.

À la mise en commun, montrez votre résultat et expliquez une instruction avec vos propres mots. Si une prédiction diffère de l’observation, repérez l’étape où elles divergent.

## Bilan personnel

- [ ] Je distingue une valeur de sa représentation et un calcul d’une affectation.
- [ ] Mon horloge lit les données du HTML et les convertit avant le calcul.
- [ ] Les reports des minutes et des heures fonctionnent, y compris à minuit.
- [ ] L’heure avance d’une minute à chaque clic, sans avancer avant le premier clic.
- [ ] Je peux expliquer ce que le rechargement restaure et ce qui déclenche la fonction.

Le format sur deux chiffres, l’avancement automatique, la synchronisation avec l’heure réelle et la validation de saisies ne sont pas demandés. Les essais utilisent une heure valide et ajoutent exactement une minute.

---

[Retour au bilan 13 dans le cours](../session_01.md#bilan-13) · [Fin du cours](../session_01.md#fin-du-cours)

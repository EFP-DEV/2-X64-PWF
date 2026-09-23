function attendre(dureeMs) {
  return new Promise(function (terminer) {
    setTimeout(terminer, dureeMs);
  });
}

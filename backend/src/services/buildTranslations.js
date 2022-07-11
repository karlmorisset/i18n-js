function buildTranslations(rawDdata) {
  const traductions = {};

  rawDdata.forEach((row) => {
    if (!traductions[row.reference]) {
      traductions[row.reference] = {};
    }

    traductions[row.reference].id = row.id;
    traductions[row.reference][row.lang] = row.body;
  });

  return traductions;
}

module.exports = buildTranslations;

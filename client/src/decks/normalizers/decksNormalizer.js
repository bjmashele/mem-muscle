import { normalize, schema } from "normalizr";

export function normalizeDecks(decksPayload) {
  const cardSchema = new schema.Entity("cards");
  const deckSchema = new schema.Entity("decks", {
    cards: [cardSchema]
  });

  const normalizedData = normalize(decksPayload, [deckSchema]);

  return normalizedData;
}

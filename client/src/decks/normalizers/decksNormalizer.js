import { normalize, schema } from "normalizr";

export function normalizeDecks(decksPayload) {
  const card = new schema.Entity("cards");
  const deck = new schema.Entity("decks", {
    cards: [card]
  });

  const deckNormalizer = decksPayload => normalize(decksPayload, [deck]);

  return normalize(decksPayload, [deck]);
}

import {
  getWordCount,
  getUniqueWords,
  reverseSentence,
} from "../utils/stringUtils.js";

export const transformSentence = (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ error: "Invalid or missing JSON body" });
  }

  const { sentence } = req.body;

  if (!sentence || typeof sentence !== "string") {
    return res
      .status(400)
      .json({ error: "Sentence is required and must be a string" });
  }

  const word_count = getWordCount(sentence);
  const unique_words = getUniqueWords(sentence);
  const reversed_sentence = reverseSentence(sentence);

  res.json({
    word_count,
    unique_words,
    reversed_sentence,
  });
};

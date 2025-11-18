export const getWordCount = (sentence) => {
  return sentence.trim().split(/\s+/).length;
};

export const getUniqueWords = (sentence) => {
  const words = sentence.trim().split(/\s+/);
  return [...new Set(words.map((w) => w.toLowerCase()))];
};

export const reverseSentence = (sentence) => {
  return sentence.trim().split(/\s+/).reverse().join(" ");
};

export function calculateReadabilityScore(text) {
  // Implement a simple readability score calculator
  // This is a basic implementation of the Flesch Reading Ease score
  
  // Count sentences
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentenceCount = sentences.length;
  
  // Count words
  const words = text.split(/\s+/).filter(w => w.trim().length > 0);
  const wordCount = words.length;
  
  // Count syllables (simplified approach)
  const syllableCount = countSyllables(text);
  
  // Calculate Flesch Reading Ease score
  if (sentenceCount === 0 || wordCount === 0) return 0;
  
  const averageWordsPerSentence = wordCount / sentenceCount;
  const averageSyllablesPerWord = syllableCount / wordCount;
  
  const fleschScore = 206.835 - (1.015 * averageWordsPerSentence) - (84.6 * averageSyllablesPerWord);
  
  return {
    score: Math.min(Math.max(0, Math.round(fleschScore)), 100),
    wordCount,
    sentenceCount,
    interpretation: interpretReadabilityScore(fleschScore),
  };
}

function countSyllables(text) {
  // A simple syllable counter (not perfectly accurate but sufficient for estimation)
  const words = text.toLowerCase().split(/\s+/);
  let syllableCount = 0;
  
  for (const word of words) {
    if (word.length <= 3) {
      syllableCount += 1;
      continue;
    }
    
    // Count vowel groups as syllables
    const vowelGroups = word.match(/[aeiouy]{1,}/g);
    let count = vowelGroups ? vowelGroups.length : 1;
    
    // Subtract syllables for common patterns
    if (word.endsWith('e')) count--;
    if (word.endsWith('le') && word.length > 2) count++;
    if (word.endsWith('es') || word.endsWith('ed')) count--;
    
    // Ensure at least one syllable per word
    syllableCount += Math.max(1, count);
  }
  
  return syllableCount;
}

function interpretReadabilityScore(score) {
  if (score >= 90) return "Very Easy - 5th Grade";
  if (score >= 80) return "Easy - 6th Grade";
  if (score >= 70) return "Fairly Easy - 7th Grade";
  if (score >= 60) return "Standard - 8th-9th Grade";
  if (score >= 50) return "Fairly Difficult - 10th-12th Grade";
  if (score >= 30) return "Difficult - College Level";
  return "Very Difficult - College Graduate";
}

export function extractKeyPhrases(text) {
  // Extract legally significant phrases and terms
  const legalPhrases = [
    { phrase: "arbitration", category: "Dispute Resolution" },
    { phrase: "class action", category: "Legal Rights" },
    { phrase: "waive", category: "Legal Rights" },
    { phrase: "liability", category: "Liability" },
    { phrase: "indemnify", category: "Liability" },
    { phrase: "jurisdiction", category: "Legal Rights" },
    { phrase: "terminate", category: "Account Rights" },
    { phrase: "privacy", category: "Privacy" },
    { phrase: "data collection", category: "Privacy" },
    { phrase: "third party", category: "Data Sharing" },
    { phrase: "intellectual property", category: "IP Rights" },
    { phrase: "refund", category: "Financial" },
    { phrase: "cancel", category: "Account Rights" },
    { phrase: "opt out", category: "Options" },
    { phrase: "consent", category: "Legal Rights" },
    { phrase: "agree", category: "Legal Rights" },
  ];
  
  const result = {};
  
  // Check for each phrase in the text
  for (const { phrase, category } of legalPhrases) {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    const matches = text.match(regex);
    
    if (matches && matches.length > 0) {
      if (!result[category]) {
        result[category] = [];
      }
      
      result[category].push({
        phrase,
        count: matches.length,
      });
    }
  }
  
  return result;
}

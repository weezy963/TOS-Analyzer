import React from 'react';

export default function AnalysisResult({ analysis }) {
  const {
    summary,
    concerningClauses,
    fairnessRating,
    keyPoints,
    readabilityScore,
    keyPhrases,
  } = analysis;
  
  const getFairnessColor = (rating) => {
    if (rating >= 7) return 'text-green-600';
    if (rating >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getReadabilityColor = (score) => {
    if (score.score >= 70) return 'text-green-600';
    if (score.score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Analysis Results</h2>
      
      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Summary</h3>
        <p className="text-gray-700">{summary}</p>
      </section>
      
      {/* Ratings */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="text-lg font-medium mb-2">Fairness Rating</h4>
          <div className="flex items-center">
            <span className={`text-4xl font-bold ${getFairnessColor(fairnessRating)}`}>
              {fairnessRating}/10
            </span>
            <div className="ml-4 text-sm text-gray-600">
              {fairnessRating >= 7 ? 'Generally fair terms' : 
               fairnessRating >= 4 ? 'Mixed terms with some concerns' : 
               'Potentially problematic terms'}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="text-lg font-medium mb-2">Readability</h4>
          <div className="flex items-center">
            <span className={`text-4xl font-bold ${getReadabilityColor(readabilityScore)}`}>
              {readabilityScore.score}/100
            </span>
            <div className="ml-4 text-sm text-gray-600">
              {readabilityScore.interpretation}
              <div className="mt-1">
                {readabilityScore.wordCount} words, {readabilityScore.sentenceCount} sentences
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Concerning Clauses */}
      {concerningClauses && concerningClauses.length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-red-600">Concerning Clauses</h3>
          <ul className="list-disc list-inside space-y-2">
            {concerningClauses.map((clause, index) => (
              <li key={index} className="text-gray-700">{clause}</li>
            ))}
          </ul>
        </section>
      )}
      
      {/* Key Points */}
      {keyPoints && Object.keys(keyPoints).length > 0 && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Key Points</h3>
          <div className="space-y-4">
            {Object.entries(keyPoints).map(([category, points]) => (
              <div key={category}>
                <h4 className="text-lg font-medium mb-2">{category}</h4>
                <ul className="list-disc list-inside space-y-1">
                  {points.map((point, index) => (
                    <li key={index} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Key Phrases */}
      {keyPhrases && Object.keys(keyPhrases).length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-3">Legal Terms Detected</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(keyPhrases).map(([category, phrases]) => (
              <div key={category} className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium mb-2">{category}</h4>
                <ul className="space-y-1">
                  {phrases.map((item, index) => (
                    <li key={index} className="text-sm">
                      <span className="font-medium">{item.phrase}</span>
                      <span className="text-gray-500 ml-1">({item.count} mentions)</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

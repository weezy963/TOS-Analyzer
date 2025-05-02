import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InputForm from '../components/InputForm';
import AnalysisResult from '../components/AnalysisResult';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  const handleAnalyzeText = async (text) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error analyzing text:', error);
      alert('Failed to analyze text. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Terms of Service Analyzer</title>
        <meta name="description" content="Analyze and simplify Terms of Service documents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Terms of Service Analyzer</h1>
          <p className="text-lg text-center mb-8">
            Paste any Terms of Service or Privacy Policy to get a simplified analysis and 
            highlight potentially concerning clauses.
          </p>
          
          <InputForm onSubmit={handleAnalyzeText} />
          
          {isLoading && <LoadingSpinner />}
          
          {result && !isLoading && <AnalysisResult analysis={result} />}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

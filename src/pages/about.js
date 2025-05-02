import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About | Terms of Service Analyzer</title>
        <meta name="description" content="About the Terms of Service Analyzer tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Terms of Service Analyzer</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-gray-700 mb-4">
              Terms of Service Analyzer uses advanced AI to help you understand complex legal agreements. 
              We analyze Terms of Service, Privacy Policies, and other legal documents to highlight 
              important terms, identify concerning clauses, and explain them in simple language.
            </p>
            <p className="text-gray-700">
              Our goal is to empower users with better understanding of the agreements they accept online, 
              promoting transparency and informed consent.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Paste or upload a Terms of Service document</li>
              <li>Our AI analyzes the text, identifying key clauses and legal terminology</li>
              <li>We generate a comprehensive report highlighting important provisions</li>
              <li>The document is scored for readability and overall fairness</li>
              <li>Concerning clauses that may affect your rights are flagged</li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Important Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-700">
                <strong>Not Legal Advice:</strong> This tool provides general information and analysis for educational 
                purposes only. It is not a substitute for professional legal advice. Always consult with a qualified 
                attorney for specific legal concerns or questions.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
            <p className="text-gray-700 mb-4">
              We do not store the documents you analyze. All processing is done securely, and your data is not 
              used for training or other purposes. We value your privacy as much as we help you understand 
              privacy policies.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

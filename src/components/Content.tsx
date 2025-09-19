import React from 'react';

const Content: React.FC = () => {
  return (
    <main className="flex-1 overflow-auto p-8">
      <section id="intro" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <p>This is a technical documentation page built with React, TypeScript, Vite & Tailwind CSS. It includes dark mode and search toggle + sidebar navigation.</p>
      </section>

      <section id="setup" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Setup Guide</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto">
{`# install dependencies
npm install

# run dev server
npm run dev`}
        </pre>
      </section>

      <section id="api" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">API Reference</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code>getData(): Promise&lt;Data&gt;</code> – fetches data from API.</li>
          <li><code>saveData(item: Item): Promise&lt;void&gt;</code> – saves item to server.</li>
        </ul>
      </section>

      <section id="examples" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Examples</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto">
{`import { getData } from "./api";

async function run() {
  const data = await getData();
  console.log(data);
}

run();`}
        </pre>
      </section>
    </main>
  );
};

export default Content;

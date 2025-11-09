export default function LaunchInstructions() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">How to Launch the Torys Website Clone</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Node.js (version 18 or later)</li>
            <li>npm or yarn package manager</li>
            <li>Visual Studio Code (recommended)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Step 1: Extract the ZIP File</h2>
          <p>Extract the downloaded ZIP file to a location on your computer.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Step 2: Open the Project in VS Code</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open Visual Studio Code</li>
            <li>Go to File &gt; Open Folder</li>
            <li>Navigate to the extracted folder and select it</li>
            <li>Click "Open"</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Step 3: Install Dependencies</h2>
          <p>Open a terminal in VS Code by going to Terminal &gt; New Terminal, then run:</p>
          <div className="bg-gray-100 p-3 rounded my-3">
            <code>npm install</code>
          </div>
          <p>Or if you prefer yarn:</p>
          <div className="bg-gray-100 p-3 rounded my-3">
            <code>yarn install</code>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Step 4: Start the Development Server</h2>
          <p>After the dependencies are installed, run:</p>
          <div className="bg-gray-100 p-3 rounded my-3">
            <code>npm run dev</code>
          </div>
          <p>Or with yarn:</p>
          <div className="bg-gray-100 p-3 rounded my-3">
            <code>yarn dev</code>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Step 5: View the Website</h2>
          <p>Open your browser and navigate to:</p>
          <div className="bg-gray-100 p-3 rounded my-3">
            <code>http://localhost:3000</code>
          </div>
          <p>You should now see the Torys website clone running locally on your machine.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Making Changes</h2>
          <p>
            You can edit any of the files in the project to customize the website. The changes will automatically be
            reflected in the browser (hot reloading).
          </p>
          <p>Key files to modify:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>components/*.jsx</code> - Individual components like navbar, footer, etc.
            </li>
            <li>
              <code>app/page.jsx</code> - Main page structure
            </li>
            <li>
              <code>app/globals.css</code> - Global styles
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Building for Production</h2>
          <p>When you're ready to deploy the website, build it with:</p>
          <div className="bg-gray-100 p-3 rounded my-3">
            <code>npm run build</code>
          </div>
          <p>
            This will create an optimized production build in the <code>.next</code> folder.
          </p>
        </section>
      </div>
    </div>
  )
}


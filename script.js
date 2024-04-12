const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// List of repositories to fetch JSDoc comments from
const repositories = [
    'https://github.com/R-ohit-B-isht/Test_Docs_1.git',
    'https://github.com/R-ohit-B-isht/Test_Docs_2.git'
];

// Destination directory for the merged documentation
const docsDir = path.join(__dirname, 'docs');

async function mergeDocumentation() {
  // Create the docs directory if it doesn't exist
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }

  for (const repo of repositories) {
    const repoName = path.basename(repo, '.git');
    const repoDir = path.join(docsDir, repoName);

    console.log(`Cloning ${repo}...`);
    // Clone the repository
    try {
        await exec(`git clone ${repo} ${repoDir}`);
        console.log(`Cloned ${repo} successfully.`);
    } catch (error) {
        console.error(`Failed to clone ${repo}. Error: ${error}`);
    }
    

  }
}

mergeDocumentation();
#!/bin/bash

# Clean the dist directory if it exists
echo "Cleaning previous build..."
if [ -d "dist" ]; then
  rm -rf dist
fi

# Build the React application
echo "Building React application..."
npm run build

# Create .htaccess file for client-side routing
echo "Creating .htaccess file..."
cat > dist/.htaccess << EOL
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
EOL

# Remove any existing zip file
if [ -f "smecube-build.zip" ]; then
  rm smecube-build.zip
fi

# Create a zip file for easy upload
echo "Creating zip file..."
zip -r smecube-build.zip dist/

echo "Deployment package created! Upload smecube-build.zip to your cPanel."

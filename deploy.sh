#!/bin/bash

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

# Create a zip file for easy upload
echo "Creating zip file..."
zip -r smecube-build.zip dist/

echo "Deployment package created! Upload smecube-build.zip to your cPanel."

# SME CUBE cPanel Deployment Guide

## Files Ready for Deployment
The `smecube-build.zip` file contains all the necessary files for deployment, including:
- HTML, CSS, and JavaScript files
- Images and other assets
- .htaccess file for client-side routing support

## Deployment Steps

### 1. Log in to cPanel
- Access your hosting provider's cPanel dashboard
- Enter your username and password

### 2. Upload and Extract Files
- Navigate to File Manager in cPanel
- Go to the public_html directory (or subdirectory if deploying to a subdomain)
- Click "Upload" and select the `smecube-build.zip` file
- Once uploaded, right-click on the zip file and select "Extract"
- Extract the contents to your desired directory

### 3. Configure for Subdirectory (if applicable)
If you're deploying to a subdirectory (e.g., https://example.com/smecube/):
1. Edit the `vite.config.js` file locally
2. Uncomment and modify the `base` option to match your subdirectory path
3. Run the deployment script again to create a new build
4. Upload and extract the new zip file

### 4. Verify .htaccess Configuration
The .htaccess file is included in the zip and should be properly configured for client-side routing. Ensure your hosting has mod_rewrite enabled.

### 5. Test Your Deployment
- Visit your website URL in a browser
- Check that all pages and routes work correctly
- Test all features and interactions
- Verify that assets (images, etc.) load properly

### 6. Troubleshooting Common Issues
- **404 Errors on Page Refresh**: Check that the .htaccess file is properly configured and mod_rewrite is enabled
- **Missing Assets**: Verify that the base URL is correctly set if using a subdirectory
- **API Connection Issues**: Update any API endpoints to point to production URLs

## Important Notes
- The React app is configured as a single-page application (SPA)
- Client-side routing is handled by React Router
- The .htaccess file ensures proper routing for direct URL access and page refreshes

For technical support or assistance with deployment, please contact the development team.

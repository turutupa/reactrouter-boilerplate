# reactrouter-boilerplate

Remember to uncomment these 2 lines in .gitignore if you are going to upload your code to a public github repository


default-services.json

default-env.json

# Deployment
1. To use a first deployment is required. To do so you will need the official mbt tool to compile the app.
Download and install: https://sap.github.io/cloud-mta-build-tool/usage/

2. Run `mbt build` in the root folder and this will use the mta.yaml automatically
3. Deploy the file generated in mta_archives, simply run `cf deploy mta_archives/[name of generated file].mtar`

During deployment the xsuaa resource will automatically generate and bound to your apps. These may take a few minutes [it super slooooooow]

# Local development 

to be done.

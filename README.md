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

Add your xsuaa generated credentials in the required files (search for default-services.json in each folder). To check your xsuaa credentials without going into the platform simply run `cf env [name of your app]` the name of each app respectively by default is reactrouter-approuter , reactrouter-frontend, reactrouter-backend, reactrouter-reacteroids

When you run your react app locally the first time you won't be authenticated. You need to open the approuter (localhost:5000) which will open a login page. After you log in you may normally develop your react app in localhost:3000 (by default). You should know it is working because if you check the console in the react app, there are 2 api calls to the backend. 

1. isItWorking: true
2. currentUser: [your name, email... whatever is in your jwt token]

If you don't see this but instead some weird markdown response it means you haven't logged in yet.

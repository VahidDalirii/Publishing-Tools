## Installationsguide

**Viktigt**: För att kunna använda och publicera detta portfolio projekt behöver du ha Node, gitbash och VS Code installerad i din dator och ha/skapa ett konto hos Facebook, Twitter, Linkedin, Git, Cloudinary och Netlify.


1. Efter du clone:at hela Portfolio projektet öppna projekt foldern i din Visual Studio Code och i portfolio-backend under `portfolio-backend/extensions/upload/config` byta ut `"providerOptions": { "cloud_name": "xxxx", "api_key": "xxxxxx", "api_secret": "xxx" }` i settings.json filen med dina egna uppgifter från Cloudnairy.
2. I din frontend, under `portfolio-frontend / src / pages /` i contact.js filen, ändra inställningen för `<form action="https://formspree.io/xxxxxxxx" method="POST">` med den specifika som du har fått från Fromspree.
3. Öppna en terminal och gå in till portfolio-backend med kommandot: `cd portfolio-backend` och kör kommandot `npm install`.
        **Viktigt**: Kör inte npm audit fix som du får som förslag  för detta kommer uppdatera saker som kan krångla med andra versioner i detta projekt.
4. Öppna en annan terminal och gå till portfolio-frontend mappen med kommandot `cd portfolio-frontend` och kör `npm install` här med. Denna gång ska du köra `npm audit fix` efter installationen.
5. Nu ska du installera gatsby globalt med kommandot `npm install -g gatsby-cli`

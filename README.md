# Installationsguide

**Viktigt**: För att kunna använda och publicera detta portfolio projekt behöver du ha Node, gitbash och VS Code installerad i din dator och ha/skapa ett konto hos Facebook, Twitter, Linkedin, Git, Cloudinary och Netlify.


**1.** Efter du clone:at hela Portfolio projektet öppna projekt foldern i din Visual Studio Code och i portfolio-backend under `portfolio-backend/extensions/upload/config` byta ut `"providerOptions": { "cloud_name": "xxxx", "api_key": "xxxxxx", "api_secret": "xxx" }` i settings.json filen med dina egna uppgifter från Cloudnairy.

**2.** I din frontend, under `portfolio-frontend / src / pages /` i contact.js filen, ändra inställningen för `<form action="https://formspree.io/xxxxxxxx" method="POST">` med den specifika endpoint som du hittar i din Fromspree under Integration fliken.

**3.** Öppna en terminal och gå in till portfolio-backend med kommandot: `cd portfolio-backend` och kör kommandot `npm install`.
        
        Viktigt: Kör inte npm audit fix som du får som förslag  för detta kommer uppdatera saker som kan krångla med andra versioner i detta projekt.
        
**4.** Öppna en annan terminal och gå till portfolio-frontend mappen med kommandot `cd portfolio-frontend` och kör `npm install`. Denna gång ska du köra `npm audit fix` efter installationen.

**5.** Nu ska du installera gatsby globalt med kommandot `npm install -g gatsby-cli`.

**6.** I din backend terminal kör kommandor `npm run develop`för att starta Strapi Content Manager. Gå till `http://localhost:1337/admin` i din webläsare och skapa ett konto och börja med att lägga till dina egna info.

**7.** I din frontend terminal kör `gatsby develop` eller `gatsby clean && gatsby develop` om du får något error för att tömma cash innehållet. Gå till `http://localhost:8000/` för att se din lokala hemsidan.
       
       Viktigt: Efter ändringar i din backend (strapi) så behöver du döda både backend och frontend terminaler med att trycka på `Ctrl + c` och köra om `npm run develop` i din backend terminal och `gatsby develop` i din frontend terminal.
       

# Publiceringsguide

När du är nöjd med dina ändringar och har en fungerande websida så är det dags att publicera den. För att göra det behöver du följa de här stegen:

**1.** Öppna en terminal och kör kommandot : `npm install netlify-cli -g`för att installera netlify globalt.

**2.** Kör kommandot `netlify login`. Detta öppnar ett webbläsarfönster och ber dig logga in med Netlify och ge åtkomst till Netlify CLI.

**3.** Medan du har din backend och frontend terminaler körandes öppna en annan terminal och gå till din frontend projekt `cd portfolio-frontend` och kör kommandot `gatsby build`. Med detta komando förbereds public mappen i frontend projektet för publicering(Deploy).

        Viktigt : Ha koll att du har redan pushat alla nyare ändringar till din git.
        
**4.** öppna en ny terminal och i root directory(Där du är precis när du öppnar en ny terminal) kör detta kommando: `netlify init`. För frågan om vi ska skapa en ny sida välj `+ Create & configure a new site`. Sedan om det visas rätt team namn välj den. Nästa fråga är om din sidas namn, välj vad du vill den heta. Svar på frågan om build kommando skriv `gatsby build`. Sista frågan är addressen till public mappen i frontend projektet som innehåller all info om sidan som ska deployas. Där skriv `./portfolio-frontend/public/`.

**5.** Nästa kommando som behöver köras är `netlify deploy` som visar ett exampel på sidan som ska publiceras. Kolla Website Draft URL:en som du får att alltning ser bra ut.

**6.** Sista steg kör du kommandot `netlify deploy --prod` och du får Website URL som är den riktiga URL:en till din publicerade hemsida.


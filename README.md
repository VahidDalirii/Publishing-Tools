# Installationsguide

        Viktigt: För att kunna använda och publicera detta portfolio projekt behöver du ha Node, gitbash och VS Code installerad i din dator och ha/skapa ett konto hos Facebook, Twitter, Linkedin, Git, Cloudinary och Netlify. Du behöver även ha en Högupplöst personlig transparent bild i png format, ett uppdaterat CV, 4 blog artiklar och minst Minst 4 arbetsprov.

**1.** Efter du clone:at hela Portfolio projektet öppna projekt foldern i din Visual Studio Code och i portfolio-backend under `portfolio-backend/extensions/upload/config` byta ut `"providerOptions": { "cloud_name": "xxxx", "api_key": "xxxxxx", "api_secret": "xxx" }` i settings.json filen med dina egna uppgifter från ditt Cloudnairy konto.

**2.** I din frontend, under `portfolio-frontend / src / pages /` i contact.js filen, ändra inställningen för `<form action="https://formspree.io/xxxxxxxx" method="POST">` med den specifika endpoint som du hittar i din Fromspree under Integration fliken. Byt ut `hero-img.png`bilden med din personliga bils som ska ha exakt samma namn och format. Ta bort `Vahid Daliri - CV.pdf` under **static** mappen i frontend projektet och ersätt med ditt eget pdf CV och sedan i `src/assets/pages/about.js` i rad 9 byt `Vahid Daliri - CV.pdf` till din egen fil namn som ska importeras, `import downloadFile from "../../static/Vahid Daliri - CV.pdf"`.  

**3.** Öppna en terminal och gå in till portfolio-backend med kommandot: `cd portfolio-backend` och kör kommandot `npm install`.
        
        Viktigt: Kör inte npm audit fix som du får som förslag, för att detta kommer uppdatera saker som kan krångla sen med andra versioner i detta projekt.
        
**4.** Öppna en annan terminal och gå till portfolio-frontend mappen med kommandot `cd portfolio-frontend` och kör `npm install`. Denna gång ska du köra `npm audit fix` efter installationen.

**5.** Nu ska du installera gatsby globalt med kommandot `npm install -g gatsby-cli`.

**6.** I din backend terminal kör kommandor `npm run develop`för att starta Strapi Content Manager. Gå till `http://localhost:1337/admin` i din webläsare och skapa ett konto och börja med att lägga till dina egna info.

**7.** I din frontend terminal kör `gatsby develop` eller `gatsby clean && gatsby develop` om du får något error för att tömma cash innehållet. Gå till `http://localhost:8000/` för att se din lokala hemsidan.
       
       Viktigt: Efter ändringar i din backend (strapi) så behöver du döda både backend och frontend terminaler med att trycka på `Ctrl + c` och köra om `npm run develop` i din backend terminal och `gatsby develop` i din frontend terminal.
       

# Publiceringsguide

När du är nöjd med dina ändringar och har en fungerande websida så är det dags att publicera den. För att göra det behöver du följa de här stegen:

        Viktigt: I `gatsby-config.js` i frontend mappen byt ut -siteMetadate- uppgifter till dina egna uppgifter. Du kan byta din twitter image som finns i static mappen som du gjorde med ditt cv. Du kan ändra `siteUrl: "https://xxxxxxxxxxxx.netlify.app/"` med det som du vill din sida ska heta.
        
**1.** Öppna en terminal och kör kommandot : `npm install netlify-cli -g`för att installera netlify globalt.

**2.** Kör kommandot `netlify login`. Detta öppnar ett webbläsarfönster och ber dig logga in med Netlify och ge åtkomst till Netlify CLI.

**3.** Medan du har din backend och frontend terminaler körandes öppna en annan terminal och gå till din frontend projekt `cd portfolio-frontend` och kör kommandot `gatsby build`. Med detta komando förbereds public mappen i frontend projektet för publicering(Deploy).

        Viktigt : Ha koll att du har redan pushat alla nyare ändringar till din git.
        
**4.** öppna en ny terminal och i root directory(Där du är precis när du öppnar en ny terminal) kör detta kommando: `netlify init`. För frågan om vi ska skapa en ny sida välj `+ Create & configure a new site`. Sedan om det visas rätt team namn välj den. Nästa fråga är om din sidas namn, välj vad du vill den heta. Svar på frågan om build kommando skriv `gatsby build`. Sista frågan är addressen till public mappen i frontend projektet som innehåller all info om sidan som ska deployas. Där skriv `./portfolio-frontend/public/`.

**5.** Nästa kommando som behöver köras är `netlify deploy` som visar ett exampel på sidan som ska publiceras. Kolla Website Draft URL:en som du får att alltning ser bra ut.

**6.** Sista steg kör du kommandot `netlify deploy --prod` och du får Website URL som är den riktiga URL:en till din publicerade hemsida.

Här kan du se min publicerade [portfoliosida](https://vahid-daliri-portfolio.netlify.app/)

## Tenta frågan

##### Konstruera innehållet i ett CMS och analysera och utvärdera användarens upplevelse samt motivera val av design och funktionsmässiga alternativ vid utveckling. 

Ett Content Management System, populärt kallat CMS är en plattform som används för att göra ett par överhängande uppgifter på en webbplats. Det är bildligt utformat för att hjälpa en användare att publicera inlägg via praktiska verktyg som är lättillgängliga på admin-instrumentpanelen. 
Ett CMS kommer att organisera och lagra filer och ge åtkomst till deras data som är versionskontrollerade. Det finns många olika CMS, vissa är relativt enkla och andra är komplexa och kraftfulla. Vanligtvis ingår i ett CMS är funktionerna för formathantering, webbaserad publicering, indexering, revisionskontroll, sökning och hämtning. Följande kommer för- Och nackdelar med CMS:

**Fördelar med CMS:**

+ Design har separerats från innehållet
+ Möjlighet att ställa in åtkomstbehörigheter.
+ SEO vänlig.
+ Alla de populära CMS-alternativen är gratis

**Nackdelar med CMS:**

+ Eftersom så många webbplatser använder de populära CMS-systemen har de blivit ett mål för hackare
+ Även om teman har blivit allt kraftigare vad gäller vad som kan göras utan någon kodningskunskap, kan du fortfarande stöta på problem som får din webbplats att visa exakt som du vill.
+ Det sätt på vilket de flesta CMS-plattformar har utformats kan leda till vissa hastighetsproblem och släpplatser.
+ Det finns tusentals tredjeparts plugins tillgängliga för populära CMS-plattformar, men det kanske inte finns en som tillhandahåller den funktionalitet du behöver.

Det finns två olika CMS modeller, traditionellt(klassikt) och headless CMS, som vi jämför de två här nedanför:

**Skillnaden mellan Traditionellt och Headless CMS**

I ett klassiskt CMS skapas, hanteras och lagras innehålls tillsammans med bilder, filer o.s.v. i backoffice (också ibland kallat för admindelen). I backend skapas också sajtens huvudsakliga struktur samt eventuella grafiska anpassningar. CMS:et som hanterar informationen är också bundet till samma system som levererar och presenterar innehållet (frontend) till besökaren. Vi säger att backend och frontend är tätt sammanknutet, de består av samma kodbas, samspelar mellan sig och utgör sajten som helhet.

Headless liknar traditionell arkitektur i de avseenden att båda dessa hanterar innehåll, lagrar information i en databas och levererar det innehållet utåt på ett sätt. Ordet Headless syftar på att CMSet levererar information till ett annat system som presenterar informationen för besökaren. Ett CMS som Contentful är exempel på en tjänst som är headless. Med denna typ av arkitektur skapar och hanterar dina redaktörer innehållet i en molntjänst, d.v.s. på en separat sajt. Innehållet lagras sedan och inväntas på att bli hämtas via ett API.

I denna länk kan du se de [populäraste CMS verktygen](https://en.wikipedia.org/wiki/List_of_content_management_systems)

I denna länk kan du se de [populäraste headless CMS verktygen](https://www.cmswire.com/web-cms/13-headless-cmss-to-put-on-your-radar/)

**Sammanfattningsvis**

Varje projekt har sina egna förutsättningar och det går inte att ge en allmän övergripande rekommendation. I grova drag vill vi rekommendera att för en enklare och till mestadels informativ webbplats, är en traditionell arkitektur ofta mer kostnadseffektiv. Ifall du har flera olika utomstående tjänster eller integrationer mot externa plattformar kan en headless arkitektur vara vägen att gå. Headless passar perfekt om du har flera olika tjänster som ska integreras.
Det ena alternativet ersätter inte det andra. Headless är inte här för att ersätta traditionella arkitekturer men vi har möjligheten att kunna välja en större bred av andra lösningar utifrån olika behov.

---
Jag visade min publicerade portfolio sida till en kollega till mig. Med tanke på min nivå som har kodat i ett år nu så tyckte han att allting ser bra ut. Han tyckte att mobile first utvecklingen på min sida som anpassar sig till mobilt läge gör min sida användbart för mobil användare som idag använder mer än 80% av användare som använder nätet. Han tyckte navbar menyn som har en position:fixed gör det att alla sidor blir tillgängliga över allt i index sidan. Kombination av färger som jag använt i min CSS tyckte han att det var fint och ögonen inte trötnar att tita på sidan en längre tid. Han tyckte i min projekt i fokus del så behöver jag ha bättre och lite mer avancerade projekt för att kunna locka en arbetsgivare till min profil. Vilket på grund av mitt jobb som backend utvecklare har jag inte så mycket att visa men är nånting som jag kommer ha koll på och skapa lite bättre arbetsprov för visa till sidans besökare. Funktionen kontakta mig tyckte han att det gör mycket änklare för folk som vill kontakta mig iställt för att skriva mail-address eller mobil-nummer. 
Jag fick mest positiva feedback av honom vilket gav mig motivation att jobba ännu mer på min sida och försöka hålla den uppdaterad.

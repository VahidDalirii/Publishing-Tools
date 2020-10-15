import React from "react"
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa"
//Here we have all services which we offer
export default [
  {
    id: 1,
    icon: <FaServer className="service-icon" />,
    title: ".NET utvecklare",
    text: `Som .NET-utvecklare är jag en back-end-utvecklare som är specialiserad på att använda Microsofts programvaroramverk .NET, för att bygga webbapplikationer med C # ("c-sharp") programmeringsspråk.`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: "ASP.NET utvecklare",
    text: `Som en ASP.NET utvecklare skapar jag dynamiska webbsidor. Den största fördelen med ASP.NET mot andra tekniker inom samma genre är att ASP.NET är komponent- och eventbaserat samt att det bygger på fullfjädrade programspråk i stället för enklare skriptspråk som vissa konkurrerande tekniker använder.`,
  },
  {
    id: 3,
    icon: <FaLaptopCode className="service-icon" />,
    title: "Front-endutvecklare",
    text: `Som en frontendutvecklare arbetar jag huvudsakligen med modern webbutveckling med inriktning på responsiv webb och mobila plattformar. För att skapa interaktivitet och responsivt innehåll används en blandning av JavaScript och ramverk tillsammans med HTML och CSS.`,
  },
]

---
title: "Så skyddar du känslig information när du använder AI-tjänster"
description: "Praktiska säkerhetstips när du använder ChatGPT, Claude eller Gemini. Lär dig hantera personuppgifter, sekretess och inställningar för dataträning."
author: "Aram Anwar"
publishedAt: "2026-09-17T14:40:00+02:00"
contentType: "guide"
topics: ["ai", "guider"]
tags: ["ai-sakerhet", "integritet", "gdpr", "chatgpt", "dataskydd"]
heroImage: "/images/sa-skyddar-du-kanslig-information-ai.svg"
heroImageAlt: "Illustration av datasäkerhet och integritetsskydd vid AI-användning"
sources:
  - name: "OpenAI — Enterprise Privacy & Data Controls"
    url: "https://openai.com/enterprise-privacy"
  - name: "Integritetsskyddsmyndigheten (IMY) — AI och personuppgifter"
    url: "https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/ny-teknik/ai/"
---

När du klistrar in text eller laddar upp dokument i konsumentversioner av AI-tjänster som ChatGPT, Gemini eller Claude kan informationen sparas på leverantörens servrar och i vissa fall användas för att träna framtida modeller. Därför är det viktigt att veta vad som är säkert att dela.

## Vad bör du ALDRIG klistra in i en öppen AI-chatt?

* **Lösenord och inloggningsuppgifter:** API-nycklar, lösenord eller koder.
* **Känsliga personuppgifter:** Personnummer, hälsodeklarationer eller patientjournaler.
* **Sekretessbelagd företagsinformation:** Ännu ej publicerade kvartalsrapporter, källkod med företagshemligheter eller kundregister.
* **Finansiell information:** Kontonummer eller kreditkortsdetaljer.

## 3 viktiga inställningar för att öka din integritet

### 1. Stäng av modellträning i kontoinställningarna
De flesta stora leverantörer låter dig stänga av att din chatt-historik används för att träna AI-modeller:
* **ChatGPT:** Gå till *Inställningar > Datakontroller* och inaktivera *Förbättra modellen för alla*.
* **Claude:** Gå till *Settings > Privacy* och granska inställningarna för datainsamling.

### 2. Använd tillfälliga chattar (Temporary Chat)
I ChatGPT kan du aktivera *Temporary Chat*. Då sparas inte konversationen i din historik och används inte för modellträning.

### 3. Använd organisationskonton vid arbete
Om din arbetsgivare tillhandahåller ChatGPT Enterprise eller Microsoft 365 Copilot omfattas dessa av strikta affärsavtal där data garanterat inte används för träning.

## Relaterade guider
* [Så använder du PDF-filer i ChatGPT](/artiklar/sa-anvander-du-pdf-filer-i-chatgpt-battre-fragor-och-vanliga-mistag/)
* [Tvåfaktorsautentisering förklarad](/artiklar/tvafaktorsautentisering-forklarad-sa-skyddar-2fa-dina-konton/)

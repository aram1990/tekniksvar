---
title: "Så skyddar du känslig information när du använder AI-tjänster"
description: "Praktiska säkerhetstips när du använder ChatGPT, Claude eller Gemini. Lär dig hantera personuppgifter, sekretess och inställningar för dataträning."
author: "Aram Anwar"
publishedAt: "2026-09-17T10:40:00+02:00"
contentType: "guide"
topics: ["ai", "guider"]
tags: ["ai-sakerhet", "integritet", "gdpr", "chatgpt", "dataskydd"]
heroImage: "/images/sa-skyddar-du-kanslig-information-ai.svg"
heroImageAlt: "Illustration av datasäkerhet och integritetsskydd vid AI-användning"
sources:
  - name: "OpenAI — Privacy and Data Controls"
    url: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance"
  - name: "Anthropic — Privacy Policy & Consumer Terms"
    url: "https://www.anthropic.com/legal/privacy"
  - name: "Microsoft — Commercial Data Protection in Copilot"
    url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/privacy-and-data-security"
  - name: "Integritetsskyddsmyndigheten (IMY) — AI och personuppgifter"
    url: "https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/ny-teknik/ai/"
---

När du klistrar in text eller laddar upp dokument i konsumentversioner av AI-tjänster som ChatGPT, Gemini eller Claude kan informationen sparas på leverantörens servrar och i vissa fall användas för att träna framtida modeller, beroende på dina kontoinställningar och valt abonnemang.

## Vad bör du inte klistra in i öppna konsumentversioner?

* **Lösenord och inloggningsuppgifter:** API-nycklar, lösenord eller koder.
* **Känsliga personuppgifter:** Personnummer, hälsodeklarationer eller patientjournaler.
* **Sekretessbelagd företagsinformation:** Ännu ej publicerade rapporter, källkod med företagshemligheter eller kundregister.
* **Finansiell information:** Kontonummer eller kreditkortsdetaljer.

## 3 inställningar och funktioner för ökad integritet

### 1. Granska inställningar för modellträning
De flesta leverantörer tillåter konsumentanvändare att välja om chattdata får användas för modellträning:
* **ChatGPT:** Gå till *Inställningar > Datakontroller* och inaktivera valet för modellförbättring.
* **Claude:** Gå till *Settings > Privacy* i kontot för att kontrollera aktuella dataskyddsval.

### 2. Använd tillfälliga chattar (Temporary Chat)
I tjänster som ChatGPT finns alternativ för tillfälliga chattar (*Temporary Chat*) där konversationer inte sparas i din historik eller används för modellträning i enlighet med OpenAI:s specifikationer.

### 3. Organisations- och företagskonton
Om du använder enterprise- eller företagskonton (exempelvis ChatGPT Enterprise, Claude Team/Enterprise eller Microsoft Copilot med kommersiellt dataskydd) regleras datahanteringen av specifika affärsavtal där kunddata som regel avskiljs från modellträning enligt avtalsvillkoren.

## Relaterade guider
* [Så använder du PDF-filer i ChatGPT](/artiklar/sa-anvander-du-pdf-filer-i-chatgpt-battre-fragor-och-vanliga-mistag/)
* [Tvåfaktorsautentisering förklarad](/artiklar/tvafaktorsautentisering-forklarad-sa-skyddar-2fa-dina-konton/)

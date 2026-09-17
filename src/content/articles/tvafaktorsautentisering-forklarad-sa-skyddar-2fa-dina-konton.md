---
title: "Tvåfaktorsautentisering förklarad – så skyddar 2FA och passkeys dina konton"
description: "Lär dig hur tvåstegsverifiering (2FA/MFA) och lösenordslösa passnycklar (passkeys) fungerar, skillnaden på säkerhetsmetoder och hur du skyddar dina digitala konton."
author: "Aram Anwar"
publishedAt: "2026-09-17T11:10:00+02:00"
contentType: "explanation"
topics: ["webb", "guider"]
tags: ["2fa", "sakerhet", "mfa", "passkeys", "authenticator", "integritet"]
heroImage: "/images/tvafaktorsautentisering-forklarad.svg"
heroImageAlt: "Illustration av tvåfaktorsautentisering (2FA)"
sources:
  - name: "CISA — Multi-Factor Authentication (MFA) Guidance"
    url: "https://www.cisa.gov/secure-our-world/turn-multi-factor-authentication"
  - name: "NIST — Special Publication 800-63 Digital Identity Guidelines"
    url: "https://pages.nist.gov/800-63-3/"
  - name: "FIDO Alliance — Passkeys Overview"
    url: "https://fidoalliance.org/passkeys/"
---

Att enbart förlita sig på ett lösenord för att skydda e-postkonton, sociala medier och digitala tjänster innebär en betydande säkerhetsrisk. Om ett lösenord läcker ut vid ett dataintrång hos en webbplats kan obehöriga försöka använda samma uppgifter på andra platser. Det är här **flerfaktorsautentisering (MFA / 2FA)** och **passnycklar (passkeys)** fyller en avgörande funktion.

## Vad är skillnaden mellan 2FA och MFA?

* **Tvåfaktorsautentisering (2FA):** En specifik form av verifiering som kräver exakt **två** separat kategoriserade faktorer vid inloggning.
* **Flerfaktorsautentisering (MFA):** Ett övergripande begrepp för alla inloggningssystem som kräver **två eller flera** oberoende faktorer.

Identitetsfaktorer delas normalt in i tre huvudsakliga kategorier:
1. **Något du vet:** Ett lösenord eller en PIN-kod.
2. **Något du har:** En mobiltelefon, autentiseringsapp eller fysisk säkerhetsnyckel (YubiKey).
3. **Något du är:** Biometri som fingeravtryck eller ansiktsigenkänning.

## Olika verifieringsmetoder och deras egenskaper

### 1. Autentiseringsappar (TOTP-appar)
Appar som **Microsoft Authenticator**, **Google Authenticator** eller **1Password** genererar tidsbaserade engångskoder (TOTP) direkt i mobilen.
* **Egenskaper:** Kräver ingen täckning eller SMS-mottagning, men kan fortfarande drabbas om användaren luras att klistra in koden på en falsk fiske-sida (*phishing*).

### 2. SMS- och e-postkoder
En engångskod skickas via SMS eller e-post till din enhet.
* **Egenskaper:** Enkel att använda, men bedöms av säkerhetsmyndigheter som CISA och NIST som känsligare för angrepp via SIM-kapning (*SIM swapping*) eller kapade e-postkonton.

### 3. Passnycklar (Passkeys) – Lösenordslös inloggning
**Passkeys** bygger på FIDO2- och WebAuthn-standarden och ersätter traditionella lösenord helt. Istället skapas ett kryptografiskt nyckelpar kopplat till din enhet.
* **Egenskaper:** Ger starkt **nätfiskeskydd (phishing resistance)** eftersom nyckeln är bundet till den exakta webbadressen (domänen). Inloggningen bekräftas med enhetens biometri (fingeravtryck/ansikte) eller PIN-kod.

## Kontoförlust och återställning

När du aktiverar 2FA på ett konto tillhandahåller tjänsten ofta engångskoder för **återställning** (*Backup Codes* / *Recovery Keys*). Det är viktigt att spara dessa koder på en säker plats. Om du förlorar din primära verifieringsenhet är reservkoder eller registrerade återställningskonton vanliga sätt att återfå tillgång till kontot, beroende på respektive tjänsts återställningspolicy.

## Relaterade guider
* [Så skyddar du känslig information när du använder AI-tjänster](/artiklar/sa-skyddar-du-kanslig-information-nar-du-anvander-ai-tjanster/)

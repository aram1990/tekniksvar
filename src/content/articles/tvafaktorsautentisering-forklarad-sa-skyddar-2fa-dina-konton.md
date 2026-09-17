---
title: "Tvåfaktorsautentisering förklarad – så skyddar 2FA dina konton"
description: "Lär dig hur tvåstegsverifiering (2FA/MFA) fungerar, skillnaden mellan SMS, autentiseringsappar och Nycklar (Passkeys) samt varför det förhindrar kapningar."
author: "Aram Anwar"
publishedAt: "2025-03-15"
contentType: "explanation"
topics: ["webb", "guider"]
tags: ["2fa", "sakerhet", "mfa", "passkeys", "authenticator", "integritet"]
heroImage: "/images/tvafaktorsautentisering-forklarad.svg"
heroImageAlt: "Illustration av tvåfaktorsautentisering (2FA)"
sources:
  - name: "CISA — Multi-Factor Authentication (MFA)"
    url: "https://www.cisa.gov/secure-our-world/turn-multi-factor-authentication"
  - name: "NIST — Digital Identity Guidelines"
    url: "https://pages.nist.gov/800-63-3/"
---

Att enbart förlita sig på ett lösenord för att skydda e-postkonton, sociala medier och banktjänster är idag en stor säkerhetsrisk. Om ditt lösenord läcker ut vid ett dataintrång hos en webbplats kan hackare enkelt ta över ditt konto. Det är här **tvåfaktorsautentisering (2FA)** kommer in.

## Vad är tvåfaktorsautentisering (2FA)?

Tvåfaktorsautentisering (även kallat *tvåstegsbekräftelse* eller *MFA*) innebär att du måste identifiera dig med **två olika typer av bevis** för att logga in:

1. **Något du vet:** Ditt vanliga lösenord.
2. **Något du har:** Din mobiltelefon, en godkänd enhet eller en fysisk säkerhetsnyckel.

Även om någon kommit över ditt lösenord stoppas inloggningen eftersom angriparen saknar den andra faktorn.

## De tre vanligaste metoderna för 2FA

### 1. Autentiseringsappar (Authenticator-appar) – Rekommenderas
Appar som **Microsoft Authenticator**, **Google Authenticator** eller **1Password** genererar en ny 6-siffrig engångskod var 30:e sekund direkt i din mobil.
* **Fördelar:** Mycket säkert, fungerar även när mobilen saknar täckning eller Wi-Fi.

### 2. SMS-koder – Bättre än ingenting, men sårbart
En engångskod skickas som ett vanliga SMS-meddelande till ditt mobilnummer.
* **Nackdelar:** Sorteras som osäkrare eftersom angripare i vissa fall kan kapa telefonnummer (*SIM-swapping*).

### 3. Passkeys (Passnycklar) – Framtidens inloggning
Passkeys ersätter lösenordet helt. Du godkänner inloggningen via mobilens fingeravtrycksläsare eller ansiktsigenkänning (Face ID).

## Viktigt: Spara dina reservkoder!

När du aktiverar 2FA genererar tjänsten ett antal **reservkoder** (*Backup Codes*). Skriv ned dessa på ett papper och förvara säkert. Om du skulle tvingas återställa mobilen eller tappa bort den är reservkoderna det enda sättet att återfå åtkomsten till ditt konto.

## Relaterade guider
* [Så skyddar du känslig information när du använder AI-tjänster](/artiklar/sa-skyddar-du-kanslig-information-nar-du-anvander-ai-tjanster/)

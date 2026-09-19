---
title: "PIN-koden fungerar inte i Windows 11 – så kommer du in igen"
description: "Säkerhetsguide för när Windows Hello PIN inte fungerar i Windows 11. Återställ PIN-kod, använd lösenord eller återställ Microsoft-kontot."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "windows-hello", "pin-kod", "inloggning", "felsökning"]
sources:
  - name: "Microsoft Support — Reset your PIN when you're not signed in to Windows"
    url: "https://support.microsoft.com/en-us/windows/reset-your-pin-when-you-re-not-signed-in-to-windows-a386b813-9b57-48e7-050c-1e826337ef4a"
---

Om Windows 11 meddelar *"Något hände och din PIN-kod är inte tillgänglig"* (Something happened and your PIN isn't available) eller vägrar godkänna din sifferkod kan du bli helt utelåst från datorn.

I den här guiden går vi igenom säkra och officiella steg från Microsoft för att återfå åtkomst till ditt konto utan risk för dataförlust.

> ### Snabb lösning
> 1. Klicka på **Inloggningsalternativ (Sign-in options)** på inloggningsskärmen under PIN-fältet.
> 2. Välj **Nyckelsymbolen** för att logga in med ditt ordinarie Microsoft-lösenord istället för PIN-koden.
> 3. Klicka på **"Jag har glömt min PIN-kod"** om du saknar lösenordsalternativ.

## 1. Växla till inloggning med lösenord

Windows Hello PIN är en lokal säkerhetstoken kopplad till datorns TPM-säkerhetschip. Om TPM-chippet har återställts (exempelvis efter en BIOS/UEFI-uppdatering) inaktiveras PIN-koden tillfälligt:

1. På inloggningsskärmen, klicka på **Inloggningsalternativ**.
2. Klicka på ikonen för lösenord (nyckelsymbolen).
3. Ange lösenordet för ditt Microsoft-konto eller ditt lokala användarkonto.

## 2. Använd "Jag har glömt min PIN-kod"

Om ditt konto är kopplat till ett Microsoft-konto och datorn har anslutning till internet via Wi-Fi eller nätverkskabel:

1. Klicka på länken **Jag har glömt min PIN-kod (I forgot my PIN)** under inloggningsfältet.
2. Verifiera din identitet genom att ange din e-postadress och den verifieringskod som skickas till din mobil via SMS eller tvåfaktorsapp.
3. När identiteten har bekräftats uppmanas du att skapa en ny PIN-kod.

## 3. Rensa NGC-mappen i Felsäkert läge

Om du har lyckats logga in med lösenord men PIN-koden fortfarande ger felmeddelanden beror det ofta på att NGC-säkerhetsmappen i Windows blivit korrupt.

1. Öppna Utforskaren och navigera till: `C:\Windows\ServiceProfiles\LocalService\AppData\Local\Microsoft`
2. Ta över ägandeskapet för mappen **Ngc** och radera allt innehåll i mappen.
3. Gå därefter till **Inställningar > Konton > Inloggningsalternativ > PIN (Windows Hello)** och konfigurera en ny PIN-kod.

## Viktig säkerhetsinformation
Försök aldrig använda opålitliga tredje-parts hackverktyg för att kringgå inloggningsskärmen, då detta kan korrumpera Windows-filsystemet och leda till permanent dataförlust.

## Relaterade artiklar
* [Så startar du Windows 11 i felsäkert läge](/artiklar/sa-startar-du-windows-11-i-felsakert-lage/)
* [Tvåfaktorsautentisering förklarad](/artiklar/tvafaktorsautentisering-forklarad-sa-skyddar-2fa-dina-konton/)
* [Blåskärm i Windows 11 – vad du bör göra först](/artiklar/blaskarm-i-windows-11-vad-du-bor-gora-forst/)

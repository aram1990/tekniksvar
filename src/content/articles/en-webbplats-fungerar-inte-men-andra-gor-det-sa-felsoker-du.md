---
title: "En webbplats fungerar inte men andra gör det – så felsöker du"
description: "Steg-för-steg-felsökning när en enskild hemsida inte laddar medan internet i övrigt fungerar normalt. Testa DNS, cache och incognito."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["appar", "problem"]
tags: ["internet", "webbplats-fel", "dns", "webbläsare", "felsökning"]
heroImage: "/images/articles/en-webbplats-fungerar-inte-men-andra-gor-det-sa-felsoker-du/en-webbplats-fungerar-inte-men-andra-gor-det-sa-felsoker-du.webp"
heroImageAlt: "Webbläsarskärm som visar ett anslutningsfel"
heroImageCredit: "Foto: Unsplash"
heroImageSource: "https://unsplash.com/photos/matrix-code-digital-screen-error-kP2M7M49sY"
sources:
  - name: "Google Chrome Help — Fix page loading error messages"
    url: "https://support.google.com/chrome/answer/95669"
  - name: "Microsoft Support — Troubleshoot webpage loading errors"
    url: "https://support.microsoft.com/en-us/"
---

Det är ett märkligt men vanligt nätverksproblem: du kan söka på Google, titta på YouTube och läsa nyheter utan problem, men en specifik webbplats vägrar att ladda och visar felmeddelanden som *"ERR_CONNECTION_TIMED_OUT"* eller *"Servern hittades inte"*.

> ### Snabb lösning
> 1. Kontrollera om sajten ligger nere för alla via [downdetector.se](https://downdetector.se) eller [isup.me](https://isup.me).
> 2. Öppna ett **Inkokitofönster (`Ctrl + Shift + N`)** för att testa utan sparad cache.
> 3. Testa att öppna webbplatsen i mobilen via **mobildata** (med Wi-Fi avstängt).

## 1. Är webbplatsen nere för alla eller bara för dig?

Innan du ändrar inställningar på din dator bör du verifiera om felet ligger hos själva webbplatsens servrar:
* Besök en statussida som DownDetector eller isup.me och skriv in webbadressen.
* Om tjänsten bekräftar ett avbrott är det bara att vänta tills webbplatsens tekniker löst problemet.

## 2. Testa ett privat fönster (Incognito)

Om webbplatsen laddar i ett Inkognitofönster beror felet på korrupta cookies eller ett blockerande webbläsartillägg i din vanliga webbläsare:

1. Tryck `Ctrl + Shift + N` i Chrome/Edge för att öppna ett privat fönster.
2. Om sidan fungerar där, rensa cachen och cookies för just den enskilda webbplatsen genom att klicka på hänglåssymbolen till vänster i adressfältet.

## 3. Rensa DNS-cachen i Windows (Flush DNS)

Datorn sparar en lokal kartläggning av webbadresser och IP-adresser (DNS-cache). Om en webbplats nyligen bytt server kan din dator försöka koppla upp sig mot en gammal nedlagd IP-adress:

1. Öppna Startmenyn, skriv `cmd` och välj **Kör som administratör**.
2. Skriv följande kommando och tryck på Enter:
   `ipconfig /flushdns`
3. Starta om webbläsaren.

## 4. Tillfälliga IP-blockeringar eller VPN

Vissa webbplatser använder automatiska brandväggar (t.ex. Cloudflare) som tillfälligt kan spärra din IP-adress om den misstänks för skadlig trafik:

* Om du använder en **VPN-tjänst**, koppla från den och försök igen.
* Testa att koppla mobilen till mobildata. Om sidan fungerar via mobildata men inte via hemma-Wi-Fi har din heminternet-IP-adress tillfälligt blockerats av sajten.

## 5. Kontrollera datorns klocka och datum

Om datorns systemklocka diffar med mer än några minuter kommer SSL/TLS-säkerhetscertifikat för HTTPS-sajter att ogiltigförklaras, vilket gör att webbläsaren vägrar ladda sidan.

## Relaterade artiklar
* [Android är ansluten till Wi-Fi men internet fungerar inte](/artiklar/android-ar-ansluten-till-wi-fi-men-internet-fungerar-inte-sa-felsoker-du/)
* [Chrome är långsamt – så gör du webbläsaren snabbare](/artiklar/chrome-ar-langsomt-sa-gor-du-webblasaren-snabbare/)
* [Windows hittar inte Wi-Fi – orsakar och lösningar](/artiklar/windows-hittar-inte-wi-fi-orsaker-och-losningar/)

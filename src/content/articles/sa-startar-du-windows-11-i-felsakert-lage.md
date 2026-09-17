---
title: "Så startar du Windows 11 i felsäkert läge"
description: "Steg för steg-guide till hur du startar Windows 11 i Felsäkert läge (Safe Mode) via inställningar, inloggningsskärmen eller återställningsmiljön."
author: "Aram Anwar"
publishedAt: "2026-09-17T11:40:00+02:00"
contentType: "guide"
topics: ["windows", "guider"]
tags: ["windows-11", "felsakert-lage", "safe-mode", "felsokning"]
heroImage: "/images/sa-startar-du-windows-11-i-felsakert-lage.svg"
heroImageAlt: "Illustration av uppstart i Felsäkert läge i Windows 11"
sources:
  - name: "Microsoft Support — Start your PC in safe mode in Windows"
    url: "https://support.microsoft.com/en-us/windows/start-your-pc-in-safe-mode-in-windows-126612d7-3108-0421-8710-a77a3c1033d2"
---

**Felsäkert läge** (Safe Mode) startar Windows 11 med ett absolut minimum av drivrutiner och bakgrundsprogram. Det är ett oumbärligt verktyg när du behöver avinstallera problematiska drivrutiner, ta bort skadlig kod eller felsöka när datorn kraschar vid normal uppstart.

## Metod 1: Via Windows 11 Inställningar (När du kan logga in)

1. Öppna **Inställningar** (`Win + I`).
2. Gå till **System > Återställning**.
3. Leta upp avsnittet **Avancerad start** och klicka på **Starta om nu**.
4. När datorn startar om på den blå skärmen *Välj ett alternativ*, klicka på **Felsök > Avancerade alternativ > Startinställningar > Starta om**.
5. Efter omstart visas en sifferlista:
   * Tryck på **4** eller **F4** för *Felsäkert läge*.
   * Tryck på **5** eller **F5** för *Felsäkert läge med nätverk* (om du behöver internetanslutning).

## Metod 2: Från inloggningsskärmen (När du inte kan öppna skrivbordet)

1. På inloggningsskärmen där du anger ditt lösenord, klicka på **Ström-ikonen** i nedre högra hörnet.
2. Håll in **Shift-tangenten** på tangentbordet samtidigt som du klickar på **Starta om**.
3. Datorn startar om direkt till den blå återställningsmenyn. Följ därefter stegen i Metod 1 (*Felsök > Avancerade alternativ > Startinställningar*).

## Vad skiljer Felsäkert läge från vanlig uppstart?

* Tredjepartsdrivrutiner för grafikkort och ljud stängs av.
* Inga autostartprogram (som Spotify, Discord eller Steam) tillåts köra.
* Skärmupplösningen kan se låg ut, vilket är helt normalt.

För att lämna Felsäkert läge behöver du bara starta om datorn på vanligt sätt.

## Relaterade guider
* [Blåskärm i Windows 11 – vad du bör göra först](/artiklar/blaskarm-i-windows-11-vad-du-bor-gora-forst/)
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)

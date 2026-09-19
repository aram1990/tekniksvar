---
title: "Google Drive laddar inte upp filer – vanliga orsaker och lösningar"
description: "Felsökning när filuppladdning fastnar eller misslyckas i Google Drive. Lösningar för lagring, webbläsare och Drive för datorer."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["appar", "problem"]
tags: ["google-drive", "google", "molnlagring", "filuppladdning", "felsökning"]
sources:
  - name: "Google Drive Help — Fix problems uploading files to Google Drive"
    url: "https://support.google.com/drive/answer/2424368"
---

När du försöker ladda upp filer till Google Drive och uppladdningsfönstret visar *"Uppladdningen avbröts"* eller fastnar på "Förbereder uppladdning..." kan orsaken vara allt från nätverksavbrott till lagringsbrist.

> ### Snabb lösning
> 1. Öppna ett **Inkogitofönster** i webbläsaren och testa att ladda upp filen därifrån för att utesluta felaktiga webbläsartillägg.
> 2. Verifiera att ditt Google-konto har ledigt lagringsutrymme kvar.
> 3. Starta om webbläsaren.

## 1. Tillräckligt med lagringsutrymme i Google-kontot

Google Drive tillåter inga nya filuppladdningar om ditt konto nått sin lagringsgräns (15 GB kostnadsfritt):

* Kontrollera din lagringsstatus längst ned i sidopanelen på [drive.google.com](https://drive.google.com).
* Om kontot är fullt, läs vår guide om [hur du rensar utrymme i Gmail, Drive och Foto](/artiklar/google-kontot-ar-fullt-sa-frigor-du-lagringsutrymme-i-gmail-drive-och-foto/).

## 2. Nätverksstabilitet och filstorlek

Stora filer (på flera gigabyte) är känsliga för korta avbrott i Wi-Fi-anslutningen:
* Testa att byta från trådlöst nätverk till nätverkskabel om du laddar upp mycket stora filer.
* Om du laddar upp en hel mapp med tusentals enskilda filer, komprimera mappen till en enskild `.zip`-fil innan uppladdning.

## 3. Rensa webbläsardata och inaktivera tillägg

Tillägg som adblockers, VPN-tillägg och integritetsskydd i webbläsaren kan blockera de bakgrundsanrop som Google Drive använder för uppladdning:

1. Klicka på de tre punkterna i Google Chrome och välj **Rensa webbinformation**.
2. Rensa *Cachade bilder och filer*.
3. Testa att tillfälligt inaktivera dina webbläsartillägg under `chrome://extensions/`.

## 4. Google Drive för datorer (Desktop Sync)

Om du använder programmet Google Drive för Windows eller Mac och synkroniseringen fastnat:

1. Klicka på Google Drive-ikonen vid klockan i aktivitetsfältet.
2. Klicka på inställningskugghjulet och välj **Avsluta**.
3. Starta om Google Drive-appen igen från Startmenyn.

## Relaterade artiklar
* [Google-kontot är fullt – så frigör du lagringsutrymme](/artiklar/google-kontot-ar-fullt-sa-frigor-du-lagringsutrymme-i-gmail-drive-och-foto/)
* [OneDrive synkar inte – vanliga fel och lösningar](/artiklar/onedrive-synkar-inte-vanliga-fel-och-losningar/)
* [Chrome är långsamt – så gör du webbläsaren snabbare](/artiklar/chrome-ar-langsomt-sa-gor-du-webblasaren-snabbare/)

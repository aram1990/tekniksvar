---
title: "Så frigör du diskutrymme i Windows 11 utan att radera fel filer"
description: "Säker guide för att rensa hårddisken i Windows 11. Använd Lagringsassistenten, rensa tillfälliga uppdateringsfiler och undvik vanliga misstag."
author: "Aram Anwar"
publishedAt: "2025-02-27"
contentType: "guide"
topics: ["windows", "guider"]
tags: ["windows-11", "diskutrymme", "rensa-datorn", "harddisk", "lagring"]
heroImage: "/images/sa-frigor-du-diskutrymme-i-windows-11.svg"
heroImageAlt: "Illustration av säker diskrensning i Windows 11"
sources:
  - name: "Microsoft Support — Free up drive space in Windows"
    url: "https://support.microsoft.com/en-us/windows/free-up-drive-space-in-windows-a5443082-b70d-0b5d-3d21-b0b25b6e6f14"
---

När din primära hårddisk (C:) blir full kan hela datorn drabbas av prestandaproblem, och Windows Update kan vägra att installera nya säkerhetsuppdateringar. Här är de säkraste sätten att rensa ut flera gigabyte utrymme i Windows 11 utan risk för dina personliga dokument.

## 1. Rensa tillfälliga filer via Windows Inställningar

Detta är det säkraste och mest effektiva verktyget för att rensa gamla systemfiler:

1. Öppna **Inställningar (`Win + I`) > System > Lagring**.
2. Klicka på **Tillfälliga filer**.
3. Windows analyserar din hårddisk och visar vad som kan tas bort.
4. Bocka för:
   * **Tidigare Windows-installationer** (kan ta upp 10–30 GB efter större uppdateringar).
   * **Temporära Windows-installationsfiler**.
   * **Miniatyrbilder och cachen för skuggning**.
5. Klicka på **Ta bort filer**.

*Varning:* Var försiktig med att bocka för mappen *Hämtade filer* (Downloads) om du förvarar viktiga dokument där.

## 2. Aktivera Lagringsassistenten (Storage Sense)

Lagringsassistenten kan automatiskt rensa bort tillfälliga filer när diskutrymmet blir lågt:

* Gå till **Inställningar > System > Lagring**.
* Slå på **Lagringsassistenten**.
* Klicka på pilsymbolen bredvid för att ställa in hur ofta papperskorgen ska tömmas automatiskt (t.ex. var 30:e dag).

## 3. Aktivera OneDrive Filer på begäran (Files On-Demand)

Om du använder OneDrive kan du välja att spara filer enbart i molnet så att de inte upptar plats på din lokala hårddisk:

1. Högerklicka på din OneDrive-mapp i Utforskaren.
2. Välj **Frigör utrymme**.
3. Filerna finns kvar i molnet och laddas ned först när du dubbelklickar på dem.

## Vad du BÖR UNDVIKA
* **Registry cleaners / Registerrensare:** Använd aldrig tredjepartsprogram som påstår sig rensa Windows-registret. De sparar inget diskutrymme och kan förstöra systemstabiliteten.

## Relaterade guider
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)
* [OneDrive synkar inte – vanliga fel och lösningar](/artiklar/onedrive-synkar-inte-vanliga-fel-och-losningar/)

---
title: "Så stänger du av autostart-program i Windows 11"
description: "Lär dig hur du inaktiverar program som startar automatiskt i Windows 11 för att få en snabbare dator och kortare uppstartstid."
author: "Aram Anwar"
publishedAt: "2026-09-17"
contentType: "guide"
topics: ["windows", "guider"]
heroImage: "/images/sa-stanger-du-av-autostart-program-i-windows-11.svg"
heroImageAlt: "Inaktivera autostart-program i Windows 11"
tags: ["windows-11", "autostart", "aktivitetshanteraren", "prestanda"]
sources:
  - name: "Microsoft Support — Change which apps run automatically at startup in Windows"
    url: "https://support.microsoft.com/en-us/windows/change-which-apps-run-automatically-at-startup-in-windows-10-150ce200-6105-a70f-8b55-b00d0725418a"
---

När du installerar nya program ställer många av dem automatiskt in sig på att starta varje gång du slår på datorn. Det kan snabbt göra uppstarten av Windows 11 trög och dra onödigt mycket internminne (RAM) i bakgrunden.

Att rensa bland autostart-program är en av de mest effektiva åtgärderna när [Windows 11 är långsamt](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/).

## Metod 1: Via Aktivitetshanteraren (Rekommenderas)

Det smidigaste sättet att hantera autostart i Windows 11 är genom Aktivitetshanteraren.

1. Tryck `Ctrl + Shift + Esc` på tangentbordet för att öppna **Aktivitetshanteraren**.
2. Klicka på fliken **Autostart-appar** (ikonen som ser ut som en mätare i vänstermenyn).
3. Du ser nu en lista över alla appar som startar med Windows, tillsammans med deras *Autostart-påverkan* (Hög, Medel, Låg eller Ingen).
4. Högerklicka på appen du vill stoppa och välj **Inaktivera**.

## Metod 2: Via Inställningar i Windows 11

Du kan också stänga av autostart directly via systeminställningarna:

1. Öppna **Inställningar** (`Win + I`).
2. Gå till **Appar > Autostart**.
3. Slå av brytaren bredvid de appar du inte vill ska starta automatiskt.

## Vilka program kan du säkert stänga av?

Många drar sig för att inaktivera autostart av rädsla för att ta bort viktiga funktioner. Du kan dock tryggt inaktivera följande typer av appar:

* **Kommunikationsappar:** Spotify, Discord, Steam, Microsoft Teams eller Skype. (De startar fortfarande helt normalt när du klickar på deras ikon när du faktiskt behöver dem).
* **Molntjänster du sällan använder:** Om du inte behöver ständig filsynkronisering kan du inaktivera dem. Om du däremot råkar ut för synkproblem med OneDrive kan du läsa vår guide [OneDrive synkar inte – vanliga fel och lösningar](/artiklar/onedrive-synkar-inte-vanliga-fel-och-losningar/).
* **Uppdateringsassistenter:** Verktyg från webbläsare eller hårdvarutillverkare.

**Behåll aktiverat:** Säkerhetsprogram (Windows Security / Antivirus), drivrutinspaneler för ljud och grafik samt systemkomponenter.

## Ytterligare åtgärder för en snabbare dator

Utöver att stänga av autostart-program kan du frigöra betydande mängder minne och diskutrymme genom att städa upp gamla tillfälliga filer. Se vår steg-för-steg-guide om hur du kan [frigöra diskutrymme i Windows 11](/artiklar/sa-frigor-du-diskutrymme-i-windows-11-utan-att-radera-fel-filer/).

---
title: "Batteriet tar slut snabbt på en Windows-laptop – 10 saker att kontrollera"
description: "Praktiska tips för att förlänga batteritiden på en bärbar dator med Windows 11. Kontrollera appar, strömsparlägen, skärmens uppdateringsfrekvens och batterihälsa."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "guide"
topics: ["windows", "guider"]
tags: ["windows-11", "batteritid", "laptop", "strömförbrukning", "batteri"]
sources:
  - name: "Microsoft Support — Battery saving tips for Windows"
    url: "https://support.microsoft.com/en-us/windows/battery-saving-tips-for-windows-a85056a0-8d14-7331-1fc0-88013e2fe433"
---

Upplever du att batteriet på din bärbara Windows 11-dator laddar ur oväntat snabbt? Dålig batteritid beror sällan på ett enskilt fel, utan på en kombination av krävande bakgrundsappar, hög skärmljusstyrka och felaktiga ströminställningar.

Här är 10 konkreta saker du bör kontrollera för att maximera batteritiden.

## 1. Identifiera vilka appar som drar mest batteri
Windows 11 har en inbyggd strömanalys. Gå till **Inställningar > System > Ström och batteri (Power & battery)**. Klicka på *Batterianvändning* för att se en lista över vilka appar som förbrukat mest energi under det senaste dygnet.

## 2. Aktivera energisparläge och strömläge
Under **Inställningar > System > Ström och batteri**, sätt **Strömläge (Power mode)** till **Bästa energieffektivitet (Best power efficiency)**. Slå även på *Energisparläge (Battery saver)* manuellt om du har långt till laddaren.

## 3. Sänk skärmens ljusstyrka och justera dynamisk uppdateringsfrekvens
Skärmen är den enskilt största strömtjuven på en bärbar dator.
* Sänk ljusstyrkan med snabbknapparna eller i snabbinställningarna (`Win + A`).
* Om din laptop har en skärm med high-refresh rate (120 Hz eller 144 Hz), gå till **Inställningar > System > Skärm > Avancerad skärm** och sänk uppdateringsfrekvensen till 60 Hz i batteridrift.

## 4. Stäng av tunga autostart-program
Program som startar automatiskt i bakgrunden drar konstant ström från processorn. Öppna **Aktivitetshanteraren (`Ctrl + Shift + Esc`) > Autostartappar** och inaktivera program du inte behöver direkt vid uppstart.

## 5. Minska bakgrundsaktivitet i webbläsaren
Webbläsare som Google Chrome och Microsoft Edge kan dra mycket ström om du har dussintals flikar öppna. Aktivera funktionen **Minnesbesparing / Effektivitetsläge** i webbläsarens inställningar för att försätta inaktiva flikar i viloläge.

## 6. Förkorta tiden till skärmsläckning och viloläge
Gå till **Inställningar > System > Ström och batteri > Skärm och strömsparläge**. Ställ in att skärmen ska stängas av efter 3–5 minuters inaktivitet vid batteridrift.

## 7. Koppla ur oanvända USB-tillbehör
Externa hårddiskar, USB-musmottagare och belysta tangentbord drar ström från datorns batteri även när de inte används aktivt.

## 8. Kontrollera Windows Update
I sällsynta fall kan en Windows-uppdatering som fastnat i bakgrunden belasta processorn till 100 %. Öppna **Windows Update** och se till att inga installationer ligger och tuggar.

## 9. Generera en batterirapport i Windows
För att kontrollera om själva battericellerna har åldrats fysiskt kan du skapa en detaljerad rapport:
1. Öppna Kommandotolken (CMD) som administratör.
2. Skriv `powercfg /batteryreport` och tryck på Enter.
3. Öppna den skapade HTML-filen och jämför **Design Capacity** med **Full Charge Capacity**. Om kapaciteten har sjunkit drastiskt är batteriet utslitet.

## 10. Använd tillverkarens batterihälsoverktyg
Många tillverkare (som Lenovo Vantage, MyASUS, HP Support Assistant eller Dell Power Manager) har inställningar för att begränsa laddningen till 80 % vid nätdrift för att skona batteriets livslängd.

## Relaterade artiklar
* [Så stänger du av autostart-program i Windows 11](/artiklar/sa-stanger-du-av-autostart-program-i-windows-11/)
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)
* [Så ser du vilka appar som drar mest batteri på Android](/artiklar/sa-ser-du-vilka-appar-som-drar-mest-batteri-pa-android/)

---
title: "Windows Update fastnar – så löser du vanliga uppdateringsproblem"
description: "Steg för steg-guide när uppdateringar i Windows 11 fastnar på 0 %, ger felkoder eller vägrar att slutföras."
author: "Aram Anwar"
publishedAt: "2026-09-17T11:20:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "windows-update", "felsokning", "uppdatering"]
heroImage: "/images/windows-update-fastnar.svg"
heroImageAlt: "Illustration av Windows Update felsökning"
sources:
  - name: "Microsoft Support — Windows Update Troubleshooter"
    url: "https://support.microsoft.com/en-us/windows/windows-update-troubleshooter-19bc41ca-ad72-ae8e-3090-630227181d6f"
---

När Windows Update fastnar på en viss procenthalt (t.ex. 20 % eller 100 %), eller om du möts av felkoder som `0x80070002` eller `0x800f081f`, finns det säkra metoder för att återställa uppdateringstjänsten.

<div class="quick-fix-box">
  <h3>Säkra första steg</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Starta om datorn helt (välj <em>Starta om</em>, inte Stäng av).</li>
    <li>Kontrollera att du har minst 15–20 GB ledigt diskutrymme på C:.</li>
    <li>Kör den inbyggda <strong>Windows Update-felsökaren</strong>.</li>
  </ol>
</div>

## 1. Kör Windows Update-felsökaren

Windows 11 har ett specialiserat verktyg som söker efter korrupta uppdateringsfiler:

1. Öppna **Inställningar (`Win + I`) > System > Felsök**.
2. Klicka på **Andra felsökare**.
3. Klicka på **Kör** bredvid *Windows Update*.

## 2. Återställ uppdateringscachen (SoftwareDistribution)

Om uppdateringsfilen som laddats ned blivit korrupt behöver den raderas så att Windows kan hämta en ny:

1. Sök efter **cmd** i Startmenyn, högerklicka och välj *Kör som administratör*.
2. Stäng av uppdateringstjänsterna genom att skriva följande kommandon (tryck Enter efter varje):
   ```text
   net stop wuauserv
   net stop bits
   ```
3. Öppna Utforskaren och gå till mappen `C:\Windows\SoftwareDistribution`.
4. Radera allt innehåll i mappen **DataStore** och **Download**.
5. Gå tillbaka till Kommandotolken och starta tjänsterna igen:
   ```text
   net start wuauserv
   net start bits
   ```
6. Gå till Windows Update och klicka på **Sök efter uppdateringar**.

## 3. Reparera systemfiler med DISM och SFC

Om systemfiler är skadade kan du köra Microsofts officiella reparationskommandon:

1. Öppna Kommandotolken som administratör.
2. Skriv `DISM.exe /Online /Cleanup-image /Restorehealth` och tryck Enter. Vänta tills processen är klar.
3. Skriv därefter `sfc /scannow` och tryck Enter.

## Relaterade guider
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)
* [Blåskärm i Windows 11 – vad du bör göra först](/artiklar/blaskarm-i-windows-11-vad-du-bor-gora-forst/)

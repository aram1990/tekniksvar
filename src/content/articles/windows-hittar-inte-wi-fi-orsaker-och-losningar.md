---
title: "Windows hittar inte Wi-Fi – orsaker och lösningar"
description: "Steg för steg-guide när din Windows 11-dator inte visar några tillgängliga Wi-Fi-nätverk eller när nätverkskortet saknas."
author: "Aram Anwar"
publishedAt: "2026-09-17"
contentType: "fix"
topics: ["windows", "problem"]
heroImage: "/images/windows-hittar-inte-wi-fi.svg"
heroImageAlt: "Lös Wi-Fi-anslutningsproblem i Windows 11"
tags: ["wifi", "nätverk", "windows-11", "felsokning"]
sources:
  - name: "Microsoft Support — Fix Wi-Fi connection issues in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-wifi-connection-issues-in-windows-9407400e-6a67-58a6-86a9-0fc57d4e1a87"
---

Om ikonen för Wi-Fi saknas helt i Windows 11, eller om datorn rapporterar "Inga Wi-Fi-nätverk hittades", beror det oftast på drivrutinsproblem, strömsparlägen som låst nätverkskortet eller felaktiga nätverksinställningar.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Kontrollera att det inte finns en fysisk Wi-Fi-knapp eller FN-tangent på laptopen som råkat stänga av kortet.</li>
    <li>Säkerställ att <strong>Flygplansläge</strong> inte är aktiverat (`Win + A`).</li>
    <li>Starta om din Wi-Fi-router genom att dra ur strömsladden i 30 sekunder.</li>
  </ol>
</div>

## 1. Utför en nätverksåterställning i Windows 11

Om Windows har tappat kontakten med nätverkskortet är en inbyggd nätverksåterställning det snabbaste sättet att rensa alla cacher och starta om nätverksstacken.

1. Öppna **Inställningar > Nätverk och internet**.
2. Klicka på **Avancerade nätverksinställningar** längst ned.
3. Välj **Nätverksåterställning** och klicka på **Återställ nu**.
4. Datorn kommer att starta om automatiskt efter fem minuter (eller starta om manuellt direkt).

## 2. Inaktivera och aktivera Wi-Fi-kortet i Enhetshanteraren

1. Högerklicka på Startknappen och välj **Enhetshanteraren**.
2. Expandera kategorin **Nätverkskort**.
3. Leta upp ditt trådlösa nätverkskort (t.ex. *Intel Wi-Fi 6*, *Realtek Wireless* eller *Qualcomm Wi-Fi*).
4. Högerklicka på nätverkskortet och välj **Inaktivera enhet**. Vänta 10 sekunder, högerklicka igen och välj **Aktivera enhet**.

Om drivrutiner eller trådlösa adaptrar kraschar frekvent kan det ibland hänga samman med andra enheter. Se vår felsökningsguide för [när Bluetooth inte fungerar i Windows 11](/artiklar/bluetooth-fungerar-inte-i-windows-11-steg-for-steg/).

## 3. Kör nätverksfelsökaren

Windows 11 har en inbyggd diagnostik för nätverkskort:
* Gå till **Inställningar > System > Felsök > Andra felsökare**.
* Klicka på **Kör** bredvid *Nätverkskort* eller *Internetanslutningar*.

## 4. Återställ TCP/IP och rensa DNS-cachen via Kommandotolken

1. Sök efter `cmd` i Startmenyn, högerklicka och välj **Kör som administratör**.
2. Skriv följande kommandon ett i taget och tryck `Enter` efter varje:
   ```cmd
   netsh winsock reset
   netsh int ip reset
   ipconfig /release
   ipconfig /renew
   ipconfig /flushdns
   ```
3. Starta om datorn.

Om nätverksproblemen uppstod omedelbart efter en Windows-uppdatering som inte slutförts korrekt kan du läsa vår artikel [Windows Update fastnar – så löser du vanliga uppdateringsproblem](/artiklar/windows-update-fastnar-sa-loser-du-vanliga-uppdateringsproblem/).

## 5. Vad gör du om datorn drabbats av krascher eller BSOD?

Om Wi-Fi-kortet orsakar att hela datorn kraschar och visar en blåskärm beror det oftast på en korrupt drivrutin. Se vår guide för [blåskärm i Windows 11](/artiklar/blaskarm-i-windows-11-vad-du-bor-gora-forst/) eller testa att starta om datorn i [felsäkert läge i Windows 11](/artiklar/sa-startar-du-windows-11-i-felsakert-lage/).

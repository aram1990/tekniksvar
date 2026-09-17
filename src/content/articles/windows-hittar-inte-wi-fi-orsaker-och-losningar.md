---
title: "Windows hittar inte Wi-Fi – orsaker och lösningar"
description: "Steg för steg-guide när din Windows 11-dator inte visar några tillgängliga Wi-Fi-nätverk eller när nätverkskortet saknas."
author: "Aram Anwar"
publishedAt: "2025-01-24"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["wifi", "nätverk", "windows-11", "felsokning"]
sources:
  - name: "Microsoft Support — Fix Wi-Fi connection issues in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9407400e-6a67-58a6-86a9-0fc57d4e1a87"
---

Om ikonen för Wi-Fi saknas helt i Windows 11, eller om datorn rapporterar "Inga Wi-Fi-nätverk hittades", beror det oftast på drivrutinsproblem eller att Wi-Fi-kortet hamnat i ett låst tillstånd.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Kontrollera att det inte finns en fysisk Wi-Fi-knapp på laptopen som råkat stängas av.</li>
    <li>Starta om din Wi-Fi-router.</li>
    <li>Kör kommandot <code>netsh winsock reset</code> i Kommandotolken som administratör.</li>
  </ol>
</div>

## 1. Återställ nätverksinställningarna i Windows 11

Windows har en inbyggd återställningsfunktion som raderar och installerar om alla nätverkskort:

1. Öppna **Inställningar** (`Win + I`).
2. Gå till **Nätverk och internet > Avancerade nätverksinställningar**.
3. Klicka på **Nätverksåterställning**.
4. Klicka på **Återställ nu** och bekräfta. Datorn kommer att starta om efter 5 minuter.

## 2. Återstarta Wi-Fi-kortet i Enhetshanteraren

1. Högerklicka på Startknappen och välj **Enhetshanteraren**.
2. Expandera **Nätverkskort**.
3. Leta upp ditt trådlösa nätverkskort (t.ex. *Intel Wi-Fi 6 AX201* eller *Qualcomm Wi-Fi Adapter*).
4. Högerklicka och välj **Inaktivera enhet**. Vänta 10 sekunder, högerklicka igen och välj **Aktivera enhet**.

## 3. Rensa DNS och återställ IP via Kommandotolken

Om datorn är ansluten till Wi-Fi men saknar internetanslutning ("Inget internet, säkrat"):

1. Sök efter **cmd** i Startmenyn, högerklicka och välj *Kör som administratör*.
2. Skriv följande kommandon ett i taget och tryck Enter efter varje:
   ```text
   netsh winsock reset
   netsh int ip reset
   ipconfig /release
   ipconfig /renew
   ipconfig /flushdns
   ```
3. Starta om datorn.

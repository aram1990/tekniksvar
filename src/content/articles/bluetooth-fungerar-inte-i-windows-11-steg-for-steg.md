---
title: "Bluetooth fungerar inte i Windows 11 – steg för steg"
description: "Felsökningsguide för när Bluetooth försvinner, kopplar från eller vägrar ansluta hörlurar och möss i Windows 11."
author: "Aram Anwar"
publishedAt: "2025-01-20"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["bluetooth", "windows-11", "felsokning", "drivrutiner"]
sources:
  - name: "Microsoft Support — Fix Bluetooth problems in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-bluetooth-problems-in-windows-723eb01a-b292-e7b3-194f-d05d0e301e93"
---

När Bluetooth slutar fungera i Windows 11 brukar det visa sig genom att knappen för Bluetooth försvinner helt från Snabbinställningar, eller att anslutna enheter som hörlurar och möss konstant kopplar från.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Kontrollera att <strong>Flygplansläge</strong> inte är aktiverat.</li>
    <li>Starta om Bluetooth-tjänsten via <code>services.msc</code>.</li>
    <li>Ta bort den anslutna enheten och parkoppla den på nytt.</li>
  </ol>
</div>

## 1. Kör den inbyggda felsökaren i Windows 11

Windows har ett automatiskt verktyg som upptäcker och återställer Bluetooth-kortet:

1. Öppna **Inställningar** (`Win + I`).
2. Gå till **System > Felsök**.
3. Klicka på **Andra felsökare**.
4. Klicka på **Kör** bredvid *Bluetooth*.

## 2. Starta om Bluetooth-tjänsten i Windows

Ibland låser sig bakgrundstjänsten för Bluetooth. Så här startar du om den manuellt:

1. Tryck `Win + R`, skriv `services.msc` och tryck Enter.
2. Leta upp **Bluetooth Support Service** (Bluetooth-stödtjänst).
3. Högerklicka och välj **Starta om**.
4. Högerklicka igen, välj *Egenskaper*, och ställ in *Startmetod* till **Automatisk**.

## 3. Installera om Bluetooth-drivrutinen i Enhetshanteraren

Om Bluetooth-ikonen har försvunnit helt i Windows beror det ofta på en korrupt drivrutin:

1. Högerklicka på Startknappen och välj **Enhetshanteraren**.
2. Expandera kategorin **Bluetooth**.
3. Högerklicka på ditt Bluetooth-kort (t.ex. *Intel Wireless Bluetooth* eller *Realtek Bluetooth Adapter*).
4. Välj **Avinstallera enhet**.
5. **Starta om datorn.** Windows kommer automatiskt att installera om drivrutinen vid nästa uppstart.

## 4. Ta bort och parkoppla enheten igen

Om problemet bara gäller en specifik enhet (t.ex. dina trådlösa hörlurar):

* Gå till **Inställningar > Bluetooth och enheter**.
* Klicka på de tre punkterna bredvid enheten och välj **Ta bort enhet**.
* Sätt hörlurarna i *Parkopplingsläge* och lägg till dem igen via **Lägg till enhet**.

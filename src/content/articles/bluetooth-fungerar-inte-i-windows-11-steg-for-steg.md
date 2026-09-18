---
title: "Bluetooth fungerar inte i Windows 11 – steg för steg"
description: "Felsökningsguide för när Bluetooth försvinner, kopplar från eller vägrar ansluta hörlurar och möss i Windows 11."
author: "Aram Anwar"
publishedAt: "2026-09-17"
contentType: "fix"
topics: ["windows", "problem"]
heroImage: "/images/bluetooth-fungerar-inte-i-windows-11.svg"
heroImageAlt: "Felsökning av Bluetooth i Windows 11"
tags: ["bluetooth", "windows-11", "felsokning", "drivrutiner"]
sources:
  - name: "Microsoft Support — Fix Bluetooth problems in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-bluetooth-problems-in-windows-723eb01a-b292-e7b3-194f-d05d0e301e93"
---

När Bluetooth slutar fungera i Windows 11 brukar det visa sig genom att knappen för Bluetooth försvinner helt från Snabbinställningar, eller att anslutna enheter som trådlösa hörlurar och möss konstant kopplar från.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Kontrollera att <strong>Flygplansläge</strong> inte är aktiverat i Snabbinställningar (`Win + A`).</li>
    <li>Starta om Bluetooth-tjänsten via <code>services.msc</code>.</li>
    <li>Ta bort och parkoppla enheten på nytt i Inställningar.</li>
  </ol>
</div>

## 1. Slå av och på Bluetooth samt kontrollera Flygplansläge

Tryck på tangentkombinationen `Win + A` för att öppna snabbinställningsmenyn längst ner till höger i Windows 11:
* Säkerställ att **Bluetooth** är aktiverat (ikonen ska vara blå).
* Kontrollera att **Flygplansläge** är avstängt, eftersom det inaktiverar alla trådlösa radioanslutningar.

Om du även upplever nätverksproblem kan du läsa vår guide om vad du gör när [Windows inte hittar Wi-Fi](/artiklar/windows-hittar-inte-wi-fi-orsaker-och-losningar/).

## 2. Starta om Bluetooth-stödjtjänsten i Windows

Ibland stannar bakgrundstjänsten som hanterar Bluetooth-anslutningar i Windows 11.

1. Tryck `Win + R`, skriv `services.msc` och tryck `Enter`.
2. Leta upp **Tjänsten Bluetooth-stöd** (*Bluetooth Support Service*).
3. Högerklicka och välj **Starta om** (eller *Egenskaper* och sätt *Startmetod* till **Automatisk**).

## 3. Ta bort enheten och parkoppla igen

Om anslutna hörlurar eller högtalare vägrar spela upp ljud trots att de visar som anslutna:

1. Gå till **Inställningar > Bluetooth och enheter > Enheter**.
2. Klicka på de tre punkterna bredvid den krånglande enheten och välj **Ta bort enhet**.
3. Sätt dina hörlurar i ihoptparningsläge och klicka på **Lägg till enhet > Bluetooth** för att ansluta på nytt.

Om du har anslutit trådlösa hörlurar men fortfarande inte får något ljud kan du läsa vår guide [inget ljud i Windows 11 – så felsöker du](/artiklar/inget-ljud-i-windows-11-sa-felsoker-du-steg-for-steg/). Om det är headsetets mikrofon som inte fångar upp din röst finns även vår artikel om [när mikrofonen inte fungerar i Windows 11](/artiklar/mikrofonen-fungerar-inte-i-windows-11-9-saker-att-kontrollera/).

## 4. Installera om Bluetooth-drivrutinen i Enhetshanteraren

Om Bluetooth-knappen försvunnit helt beror det ofta på att drivrutinen kraschat eller hamnat i felaktigt tillstånd.

1. Högerklicka på Startknappen och välj **Enhetshanteraren**.
2. Expandera kategorin **Bluetooth**.
3. Högerklicka på din Bluetooth-adapter (t.ex. *Intel Wireless Bluetooth* eller *Realtek Bluetooth Adapter*) och välj **Avinstallera enhet**.
4. Starta om datorn. Windows kommer automatiskt att upptäcka adaptern och installera om drivrutinen vid nästa uppstart.

## 5. Kör den inbyggda felsökaren för Bluetooth

Windows 11 har en dedikerad felsökare:
* Öppna **Inställningar > System > Felsök > Andra felsökare**.
* Klicka på **Kör** bredvid *Bluetooth*.

Om problemet kvarstår och verkar bero på djupare systemfel kan du testa att starta datorn i [felsäkert läge i Windows 11](/artiklar/sa-startar-du-windows-11-i-felsakert-lage/) för att avgöra om det rör sig om ett mjukvarufel eller trasig hårdvara.

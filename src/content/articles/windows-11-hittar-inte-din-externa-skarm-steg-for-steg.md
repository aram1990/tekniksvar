---
title: "Windows 11 hittar inte din externa skärm – steg för steg"
description: "Felsök när den externa bildskärmen inte upptäcks i Windows 11. Kontrollera kablar, projiceringsläge, grafikdrivrutiner och dockningsstationer."
author: "Aram Anwar"
publishedAt: "2026-09-17T12:10:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "skarm", "hdmi", "displayport", "felsokning"]
heroImage: "/images/windows-11-hittar-inte-extern-skarm.svg"
heroImageAlt: "Illustration av felsökning för extern bildskärm i Windows 11"
sources:
  - name: "Microsoft Support — Troubleshoot external monitor connections in Windows 11"
    url: "https://support.microsoft.com/en-us/windows/troubleshoot-external-monitor-connections-in-windows-11-352102b2-3fe7-4171-8d2a-a92179831966"
---

När du ansluter en extern bildskärm via HDMI, DisplayPort eller USB-C och möts av svart skärm eller meddelandet *"Ingen signal"* finns det flera enkla inställningar att kontrollera i Windows 11.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Tryck <code>Win + P</code> och se till att projiceringsläget är inställt på <strong>Utvidga</strong> eller <strong>Duplicera</strong> (inte <em>Endast datorskärm</em>).</li>
    <li>Kontrollera att skärmens egen meny är inställd på rätt **Inkälla** (Input Source: HDMI 1, DisplayPort osv.).</li>
    <li>Koppla ur kabeln, vänta 5 sekunder och anslut den igen.</li>
  </ol>
</div>

## 1. Tvinga Windows att identifiera skärmen

1. Öppna **Inställningar (`Win + I`) > System > Visningsalternativ**.
2. Expandera avsnittet **Flera bildskärmar**.
3. Klicka på knappen **Sök** (Detect).

## 2. Återställ grafikdrivrutinen med tangentbordskommando

Windows har ett inbyggt snabbkommando som startar om grafikdrivrutinen direkt utan att du behöver starta om hela datorn:

* Tryck på `Win + Ctrl + Shift + B`.
* Skärmen blinkar till kort och du hör ett litet pip. Detta tvinga grafikkortet att initiera alla anslutna skärmar på nytt.

## 3. Problem med dockningsstationer och USB-C

Om skärmen är ansluten via en USB-C-hubb eller dockningsstation:
* Se till att USB-C-porten på din laptop har stöd för **DisplayPort Alt Mode** eller Thunderbolt. Alla USB-C-portar kan inte skicka bildsignal.
* Prova att ansluta skärmkabeln direkt till laptopen istället för via dockan för att utesluta fel på dockningsstationen.

## Relaterade guider
* [Bluetooth fungerar inte i Windows 11](/artiklar/bluetooth-fungerar-inte-i-windows-11-steg-for-steg/)
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)

---
title: "Inget ljud i Windows 11 – så felsöker du steg för steg"
description: "Felsökningsguide när ljudet försvunnit i Windows 11. Kontrollera uppspelningsenheter, volymmixern, Bluetooth och drivrutiner."
author: "Aram Anwar"
publishedAt: "2026-09-17T10:50:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "ljud", "felsokning", "hogtalare", "drivrutiner"]
heroImage: "/images/inget-ljud-i-windows-11.svg"
heroImageAlt: "Illustration av ljudfelsökning i Windows 11"
sources:
  - name: "Microsoft Support — Fix sound or audio problems in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-sound-or-audio-problems-in-windows-7388429f-6e21-b21d-b29e-6f8b33f2d20d"
---

När ljudet plötsligt tystnar i Windows 11 beror det i regel på att fel ljudutgång har valts, att volymen stängts av i volymmixern eller att en drivrutin låst sig.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Klicka på högtalarikonen nere vid klockan och kontrollera att rätt <strong>uppspelningsenhet</strong> är vald.</li>
    <li>Se till att volymen inte är avstängd (Mute).</li>
    <li>Kör den inbyggda felsökaren för ljud i Windows 11.</li>
  </ol>
</div>

## 1. Välj rätt uppspelningsenhet

Om du har anslutit en extern skärm via HDMI eller ett par trådlösa hörlurar kan Windows automatiskt ha ändrat ljudutgång:

1. Klicka på snabbinställningarna (högtalar- och Wi-Fi-ikonen) nere till höger på Aktivitetshanteraren.
2. Klicka på **pilen bredvid volymreglaget**.
3. Välj din önskade enhet (t.ex. *Högtalare (Realtek High Definition Audio)* eller dina hörlurar).

## 2. Kontrollera volymmixern för enskilda appar

Om ljudet fungerar i Spotify men inte i webbläsaren Chrome har volymen troligen stängts av för just det programmet:

1. Högerklicka på högtalarikonen och välj **Öppna Volymmixern**.
2. Se till att volymen för det aktuella programmet är uppskruvad och inte har en röd överkorsad högtalarsymbol.

## 3. Kör den inbyggda ljudfelsökaren

Windows 11 har en automatisk felsökare som kan återställa ljudkortet:

* Gå till **Inställningar (`Win + I`) > System > Ljud**.
* Rulla ner till avsnittet *Avancerat* och klicka på **Felsök vanliga ljudproblem**.

## 4. Starta om ljudtjänsten i Windows

1. Tryck `Win + R`, skriv `services.msc` och tryck Enter.
2. Leta upp **Windows Audio**.
3. Högerklicka och välj **Starta om**.

## Relaterade guider
* [Bluetooth fungerar inte i Windows 11](/artiklar/bluetooth-fungerar-inte-i-windows-11-steg-for-steg/)
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)

* [Windows 11 känner inte igen hörlurar – vanliga lösningar](/artiklar/windows-11-kanner-inte-igen-horlurar-vanliga-losningar/)
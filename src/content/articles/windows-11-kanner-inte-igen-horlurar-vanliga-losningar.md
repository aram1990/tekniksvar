---
title: "Windows 11 känner inte igen hörlurar – vanliga lösningar"
description: "Felsökningsguide för när hörlurar (3.5 mm, USB eller Bluetooth) inte hittas eller inte spelar upp ljud i Windows 11."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "hörlurar", "ljudproblem", "bluetooth", "realtek"]
heroImage: "/images/articles/windows-11-kanner-inte-igen-horlurar-vanliga-losningar/windows-11-kanner-inte-igen-horlurar-vanliga-losningar.webp"
heroImageAlt: "Hörlurar anslutna till en dator"
heroImageCredit: "Foto: Unsplash"
heroImageSource: "https://unsplash.com/photos/black-wireless-headphones-on-yellow-background-gP2M7M49sY"
sources:
  - name: "Microsoft Support — Fix sound or audio problems in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-sound-or-audio-problems-in-windows-731748d5-07a7-4791-0c3b-20412581f13b"
---

Det är ett vanligt problem i Windows 11 att datorn fortsätter spela upp ljud ur de inbyggda högtalarna när du kopplar in ett par hörlurar, eller att hörlurarna inte dyker upp i listan över uppspelningsenheter.

Till skillnad från generella ljudproblem handlar hörlursfelsökning ofta om korrekt utenhetsval, kontaktdetektering (jack detection) eller Bluetooth-parkoppling.

> ### Snabb lösning
> 1. Klicka på **högtalarikonen** nere vid klockan i aktivitetsfältet.
> 2. Klicka på ikonen för **Välj ljudutgång (Select a sound output)** bredvid volymreglaget.
> 3. Välj dina hörlurar manuellt i listan.

## 1. Välj rätt standardenhet för uppspelning

När du ansluter hörlurar byter Windows 11 oftast ljudutgång automatiskt. Om detta misslyckas måste du ställa in det manuellt:

1. Tryck på `Win + I` för att öppna **Inställningar**.
2. Gå till **System > Ljud (Sound)**.
3. Under sektionen **Välj var ljudet ska spelas upp**, kontrollera om dina hörlurar visas och klicka på dem för att göra dem till standard.

## 2. 3.5 mm-uttag och kontaktdetektering (Realtek Audio)

Om du använder hörlurar med en analog 3.5 mm-kontakt beror avsaknaden av ljud ofta på datorns ljudkortshanterare (t.ex. Realtek Audio Console):

* När du sätter i kontakten måste ljudkortet registrera den fysiska anslutningen.
* Om ett popup-fönster frågar "Vad kopplade du in?", välj **Hörlurar (Headset/Headphones)**.
* Om popupen är inaktiverad, öppna **Realtek Audio Console** från Startmenyn, gå till avancerade enhetsinställningar och aktivera *"Möjliggör re-tasking av ljudutgång"*.

## 3. Bluetooth-hörlurar: Ta bort och parkoppla igen

För trådlösa Bluetooth-hörlurar kan anslutningen hänga sig om de parkopplats till mobilen samtidigt:

1. Öppna **Inställningar > Bluetooth och enheter**.
2. Klicka på de tre punkterna bredvid dina hörlurar och välj **Ta bort enhet (Remove device)**.
3. Sätt hörlurarna i **parkopplingsläge (Pairing mode)**.
4. Klicka på **Lägg till enhet > Bluetooth** i Windows och koppla ihop dem på nytt.

## 4. Drivrutiner och Ljud-kontrollpanelen

1. Tryck på `Win + R`, skriv `mmsys.cpl` och tryck på Enter för att öppna den klassiska Ljud-kontrollpanelen.
2. Högerklicka i ett tomt område på fliken *Uppspelning* och se till att **Visa inaktiverade enheter** och **Visa frånkopplade enheter** är ikryssade.
3. Om hörlurarna visas som inaktiverade, högerklicka och välj **Aktivera**.

## Relaterade artiklar
* [Inget ljud i Windows 11 – så felsöker du](/artiklar/inget-ljud-i-windows-11-sa-felsoker-du-steg-for-steg/)
* [Bluetooth fungerar inte i Windows 11](/artiklar/bluetooth-fungerar-inte-i-windows-11-steg-for-steg/)
* [Mikrofonen fungerar inte i Windows 11](/artiklar/mikrofonen-fungerar-inte-i-windows-11-9-saker-att-kontrollera/)

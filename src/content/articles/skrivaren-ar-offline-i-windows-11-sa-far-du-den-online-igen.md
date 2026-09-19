---
title: "Skrivaren är offline i Windows 11 – så får du den online igen"
description: "Lös problemet när skrivaren visas som 'Offline' i Windows 11. Felsök utskriftskön, Print Spooler-tjänsten och nätverksanslutningar."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "skrivare", "offline-skrivare", "print-spooler", "felsökning"]
sources:
  - name: "Microsoft Support — Troubleshoot printer offline status"
    url: "https://support.microsoft.com/en-us/windows/troubleshoot-offline-printer-problems-in-windows-f12d5f3d-d12d-4340-b611-3962f5f19067"
---

När du ska skriva ut ett dokument i Windows 11 och skrivaren står som **Offline** trots att den är strömsatt beror det oftast på kommunikationsavbrott i nätverket, en fastnad utskriftskö eller felaktiga statusflaggor.

> ### Snabb lösning
> 1. Kontrollera att skrivaren är **påslagen och ansluten** till samma Wi-Fi-nätverk som datorn.
> 2. Öppna **Inställningar > Bluetooth och enheter > Skrivare och skannrar**, klicka på din skrivare och välj **Öppna utskriftskö**.
> 3. Se till att **Använd skrivaren offline (Use Printer Offline)** INTE är ikryssat under Skrivare-menyn.

## 1. Verifiera fysisk anslutning och nätverk

* **Nätverksskrivare (Wi-Fi/Ethernet):** Starta om skrivaren och din Wi-Fi-router. Kontrollera på skrivarens skärm att den har en giltig IP-adress på ditt lokalnätverk.
* **USB-skrivare:** Koppla ur USB-kabeln och anslut den igen i en annan USB-port på datorn.

## 2. Rensa utskriftskön

Om ett dokument har fastnat i utskriftskön kan det blockera alla efterföljande utskrifter och tvinga skrivaren till offlineläge:

1. Gå till **Inställningar (`Win + I`) > Bluetooth och enheter > Skrivare och skannrar**.
2. Klicka på din skrivare och välj **Öppna utskriftskö (Open print queue)**.
3. Om det finns dokument i listan, klicka på de tre punkterna eller menyraden och välj **Avbryt alla dokument (Cancel all documents)**.

## 3. Starta om tjänsten Print Spooler (Utskriftshanteraren)

Print Spooler är den bakgrundstjänst i Windows som hanterar utskriftsjobb. Om den kraschar tappar Windows kontakten med skrivaren:

1. Tryck på `Win + R`, skriv `services.msc` och tryck på Enter.
2. Scrolla ned till tjänsten **Print Spooler** (Utskriftshanteraren).
3. Högerklicka på Print Spooler och välj **Starta om (Restart)**.

## 4. Ta bort och lägg till skrivaren igen

Om konfigurationsfilerna i Windows blivit korrupta är den mest effektiva lösningen att rensa enheten helt:

1. Gå till **Inställningar > Bluetooth och enheter > Skrivare och skannrar**.
2. Klicka på din skrivare och klicka på **Ta bort (Remove)**.
3. Klicka därefter på **Lägg till enhet (Add device)** och låt Windows söka upp skrivaren igen på nätverket.

## Relaterade artiklar
* [USB-enhet känns inte igen i Windows 11](/artiklar/usb-enhet-kanns-inte-igen-i-windows-11-steg-for-steg/)
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)
* [Windows hittar inte Wi-Fi – orsaker och lösningar](/artiklar/windows-hittar-inte-wi-fi-orsaker-och-losningar/)

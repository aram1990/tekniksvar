---
title: "USB-enhet känns inte igen i Windows 11 – steg för steg"
description: "Felsökningsguide för när ett USB-minne eller extern hårddisk inte känns igen i Windows 11. Åtgärda felkod 43, drivrutiner och portar."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "usb-felsökning", "hårddisk", "drivrutiner", "enhetshanteraren"]
sources:
  - name: "Microsoft Support — USB device not recognized error"
    url: "https://support.microsoft.com/en-us/topic/usb-port-may-stop-responding-after-you-frequently-insert-and-remove-a-usb-device-61d020d2-df75-9e67-d8cf-94d334dd163c"
heroImage: "/images/articles/usb-enhet-kanns-inte-igen-i-windows-11-steg-for-steg/usb-enhet-kanns-inte-igen-i-windows-11-steg-for-steg.webp"
heroImageAlt: "USB-minne för datalagring"
heroImageCredit: "Bild: Liftarn / Wikimedia Commons, CC BY-SA 3.0"
heroImageSource: "https://commons.wikimedia.org/wiki/File:USB_flash_drive.jpg"
---

När du ansluter ett USB-minne, en extern hårddisk eller ett tangentbord till datorn och möts av meddelandet *"USB-enheten känns inte igen"* (USB device not recognized) beror det oftast på tillfälliga kommunikationsfel, drivrutinsproblem eller strömhantering i Windows 11.

> ### Snabb lösning
> 1. Koppla ur USB-enheten och anslut den i en **annan USB-port** (gärna direkt i moderkortet på baksidan av en stationär dator).
> 2. Testa enheten på en annan dator för att utesluta hårdvarufel i själva USB-minnet.
> 3. Starta om datorn helt.

## 1. Prova en annan port och undvik USB-hubbar

Många externa hårddiskar kräver mer ström än vad en obelyst USB-hubb eller framsida på ett datorchassi kan leverera.
* Anslut USB-enheten direkt till datorns egna portar.
* Om det gäller en USB 3.0-enhet, testa både blå (USB 3) och svarta (USB 2) portar.

## 2. Återinstallera USB-drivrutiner i Enhetshanteraren

Om Windows har råkat spara en skadad enhetskonfiguration visas felkoder som **Kod 43** i Enhetshanteraren:

1. Högerklicka på Startknappen och välj **Enhetshanteraren (Device Manager)**.
2. Expandera kategorin **USB-styrenheter (Universal Serial Bus controllers)**.
3. Leta efter enheter med en gul varningstriangel (ofta namngiven *Okänd USB-enhet / Unknown USB Device*).
4. Högerklicka på den okända enheten och välj **Avinstallera enhet (Uninstall device)**.
5. Koppla ur USB-enheten, starta om datorn och anslut enheten igen.

## 3. Inaktivera selektiv USB-paus i strömsparinställningar

Windows 11 kan stänga av strömmen till USB-portar för att spara batteri, vilket kan göra att externa enheter kopplas från:

1. Öppna Startmenyn, sök efter **Redigera strömsparplan (Edit power plan)** och öppna den.
2. Klicka på **Ändra avancerade ströminställningar**.
3. Expandera **USB-inställningar > Selektiv USB-paus (USB selective suspend setting)**.
4. Sätt inställningen till **Inaktiverad (Disabled)** och klicka på Verkställ.

## 4. Diskhantering för osynliga hårddiskar

Om USB-minnet ger ett anslutningsljud men inte visas i Utforskaren kan det sakna en enhetsbokstav:

1. Högerklicka på Startknappen och välj **Diskhantering (Disk Management)**.
2. Leta upp din externa disk i den nedre listan.
3. Om disken visas som "Oallokerat utrymme" eller saknar enhetsbokstav, högerklicka och välj **Ändra enhetsbokstav och sökvägar**.

## Relaterade artiklar
* [Datorn hittar inte Android-telefonen via USB](/artiklar/datorn-hittar-inte-android-telefonen-via-usb-sa-loser-du-det/)
* [Så frigör du diskutrymme i Windows 11](/artiklar/sa-frigor-du-diskutrymme-i-windows-11-utan-att-radera-fel-filer/)
* [Windows 11 hittar inte din externa skärm](/artiklar/windows-11-hittar-inte-din-externa-skarm-steg-for-steg/)

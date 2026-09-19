---
title: "Mobildata fungerar inte på Android – så felsöker du"
description: "Felsökningsguide för när mobildata (4G/5G) inte fungerar på din Android-mobil. Åtgärda APN-inställningar, flygplansläge och roaming."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["android", "problem"]
tags: ["android", "mobildata", "4g", "5g", "apn", "felsökning"]
heroImage: "/images/articles/mobildata-fungerar-inte-pa-android-sa-felsoker-du/mobildata-fungerar-inte-pa-android-sa-felsoker-du.webp"
heroImageAlt: "Smarttelefon som visar mobildata och signalstyrka"
heroImageCredit: "Foto: Unsplash"
heroImageSource: "https://unsplash.com/photos/black-smartphone-on-white-surface-cP2M7M49sY"
sources:
  - name: "Google Android Help — Fix mobile data connections"
    url: "https://support.google.com/android/answer/9056348"
  - name: "Samsung Support — Troubleshooting mobile data issues"
    url: "https://www.samsung.com/support/"
---

Om du inte kan surfa eller använda appar när Wi-Fi är avstängt, trots att du har mobilt täckningstecken längst upp på skärmen, har din Android-mobil tappat anslutningen till mobiloperatörens datanät.

> ### Snabb lösning
> 1. Dra ned snabbmenyn och slå på **Flygplansläge** i 10 sekunder. Slå sedan av det igen för att tvinga mobilen att koppla upp mot närmaste mobilmast.
> 2. Verifiera att **Mobildata** faktiskt är aktiverat i snabbinställningarna.
> 3. Starta om mobilen.

## 1. Kontrollera datagränser och Datasparare

Android har inbyggda funktioner för att förhindra oväntade kostnader:

1. Öppna **Inställningar > Anslutning / Nätverk och internet > Mobilnätverk**.
2. Kontrollera om du har satt en **Datavarning eller Datagräns** som har uppnåtts.
3. Se till att **Datasparare (Data Saver)** inte är aktiverat, då detta blockerar bakgrundsdata för appar.

## 2. Kontrollera APN-inställningar (Åtkomstpunktsnamn)

Om du nyligen bytt mobiloperatör eller satt i ett nytt SIM-kort krävs rätt APN-inställningar för att datatrafiken ska dirigeras korrekt:

1. Gå till **Inställningar > Anslutning > Mobilnätverk > Åtkomstpunktsnamn (APN)**.
2. Klicka på menyn (de tre punkterna) och välj **Återställ till standard (Reset to default)**.
3. Kontrollera att din operatörs namn (t.ex. Telia, Tele2, Telenor, Tre) är ikryssat.

## 3. Slå på dataroaming utomlands

Om du befinner dig utomlands måste dataroaming vara aktiverat i mobilens meny för att operatören ska få koppla upp sig mot utländska partnernätverk:

* Gå till **Inställningar > Mobilnätverk** och slå på **Dataroaming**.

## 4. Återställ nätverksinställningar

Om anslutningen fortfarande inte fungerar kan du återställa alla nätverkskonfigurationer (detta raderar sparade Wi-Fi-lösenord och Bluetooth-enheter, men påverkar inte dina bilder eller appar):

1. Gå till **Inställningar > Allmän hantering / System > Återställ**.
2. Välj **Återställ nätverksinställningar (Reset network settings)**.
3. Bekräfta med din PIN-kod och starta om telefonen.

## Relaterade artiklar
* [Android är ansluten till Wi-Fi men internet fungerar inte](/artiklar/android-ar-ansluten-till-wi-fi-men-internet-fungerar-inte-sa-felsoker-du/)
* [Mobil hotspot fungerar inte på Android](/artiklar/mobil-hotspot-fungerar-inte-pa-android-8-saker-att-kontrollera/)
* [Bluetooth fungerar inte på Android](/artiklar/bluetooth-fungerar-inte-pa-android-vanliga-orsaker-och-losningar/)

---
title: "En Android-app kraschar hela tiden – så felsöker du"
description: "Guide för att lösa problem när appar stängs av omedelbart, fryser eller kraschar på din Android-telefon."
author: "Aram Anwar"
publishedAt: "2026-09-17"
contentType: "fix"
topics: ["android", "problem"]
heroImage: "/images/en-android-app-kraschar-hela-tiden.svg"
heroImageAlt: "Felsökning när Android-appar kraschar"
tags: ["android", "appar", "krasch", "felsokning", "play-butik"]
sources:
  - name: "Google Android Help — Fix an Android app that isn't working"
    url: "https://support.google.com/android/answer/2668665"
---

När en app på din Android-mobil plötsligt stängs ned med meddelandet "Appen har stoppats", fryser på startskärmen eller kraschar direkt vid öppning beror det oftast på en korrupt minnescache, uteblivna uppdateringar eller lagringsbrist på enheten.

<div class="quick-fix-box">
  <h3>Snabb lösning</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Tvinga stopp på appen och rensa dess cache i Inställningar.</li>
    <li>Uppdatera appen och <strong>Android System WebView</strong> i Google Play Butik.</li>
    <li>Starta om din mobiltelefon.</li>
  </ol>
</div>

## 1. Tvinga stopp och rensa appens cache

Detta nollställer tillfälliga filer utan att ta bort dina konton eller sparade inställningar i appen:

1. Öppna **Inställningar > Appar** (eller *Alla appar*).
2. Leta upp den app som kraschar och tryck på den.
3. Klicka på **Tvinga stopp**.
4. Gå därefter till **Lagring och cache** och klicka på **Rensa cache**.

## 2. Uppdatera appen och Android System WebView

Många appar förlitar sig på Androids inbyggda systemkomponent *Android System WebView* för att visa webbinnehåll. Om den komponenten innehåller en bugg kan flera appar krascha samtidigt.

1. Öppna **Google Play Butik**.
2. Tryck på din profilikon uppe till höger och välj **Hantera appar och enhet**.
3. Klicka på **Uppdatera alla**, eller sök manuellt efter *Android System WebView* och uppdatera den.

## 3. Kontrollera mobillagringen och ledigt minne

Om telefonens interna minne är nästan helt fullt kan appen krascha eftersom den inte kan skriva tillfälliga arbetsfiler till disken.

Se vår steg-för-steg-guide om [hur du frigör lagringsutrymme på Android](/artiklar/sa-frigor-du-lagringsutrymme-pa-android/).

## 4. Installera om appen

Om appen fortfarande kraschar efter rensning kan installationsfilerna vara korrumperade:
1. Håll fingret nedtryckt på appikonen och välj **Avinstallera**.
2. Starta om mobilen.
3. Öppna Google Play Butik och installera appen på nytt.

## 5. Kontrollera behörigheter och nätverk

Om kraschen inträffar när appen försöker koppla upp sig mot internet eller skicka notiser kan det bero på begränsade nätverksbehörigheter.

* Om du saknar notiser från appar kan du läsa vår guide om hur du åtgärdar när [Android inte visar notiser](/artiklar/android-visar-inga-notiser-sa-far-du-aviseringarna-att-fungera-igen/).
* Om appen kraschar på grund av avbruten internetanslutning, se [Android är ansluten till Wi-Fi men internet fungerar inte](/artiklar/android-ar-ansluten-till-wi-fi-men-internet-fungerar-inte-sa-felsoker-du/).

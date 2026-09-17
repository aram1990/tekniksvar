---
title: "En Android-app kraschar hela tiden – så felsöker du"
description: "Guide för att lösa problem när appar stängs av omedelbart, fryser eller kraschar på din Android-telefon."
author: "Aram Anwar"
publishedAt: "2025-01-30"
contentType: "fix"
topics: ["android", "problem"]
tags: ["android", "appar", "krasch", "felsokning", "play-butik"]
sources:
  - name: "Google Android Help — Fix an Android app that isn't working"
    url: "https://support.google.com/android/answer/2668665"
---

När en app på din Android-mobil plötsligt stängs ned med meddelandet "Appen har stoppats" beror det ofta på en korrupt cache, uteblivna uppdateringar eller minnesbrist.

<div class="quick-fix-box">
  <h3>Snabb lösning</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Tvinga stopp på appen och rensa dess cache i inställningarna.</li>
    <li>Uppdatera appen och <strong>Android System WebView</strong> i Google Play Butik.</li>
    <li>Starta om telefonen.</li>
  </ol>
</div>

## 1. Tvinga stopp och rensa appens cache

1. Håll fingret intryckt på appikonen på startskärmen och tryck på **i-ikonen** (Appinfo).
2. Klicka på **Tvinga stopp**.
3. Gå därefter till **Lagring** och tryck på **Rensa cache**.
4. Öppna appen igen.

## 2. Uppdatera Android System WebView och Google Chrome

**Android System WebView** är en systemkomponent som låter appar visa webbinnehåll. Om denna komponent har en bugg kan dussintals olika appar krascha samtidigt.

* Öppna **Google Play Butik**.
* Sök efter *Android System WebView*.
* Om det finns en knapp där det står **Uppdatera**, klicka på den.
* Gör samma sak för *Google Chrome*.

## 3. Installera om appen

Om appen fortfarande kraschar kan du avinstallera den och hämta den på nytt från Google Play Butik. Det garanterar att alla inställningsfiler återställs.

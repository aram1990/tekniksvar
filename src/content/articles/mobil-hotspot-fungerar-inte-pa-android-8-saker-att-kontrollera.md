---
title: "Mobil hotspot fungerar inte på Android – 8 saker att kontrollera"
description: "Felsök när du inte kan dela internet från din Android-mobil till datorn eller surfplattan. Inställningar för lösenord, frekvens och datasparare."
author: "Aram Anwar"
publishedAt: "2025-03-09"
contentType: "fix"
topics: ["android", "problem"]
tags: ["android", "hotspot", "internetdelning", "felsokning", "wifi"]
heroImage: "/images/mobil-hotspot-fungerar-inte-pa-android.svg"
heroImageAlt: "Illustration av internetdelning (hotspot) på Android"
sources:
  - name: "Google Android Help — Share a mobile connection by hotspot"
    url: "https://support.google.com/android/answer/9059108"
---

När du försöker dela internet från din Android-mobil till din dator via **Mobil hotspot** (internetdelning) och datorn inte kan ansluta eller saknar internet, finns det några vanliga orsaker.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Kontrollera att <strong>Mobildata</strong> är aktiverat på mobilen.</li>
    <li>Inaktivera läget <strong>Datasparare</strong> i mobilens nätverksinställningar.</li>
    <li>Testa att byta hotspot-frekvens från 5 GHz till <strong>2.4 GHz</strong> (bättre kompatibilitet för äldre datorer).</li>
  </ol>
</div>

## 1. Slå av Datasparare (Data Saver)

Om *Datasparare* är aktiverat i Android blockeras mobilen från att vidarebefordra mobildata till andra enheter:

* Gå till **Inställningar > Anslutning > Dataanvändning**.
* Slå av **Datasparare**.

## 2. Byt APN-inställningar eller kontakta operatören

Vissa mobiloperatörer eller kontantkort har begränsningar mot internetdelning. Se till att dina APN-inställningar (*Åtkomstpunktsnamn*) innehåller värdet `default,supl,dun`.

## Relaterade guider
* [Android är ansluten till Wi-Fi men internet fungerar inte](/artiklar/android-ar-ansluten-till-wi-fi-men-internet-fungerar-inte-sa-felsoker-du/)
* [Windows hittar inte Wi-Fi – orsaker och lösningar](/artiklar/windows-hittar-inte-wi-fi-orsaker-och-losningar/)

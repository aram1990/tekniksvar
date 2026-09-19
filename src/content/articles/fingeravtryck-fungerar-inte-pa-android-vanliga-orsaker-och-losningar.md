---
title: "Fingeravtryck fungerar inte på Android – vanliga orsaker och lösningar"
description: "Felsökning när fingeravtrycksläsaren på din Android-mobil slutar reagera eller misslyckas att läsa av ditt finger."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["android", "problem"]
tags: ["android", "fingeravtryck", "biometri", "samsung", "pixel", "felsökning"]
sources:
  - name: "Google Android Help — Fix fingerprint issues on Android"
    url: "https://support.google.com/pixelphone/answer/6285273"
  - name: "Samsung Support — Fingerprint scanner troubleshooting"
    url: "https://www.samsung.com/support/"
---

Fingeravtrycksläsaren på Android är ett av de mest använda sätten att låsa upp telefonen och godkänna BankID eller betalningar. När sensorn slutar svara eller gång på gång säger *"Ingen matchning"* skapar det snabbt frustration.

> ### Snabb lösning
> 1. Torka av skärmen/sensorn och ditt finger med en ren, torr mikrofiberduk.
> 2. Om du nyligen monterat ett **skärmskydd**, slå på inställningen **Beröringskänslighet (Touch sensitivity)** i skärmmenyn.
> 3. Lägg till samma finger två gånger i biometriinställningarna.

## 1. Smuts, fukt och extrem kyla

Optiska och ultraljudsbaserade fingeravtryckssensorer under skärmen är känsliga för yttre påverkan:
* **Fuktiga eller mycket torra fingrar:** Om du nyligen tvättat händerna eller om huden är extremt torr under vintern förändras fingrets mönster. Fukta fingret lätt eller använd handkräm.
* **Fettsmuts på glaset:** Torka av området över sensorn.

## 2. Skärmskydd och beröringskänslighet

Många billiga skärmskydd i härdat glas bryter ljuset eller ultraljudsvågorna från sensorer inbyggda under skärmen:

1. Gå till **Inställningar > Skärm (Display)**.
2. Slå på reglaget för **Ökad beröringskänslighet (Touch sensitivity)**.
3. Om det inte hjälper, överväg att byta till ett officiellt certiverat skärmskydd (t.ex. Samsung/Google-godkänt).

## 3. Ta bort och registrera om fingeravtrycket

Lösningen på de allra flesta läsfel är att lägga till fingeravtrycken på nytt:

1. Öppna **Inställningar > Säkerhet och sekretess > Biometri > Fingeravtryck**.
2. Ange din PIN-kod.
3. Radera dina befintliga avtryck.
4. Klicka på **Lägg till fingeravtryck**.
5. **Proffstips:** Registrera ditt primära tumavtryck som två separata avtryck (t.ex. "Tumme 1" och "Tumme 2") i olika vinklar.

## 4. Säkerhetslåsning vid för många felaktiga försök

Android har inbyggt skydd mot intrång. Om sensorn misslyckats 5 gånger i rad inaktiveras biometri tillfälligt under 30 sekunder och kräver att du anger din PIN-kod eller ditt mönster.

## Relaterade artiklar
* [En Android-app kraschar hela tiden – så felsöker du](/artiklar/en-android-app-kraschar-hela-tiden-sa-felsoker-du/)
* [Kameran fungerar inte på Android](/artiklar/kameran-fungerar-inte-pa-android-sa-loser-du-vanliga-fel/)
* [Tvåfaktorsautentisering förklarad](/artiklar/tvafaktorsautentisering-forklarad-sa-skyddar-2fa-dina-konton/)

---
title: "OneDrive synkar inte – vanliga fel och lösningar"
description: "Felsökningsguide när Microsoft OneDrive slutar synkronisera filer i Windows 11, visar röda utropstecken eller fastnar i 'Söker efter ändringar'."
author: "Aram Anwar"
publishedAt: "2026-09-17T11:30:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["onedrive", "microsoft", "synkning", "windows-11", "molnlagring"]
heroImage: "/images/onedrive-synkar-inte.svg"
heroImageAlt: "Illustration av OneDrive synkfelsökning i Windows 11"
sources:
  - name: "Microsoft Support — Fix OneDrive sync problems"
    url: "https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-08998094-5483-426f-8c37-43714e3b566e"
---

När Microsoft OneDrive slutar synkronisera ser du ofta en röd kryssymbol eller ett gult utropstecken på molnikonen nere vid klockan i Windows 11.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Klicka på OneDrive-ikonen nere vid klockan och se om synkningen har <strong>pausats</strong>.</li>
    <li>Kontrollera att ditt lagringsutrymme på Microsoft-kontot inte är fullt.</li>
    <li>Kontrollera att filnamn inte innehåller förbjudna tecken som <code>" * : &lt; &gt; ? / \ |</code>.</li>
  </ol>
</div>

## 1. Starta om OneDrive

Ett enkelt sätt att lösa tillfälliga låsningar är att avsluta och starta om appen:

1. Klicka på OneDrive-ikonen vid klockan.
2. Klicka på **Kugghjulet (Inställningar)** uppe till höger.
3. Välj **Pausa synkronisering > Avsluta OneDrive**.
4. Sök sedan efter *OneDrive* i Startmenyn och öppna appen igen.

## 2. Kontrollera Filstorlek och Teckenbegränsningar

* **Förbjudna tecken:** OneDrive stöder inte filnamn som innehåller `~ " # % & * : < > ? / \ { | }`.
* **Sökvägens längd:** Hela sökvägen till filen (inklusive mapplänkar) får inte överstiga 400 tecken.

## 3. Återställ OneDrive (Reset OneDrive)

Om OneDrive fortfarande fastnar i *"Söker efter ändringar"* kan du göra en säker återställning utan att dina lokala filer raderas:

1. Tryck `Win + R` för att öppna dialogrutan Kör.
2. Klistra in följande kommando och tryck Enter:
   ```text
   %localappdata%\Microsoft\OneDrive\onedrive.exe /reset
   ```
3. Om kommandot anger att sökvägen inte hittas, testa istället:
   ```text
   C:\Program Files\Microsoft OneDrive\onedrive.exe /reset
   ```
4. OneDrive-ikonen kommer att försvinna tillfälligt och sedan starta om på nytt.

## Relaterade guider
* [Google-kontot är fullt – så frigör du lagringsutrymme](/artiklar/google-kontot-ar-fullt-sa-frigor-du-lagringsutrymme-i-gmail-drive-och-foto/)
* [Windows 11 är långsamt – 10 saker att kontrollera](/artiklar/windows-11-ar-langsomt-10-saker-att-kontrollera/)

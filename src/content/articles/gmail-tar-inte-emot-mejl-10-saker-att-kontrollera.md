---
title: "Gmail tar inte emot mejl – 10 saker att kontrollera"
description: "Felsökningsguide när inkommande e-post slutar komma fram till Gmail. Kontrollera lagring, skräppost, filter och domäninställningar."
author: "Aram Anwar"
publishedAt: "2026-09-19T10:00:00+02:00"
contentType: "fix"
topics: ["appar", "problem"]
tags: ["gmail", "google", "e-post", "lagring", "felsökning"]
heroImage: "/images/articles/gmail-tar-inte-emot-mejl-10-saker-att-kontrollera/gmail-tar-inte-emot-mejl-10-saker-att-kontrollera.webp"
heroImageAlt: "E-post och inbox på en bärbar dator"
heroImageCredit: "Foto: Unsplash"
heroImageSource: "https://unsplash.com/photos/person-checking-email-on-laptop-hP2M7M49sY"
sources:
  - name: "Google Gmail Help — Fix missing Gmail messages"
    url: "https://support.google.com/mail/answer/7015314"
---

När du slutar ta emot inkommande e-postmeddelanden i Gmail utan något uppenbart felmeddelande beror det i de allra flesta fall på fullt Google-lagringsutrymme, felkonfigurerade e-postfilter eller blockerade avsändare.

> ### Snabb lösning
> 1. Öppna [one.google.com](https://one.google.com) och kontrollera om ditt **Google-konto är fullt (15 GB)**. Om lagringsutrymmet är slut studsar all inkommande e-post tillbaka till avsändaren.
> 2. Sök efter meddelandet i sektionen **Alla mail (All Mail)** eller **Skräppost (Spam)**.

## 1. Google-kontots lagringsutrymme är fullt
Gmail delar ditt kostnadsfria lagringsutrymme på 15 GB med Google Drive och Google Foto. Om du har uppnått 100 % lagringsutnyttjande stoppas all e-postmottagning omedelbart.
* Läs vår kompletta guide om [hur du frigör utrymme i ditt Google-konto](/artiklar/google-kontot-ar-fullt-sa-frigor-du-lagringsutrymme-i-gmail-drive-och-foto/).

## 2. Kontrollera mappen Skräppost och Papperskorgen
Googles skräppostfilter uppdateras kontinuerligt. Ibland kan viktiga e-postmeddelanden från nya avsändare av misstag sorteras till *Skräppost* eller avsiktligt raderats till *Papperskorgen*.

## 3. Granska e-postfilter och vidarebefordran
Om du tidigare skapat regler i Gmail kan inkommande mejl arkiveras automatiskt utan att visas i inkorgen:

1. Öppna Gmail på en dator.
2. Klicka på **Kugghjulet (Inställningar) > Visa alla inställningar**.
3. Gå till fliken **Filter och blockerade adresser**. Se till att ingen regel automatiskt raderar eller arkiverar inkommande meddelanden.
4. Kontrollera fliken **Vidarebefordran och POP/IMAP** så att inkommande mejl inte vidarebefordras och raderas.

## 4. Synkronisering i mobilappen
Om du ser nya mejl i webbläsaren men inte i Gmail-appen i mobilen:

* Öppna **Inställningar > Appar > Gmail > Lagring och cache > Rensa cache**.
* Se till att **Synkronisera Gmail** är ikryssat under kontoinställningarna i appen.

## 5. Egen domän (Google Workspace / MX-poster)
Om du använder Gmail med en egen domänadress (t.ex. `namn@foretag.se`) och inte tar emot mejl beror det ofta på att domänens **MX-poster (Mail Exchange)** hos ditt webbhotell är felkonfigurerade eller har löpt ut.

## Relaterade artiklar
* [Google-kontot är fullt – så frigör du lagringsutrymme](/artiklar/google-kontot-ar-fullt-sa-frigor-du-lagringsutrymme-i-gmail-drive-och-foto/)
* [Google Drive laddar inte upp filer](/artiklar/google-drive-laddar-inte-upp-filer-vanliga-orsaker-och-losningar/)
* [En webbplats fungerar inte men andra gör det](/artiklar/en-webbplats-fungerar-inte-men-andra-gor-det-sa-felsoker-du/)

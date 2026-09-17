---
title: "Mikrofonen fungerar inte i Windows 11 – 9 saker att kontrollera"
description: "Felsök när mikrofonen vägrar ta upp ljud i Teams, Discord eller webbläsaren. Kontrollera sekretessinställningar, volym och drivrutiner."
author: "Aram Anwar"
publishedAt: "2026-09-17T15:00:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "mikrofon", "ljud", "teams", "discord"]
heroImage: "/images/mikrofonen-fungerar-inte-i-windows-11.svg"
heroImageAlt: "Illustration av mikrofoninställningar i Windows 11"
sources:
  - name: "Microsoft Support — Fix microphone problems in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-microphone-problems-in-windows-5f230348-106d-b87f-408d-a1e21e3b0193"
---

När andra deltagare i Teams, Zoom eller Discord inte kan höra dig i Windows 11 beror det oftast på att fel mikrofon är vald eller att Windows sekretessinställningar blockerar appar från att använda mikrofonen.

<div class="quick-fix-box">
  <h3>Snabb kontroll</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Kontrollera om ditt headset har en <strong>fysisk Mute-knapp</strong> på sladden eller kåpan.</li>
    <li>Gå till <strong>Inställningar > Integritet och säkerhet > Mikrofon</strong> och se till att mikrofonavläsning är aktiverad.</li>
    <li>Välj rätt mikrofon direkt i appens inställningar (t.ex. Discord/Teams).</li>
  </ol>
</div>

## 1. Tillåt appar att använda mikrofonen (Integritet)

Windows 11 har en inbyggd säkerhetsspärr som kan förhindra appar från att komma åt mikrofonen:

1. Öppna **Inställningar** (`Win + I`).
2. Gå till **Integritet och säkerhet > Mikrofon**.
3. Se till att **Mikrofonåtkomst** är slagen på.
4. Se även till att **Ge appar åtkomst till din mikrofon** och **Låt skrivbordsappar få åtkomst till mikrofonen** är aktiverade.

## 2. Testa ingångsvolymen i Windows 11

1. Gå till **Inställningar > System > Ljud**.
2. Under avsnittet *Inmatning*, välj din mikrofon.
3. Tala i mikrofonen och se om stapleindikatorn under **Testa din mikrofon** rör sig. Om den står helt stilla är mikrofonen antingen avstängd eller felaktigt ansluten.

## 3. Kontrollera appspecifika ljudinställningar

Många program som Discord, Microsoft Teams och Webex sparar egna enhetsval. Gå in i appens egna inställningar för *Ljud & Video* och ändra inmatningsenhet från *Standard* till namnet på ditt headset.

## Relaterade guider
* [Inget ljud i Windows 11](/artiklar/inget-ljud-i-windows-11-sa-felsoker-du-steg-for-steg/)
* [Bluetooth fungerar inte i Windows 11](/artiklar/bluetooth-fungerar-inte-i-windows-11-steg-for-steg/)

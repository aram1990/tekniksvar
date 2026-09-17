---
title: "Blåskärm i Windows 11 – vad du bör göra först"
description: "Felsökningsguide för blåskärm (BSOD / Blue Screen of Death) i Windows 11. Identifiera stoppkoder, säkra dina filer och lös drivrutinsfel."
author: "Aram Anwar"
publishedAt: "2026-09-17T11:50:00+02:00"
contentType: "fix"
topics: ["windows", "problem"]
tags: ["windows-11", "blaskarm", "bsod", "felsokning", "krasch"]
heroImage: "/images/blaskarm-i-windows-11.svg"
heroImageAlt: "Illustration av blåskärm (BSOD) i Windows 11"
sources:
  - name: "Microsoft Support — Troubleshoot blue screen errors"
    url: "https://support.microsoft.com/en-us/sitemaps/troubleshoot-blue-screen-errors-5c62726c-6489-5216-9722-0050212024e8"
---

En **blåskärm** (Blue Screen of Death / BSOD) inträffar när Windows 11 drabbas av ett så allvarligt hårdvaru- eller drivrutinsfel att systemet måste stängas av för att förhindra skador.

<div class="quick-fix-box">
  <h3>Säkra första åtgärder</h3>
  <ol style="margin-left: 1.25rem; font-size: 0.95rem;">
    <li>Fotografera eller skriv ned <strong>Stoppkoden</strong> (t.ex. <code>MEMORY_MANAGEMENT</code> eller <code>CRITICAL_PROCESS_DIED</code>).</li>
    <li>Koppla bort alla nyligen anslutna externa USB-enheter (förutom mus och tangentbord).</li>
    <li>Om datorn kraschar upprepade gånger, starta i <strong>Felsäkert läge</strong>.</li>
  </ol>
</div>

## 1. Vad betyder vanliga stoppkoder?

* **`DRIVER_IRQL_NOT_LESS_OR_EQUAL`:** En korrupt eller inkompatibel drivrutin (ofta för grafikkort eller nätverk) har kraschat.
* **`MEMORY_MANAGEMENT`:** Fel i datorns internminne (RAM) eller skadade filer i växlingsfilen.
* **`INACCESSIBLE_BOOT_DEVICE`:** Windows kan inte läsa från hårddisken där operativsystemet ligger.

## 2. Återställ nyligen installerade uppdateringar eller drivrutiner

Om blåskärmarna började efter en uppdatering:

1. Starta datorn i **Felsäkert läge**.
2. Gå till **Inställningar > Windows Update > Uppdateringshistorik**.
3. Klicka på **Avinstallera uppdateringar** och ta bort den senaste kvalitetsuppdateringen.

## 3. Kontrollera internminnet med Windows Minnesdiagnostik

Om du misstänker att RAM-minnet orsakar krascherna:

1. Tryck `Win + R`, skriv `mdsched.exe` och tryck Enter.
2. Välj **Starta om nu och söka efter problem**.
3. Datorn startar om och kör ett hårdvarutest av minneskretsarna.

## Relaterade guider
* [Så startar du Windows 11 i felsäkert läge](/artiklar/sa-startar-du-windows-11-i-felsakert-lage/)
* [Windows Update fastnar – så löser du vanliga uppdateringsproblem](/artiklar/windows-update-fastnar-sa-loser-du-vanliga-uppdateringsproblem/)

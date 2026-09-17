---
title: "Så stänger du av autostart-program i Windows 11"
description: "Lär dig hur du inaktiverar program som startar automatiskt i Windows 11 för att få en snabbare dator och kortare uppstartstid."
author: "Aram Anwar"
publishedAt: "2025-01-22"
contentType: "guide"
topics: ["windows", "guider"]
tags: ["windows-11", "autostart", "aktivitetshanteraren", "prestanda"]
sources:
  - name: "Microsoft Support — Change which apps run automatically at startup in Windows"
    url: "https://support.microsoft.com/en-us/windows/change-which-apps-run-automatically-at-startup-in-windows-10-150ce200-6105-a70f-8b55-b00d0725418a"
---

När du installerar nya program ställer många av dem automatiskt in sig på att starta varje gång du slår på datorn. Det kan snabbt göra uppstarten av Windows 11 trög och dra onödigt mycket internminne i bakgrunden.

## Metod 1: Via Aktivitetshanteraren (Rekommenderas)

Det smidigaste sättet att hantera autostart i Windows 11 är genom Aktivitetshanteraren.

1. Tryck `Ctrl + Shift + Esc` på tangentbordet för att öppna **Aktivitetshanteraren**.
2. Klicka på ikonen för **Autostart-appar** i vänstermenyn (ser ut som en mätare eller hastighetsmätare).
3. Du ser nu en lista över alla appar som kan starta med Windows.
4. Klicka på kolumnen **Status** eller **Startpåverkan** för att sortera listan.
5. Högerklicka på det program du vill stänga av och välj **Inaktivera**.

## Metod 2: Via Windows 11 Inställningar

Du kan också hantera autostartprogram direkt i systeminställningarna:

1. Öppna **Inställningar** (`Win + I`).
2. Klicka på **Appar** i vänstermenyn och välj **Autostart**.
3. Slå av strömbrytaren bredvid de program du inte vill ska starta automatiskt.

## Vilka program är säkra att inaktivera?

Du kan tryggt inaktivera vanliga appar som:
* **Spotify / Discord / Steam**
* **Microsoft Teams / Skype**
* **Adobe Creative Cloud / OneDrive** (om du inte behöver direkt synkning vid start)

**Saker du bör lämna aktiverade:**
* Realtek Audio / Ljudkontrollpaneler
* Windows Defender / Security Health Service
* Drivrutinsprogram för pekskärm eller pekplatta

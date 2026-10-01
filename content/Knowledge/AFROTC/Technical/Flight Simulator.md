---
title: Flight Sim
draft: false 
date: 09-24-2026
---
# Primer

Made this page so I could compile everything about I know about the Flight Simulator in the Detachment Building. This also doubles as a continuity document for when I eventually leave the Detachment, so there's that. Yes, I could've used word or google– but its my document, my prerogative.

# Ideas 

- Upgrading the storage of the PC, currently capped at 512GB and is the reason why we can't play War Thunder. 
- Upgrading the RAM

# Simulator Resources

## DCS 

- https://chucksguides.com/:  A detailed guide on various planes in DCS with illustrations. It's a heavy read. 
- https://www.digitalcombatsimulator.com/en/links/: The official website's collection of video tutorials, would highly recommend that you watch some of these over reading the highly technical guide. 


# Known Issues: 

## Jittering:

When running DCS on flat-screen, the camera jitters and moves without any mouse input. 

### Issue: When running DCS on flat-screen, the camera jitters and moves on its own. 

**Steps to resolve issue:** 
1. Disconnect the VR headset physically from the PC. 
2. Open Task Manager (Shortcut: 'CTRL'+'SHIFT'+'ESC')
3. End all 'OVR' processes
4. Open DCS

<img src="/images/Jittering_DCS.jpg" alt="Figure 1.1" width="500">

### Rationale: 
Even when user is running DCS on flat-screen and is not using the headset, it still feeds camera input to the system. We originally thought that the mouse was the root cause, but the issue persisted even after disconnecting the mouse– so the VR headset was the next component tested. If this solution is a fluke, then the issue lies with either the Physical Rig, or with the software itself– this being anywhere from the Rig drivers to the DCS configuration. 

**Tested this solution with a single flight, no jitters occurred any time during the flight– a possible indicator for success. More testing required.** 


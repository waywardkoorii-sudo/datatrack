==================================================
  DataTrack Pro
  Build v0.9
==================================================

OVERVIEW
--------
DataTrack Pro is a mobile-first tool for collecting behavioral
observation data in the field. It runs entirely in your browser as a
single page — no accounts, no setup, no internet connection required
once loaded. Pick a recording method, tap to log what you see, and
export clean, time-stamped data when you're done.

It's built for applied behavior analysis (ABA) work and supports the
recording methods you already use: interval recording, frequency
counts, and time sampling.


QUICK START
-----------
1. Open the DataTrack Pro HTML file in a modern browser
   (Chrome is recommended).
2. That's it — the app loads instantly and is ready to use.

For the best experience (including the keep-screen-awake feature),
serve the file over HTTPS or localhost rather than opening it directly
from your file system. Options include any simple local server such as
"npx serve", VS Code Live Server, or a basic Python HTTP server.

   Install link / hosted address: https://waywardkoorii-sudo.github.io/datatrack/

Tip: Visit Settings (the gear icon, top right) to set your alert
sound, vibration, screen flash, light/dark theme, and left- or
right-handed button layout.


FEATURES (CURRENT BUILD)
------------------------
Interval Recording tab
  - Partial Interval: log whether a behavior occurred at any point in
    the interval; keep tapping to count multiple occurrences.
  - Whole Interval: requires the behavior to be present for the entire
    interval to count as a "yes."
  - Momentary Time Sampling: spot-check Yes/No at each observation
    moment while a stopwatch tracks total duration.
  - Adjustable interval duration with audible, vibration, and visual
    end-of-interval alerts.

Timers tab
  - Add multiple countdown timers, each with its own correct/incorrect
    tap zones for frequency tracking.

Stopwatch tab
  - Add multiple stopwatches with correct/incorrect tap zones, lap
    markers, and per-lap response counts.

Summary tab
  - Every completed session is saved here automatically.
  - Tap any session to view a full breakdown, including per-interval
    and per-lap detail.
  - Export any session to CSV for analysis (formatted for scatter-plot
    and rate-of-response review).

Comfort & accessibility
  - Light and dark themes.
  - Left- and right-handed (southpaw) layouts.
  - Standardized HH:MM:SS time displays throughout.
  - Keep-screen-awake during active sessions (requires HTTPS/localhost).


UPCOMING FEATURES
-----------------
These are planned but not yet available in this build:
  - Installable smartphone app. The fastest planned path is a
    Progressive Web App (PWA) you can add to your home screen, with a
    packaged Android app considered for later.


FEATURES NOT YET FULLY IMPLEMENTED
----------------------------------
Please be aware of the following limitations in v0.9:
  - Saved sessions are not stored permanently. Session data lives only
    in the current browser tab. Closing or refreshing the page clears
    all saved summaries, so export anything you need to keep to CSV
    before you leave.
  - Settings are not remembered between visits. Your theme, handedness,
    and alert preferences reset each time the app is reopened.
  - Keep-screen-awake only works when the app is served over HTTPS or
    localhost. It will not activate when the file is opened directly
    from your device's file system.


TROUBLESHOOTING / SUPPORT
-------------------------
  - Screen keeps turning off during a session: make sure the app is
    being served over HTTPS or localhost (see Quick Start).
  - Lost session data after closing the tab: this is expected in the
    current build — export to CSV before closing (see above).
  - For the most reliable experience, use a recent version of Chrome.

   Support contact: waywardkoorii@gmail.com


----------------------------------------------------------------------
Thanks for using DataTrack Pro. This is an early build (v0.9), and
your data collection comes first — when in doubt, export your session
before closing the app.
----------------------------------------------------------------------

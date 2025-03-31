# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

Light to Dark mode switch:
https://www.youtube.com/watch?v=S-T9XoCMwt4&ab_channel=RedStapler
I used this video for inspiration to make the switch to change the theme of the page. 
For now the switch will only be on the gallery page, however I did the styling in the styles.css so it can be added on every page if wanted later on.

A user would want to be able to use keyboard navigation to switch the theme from dark to light and vice versa. 

The `<input type="checkbox">` remains focusable because it's only visually hidden `opacity: 0;` instead of `display: none;` or `visibility: hidden;`
The `input:focus + label` rule adds an orange outline, ensuring users can see which element is focused when navigating with the keyboard.

progressive enhancement: 
The checkbox works by default with standard HTML, if styles or JavaScript fail to load, the checkbox is still usable.
The switch only visually replaces the checkbox but keeps the same functionality.


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

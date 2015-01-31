# How to build a BEMO theme?

I'm just leraning! Here some notes on my progress, this is not an how-to

# Goal

Build a Material Design CSS theme for BEMO

* I like Material [Design CSS project](http://materializecss.com/)
* I love [BEMO](https://github.com/cantierecreativo/bemo) as sass bootsrap (filesystem structure and BEM naming convention)
* I dont't like the way MD classes are written

# Why a theme

BEMO is growing up. I don't want to split the project. A theme should permit to update BEMO behind the scene.

# Possible troubles

* BEMO is not build to support themes.
* MD uses lot of JS scripts: are they linked to class names?
* If I'll be good enough to build the theme, how can it be install next to the standard BEMO?
* I would like to use BEMO's variables / mixins etc. and override my stuff only. Override attributes could be a pain in many cases...  

# Possibile solutions

* I'll just create HTML snippets to test classes and block to reproduce the styles. For the moment, I don't care of JS. Take it easy.
* I'll start with overrides... let's see how difficult it could be
* Mixins and functions are not a problem
* Variables might be defined for the theme... how?
* need to find MD font and icons...

# Let's start

I'm going to write down my progress. Good or bad, it doesn't matter!

* colors: MD usa una mappatura prticolare per definire i colori. Crea anche delle classi per definire color e bg-color. I colori hanno fino a 5 versioni di gradiente in chiaro e scuro. Sarebbe interessante riportarli tutti ma al momento prendo  solo i colori base.
* reported some horrible mixins to manage box shadows.
* no bourbon/compass, ho fatto animazioni con un mixin temporaneo
* creato blocco badge
* creato blocco bottoni normali. Finora usare l'override non mi ha creato problemi
* ho dovuto creare un file base per il tema
* ho dovuto fare degli import in applicatino sass in punti differenti. questo vorrei cambiarlo ma dubito si possa.




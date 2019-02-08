# BH CSS Library
This is my personal CSS framework. It mixes atomic and component-based CSS framework principles, using a core, minimal set of CSS functions and utilities which are then intended for use with unique components/patterns to custom tailor the framework to any project.

Here is an overview of organization and best practices for the various tools:

## Base
This is where all default styling components are kept. Values in the `_defaults` and `_variables` can be tweaked for easy customization.

#### Note about mixins:
I don't have a dedicated `_mixins` file. I don't really like mixins. They're handy, sure, but too often they turn into 'Hey, look how cool, elaborate, and unreadable of a mixin I can make.' And then they're used like once.


## Utilities
These are simplistic utility classes, typically used to handle one CSS rule. (Although there are some exceptions -- `m-x-auto` technically has two rules, but it's simple enough to be considered a utility.)

These are the starting 'building blocks' for designing. If things start getting more elaborate and/or you find yourself reusing a set pattern of utilites quite often, it might be time to create a custom `_component`

Note: All utilities should use the `!IMPORTANT` declaration, as these rules should take priority over others.


## Functions
These are basically more complex utilities, only for cases where merely having individual CSS rules per class will not suffice, and you're not dealing with a fully-built and modular component.

A good example is a grid system. There are numerous classes and rules that need to be applied, so it's more than a utility, but it also can't be a standalone and fleshed-out component on its own, so it's not a component, either.

#### Note about the grid system
The grid system was created using https://grid-wiz.now.sh/ with syntax that is based on bootstrap grid. Yes, this is a syntactical anomaly versus the rest of the framework. But it's a good grid. So good, in fact, that if you're not using it, everyone else you're working with will ask 'Why don't we just use bootstrap?' when really it's such a good and simple grid system that people are willing to put up with the rest of it.


## Custom Components
These are fully built out and designed components which, ideally, are intended to be reused at some point. The complexity of a component is likely such that the HTML would be a bloated mess if only utilities were used to hack it together. And also, it would simply be unrealistic to expect that a single CSS framework can handle everything without any custom code. So this is where custom things go.

Note: All components use the naming convention of capitalizing the first letter and also using BEM notation.

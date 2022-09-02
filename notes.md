

# What are the main parts of a component?

## Core

This is the component at its absolute most basic. What is it when its stripped of everything? For example, what is a button at its core? It's something you click on. What is a link at its core? It's something you click on. While both are something you click on, their purposes are different.

## Functionality

What does the component _do_? This comes second in order since semantics and styling are almost always determined by the component's purpose.

## Styling

This comes before semantics solely because the semantics may change when the styling does not. For example, what might be used as a list item in a list may also be used in some cases to represent data _outside_ of a list. In one case, it's an `li` tag. In others it is not. The styling stays the same, however. Semantics for a component may change when the styling does not.

## Semantics

What are the semantics of the component? Is it a list item? Is it just arbitrary lines to help visually separate things on the page? Is an ordered list or an unordered list? Etc.

# What are the most basic components of a web page?

- Text
- Image
- Container (elements used solely for layout)
- Click Affordance (elements that perform a function when clicked (excluding form elements))
- Input

All other elements (nav, div, ul, li, etc.) can be classified as one of these.


# Multi-Library

A core idea is that a component library for a company or website should be separated into multiple libraries (via packages or just via directory - whatever works best):

## Library 1: Base Components

These are the absolute basic components described above. No styling and very basic semantics. No theming system.

## Library 2: Theming System

This library uses the components from Library 1 and applies a theme _system_ to them. This does not apply a particular theme. The system may include basic styling for defaults, but should focus primarily on applying a theme _system_ by which the components can be themed.

## Library 3: Styled & Composite Components

Applies Library 2 to compile a library of functional, themed components to be on the site.


# Functionality Wrapper Components

- Linkable (adds link properties)
- Analytics
- DebouncedClick
- ThrottledClick
- IntersectionObserverTrigger (triggers callback when it leaves or enters the page)
- KeyboardInteraction (for handling key presses like ESC)

# Style Wrapper Components

- InteractionStyling (hover, active, focus, disabled styling for ClickAffordance components)
- MarginBox (takes numbers for margin)
- PaddingBox (takes padding for margin)
- StickyContainer
- FixedContainer
- Bleed
- DisabledElement?
- ColoredText?
- ZIndexLayer? (or something like this to help handle z-index)

# Semantic Wrapper Components

These exist so native styling can be removed and new styles added easily.
In practice, these should have no contents by default and must receive children.

- List
- ListItem
- Nav
- Overlay
- H1 - H6
- Summary / Details
- MenuItem (which is just a list item with role="menuitem")
etc.

# Composable CSS Classes

- onHover
- onActive
- onFocus
- disabled

# Second Library build on Base Library 

These are components built from the base components. These would go in a separate library using the base library.

- Button
  - ClickAffordance, custom styles
- ClickToCopy
  - DebouncedClick, Button (any)
- Card
  - ClickAffordance (maybe), MarginBox, custom styles
- Row
  - MarginBox
- Grid
  - ???
- Cell
  - MarginBox
- LayoutBand
  - MarginBox
- StickyHeader
  - StickyContainer, MarginBox


# UNANSWERED QUESTIONS
- Should simple CSS things be component? Or some kind CSS class composition system?
  - Probably CSS composition, so we don't have React deal with it
  - CSS Composition would probably be simpler
  - Some style components should exist, like StickyContainer, but not super simple ones for things like hover styles


# Elements that I should probably add
- table (and its subcomponents)
- menu (its the same as ul)
- picture

# Elements with native styling that I might add
- hr
- fieldset
- legend

# Elements I probably won't add because they are almost never used
- dl, dt, and dd (definition list)
- blockquote
- address

# Elements that don't need to be in these libraries but devs should use still:
- nav
- section
- article
- header
- footer
- main
- aside

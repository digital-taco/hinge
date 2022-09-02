# Purpose

The purpose of this repository is to work as a base library for any given React component library. It will provide the tools needed to build your own React component library with relative easy. It will include a set of basic components and a configurable theming system.


# Theming System

The theming system is built around CSS variables that affect global values used by the base components and CSS classes to determine their output.

## CSS Variable Prefixes

NOTE: this is definitely going to change

## --global-*

These are global values and modifiers. These are used by all other variables when determining their values.

## --interactive-*

Affects only interactive styling. This affecst elements such as buttons and clickable list-items.

## --text-*

Affects text styling only. Note that this overlaps with some of the other prefixes, such as the `--interactive-*` variables.

## --padding-* OR --margin-* OR --spacing-*

TBD



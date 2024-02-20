# Multi-Level Menu Component

| Prop            | Default | Required | Type                                                                                                                                                              |
|:----------------|:-------:|:--------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| items           |         |   true   | <code>MenuItemProps[]</code><br/>Array of menu items                                                                                                              |
| appendTo	       | "body"  |  false   | <code>string</code><br/>The element where the menu will be added during rendering                                                                                 |
| anchor          | [0, 1]  |  false   | <code>[number, number]</code><br/>Two values setting the starting position or anchor point of the menu relative to its target                                     |
| offset          | [0, 0]  |  false   | <code>[number, number]</code><br/>An array of two numbers to offset the menu horizontally and vertically in pixels                                                |
| behavior        | "click" |  false   | <code>"click" \| "hover"</code><br/>Specifies exactly how the menu will open, either by click or on hover                                                         |
| customClassName |         |  false   | <code>string</code><br/>Additional class name for customizing menus with custom styles. When rendering the menu uses Teleport, that's why this property was added |
| context         |         |  false   | <code>boolean</code><br/>Defines the context menu display mode                                                                                                    |

# MenuItem Component

| Prop            | Default | Required | Type                                                                                                  |
|:----------------|:-------:|:--------:|:------------------------------------------------------------------------------------------------------|
| icon            |         |  false   | <code>ComponentInternalInstance</code><br/>Adds an icon before the menu item label.                   |
| label           |         |  false   | <code>string \| number</code><br/>Menu item label                                                     |
| items           |         |  false   | <code>MenuItemProps[]</code><br/>An array of settings for creating submenus.                          |
| style           |         |  false   | <code>StyleValue</code><br/>Defining styles for menu item formatting                                  |
| shortcut        |         |  false   | <code>string</code><br/>Hotkey indicator. The indicator is inserted after the menu item label         |
| component       |         |  false   | <code>ComponentInternalInstance</code><br/>Instead of a standard menu item, you can add any component |
| separator       |         |  false   | <code>boolean</code><br/>Instead of a menu item there will be a separator                             |
| command         |         |  false   | <code>function</code><br/>Handler called when a menu item is clicked                                  |
| stopPropagation |         |  false   | <code>boolean</code><br/>stopPropagation                                                              |

# Examples

## Simple menu

```
const items = [{
        label: 'Upload from computer',
    }, {
        label: 'Search the web',
    }, {
        separator: true,
    }, {
        label: 'Drive',
    }, {
        label: 'Photos',
    }, {
        label: 'Bu URL',
    }, {
        label: 'Camera',
    }];
```

```
<template>
  <div>
    <Menu :items="items"/>
  </div>
</template>
```
# Mnemonics for CSS Shortcuts

## The Background Shortcut

**Acronym:** CIRAP / S

**Mnemonic:** “Coding is really a pleasure / sometimes”

**Stands for...** `background-color background-image background-repeat background-attachment background-position / background-size`

**Example:**

```css
background: white url('bg.png') no-repeat fixed 0 0 / 500px 500px;
```

## The Font Shortcut

**Acronym:** SVWSLF

**Mnemonic:** “Sexy vegan woman seeks large fatboy”

**Stands for...** `font-style font-variant font-weight font-size / line-height font-family`
(or, you can replace all of the above with `caption`, `icon`, `menu`, `message-box`, `small-caption`, `status-bar`)

**Example:**

```css
font: italic small-caps bold 1.2em / 1.8 Arial, Helvetica, sans-serif;
```

## Anchors (links)

**Acronym**: LVFHA

**Mnemonic**: “Lord vader former handle Anakin”

**Stands for...** `:link :visited :focus :hover :active`

**Example:**

```css
a:link {
   color: red;
   text-decoration: none;
}

a:visited {
   color: white;
}

a:focus {
   color: blue;
}

a:hover {
   color: purple;
}

a:active {
   color: orange;
}
```

## The CSS Box Model

**Acronmym:** MBPC

**Mnemonic:** “MacBook Pro computer” or “My boss pays checks”

**Stands for...** `margin border padding (content)`

***Note***: although `content` is a property in CSS, the reference above refers to content in general; that is, to text or multi-media content.

**Example:**

```css
p {
   margin: 8px;
   border: 0;
   padding: 0;
}
```

## Margin and Padding

**Acronym:** TRBL

**Mnemonic:** “TRouBLe” or “TReBLe”

**Stands for...** `margin-top margin-right margin-bottom margin-left`

**Example:**

```css
margin: 4px 10px 12px 20px;
```

## Borders

**Acronym:** WSC

**Mnemonic:** “We’re so cool”

**Stands for...** `border-width border-style border-color`

**Example:**

```css
border: 3px double red;
```

Any ideas for better mnemonics? Send suggestions to `roy@thecodeeducators.com`.

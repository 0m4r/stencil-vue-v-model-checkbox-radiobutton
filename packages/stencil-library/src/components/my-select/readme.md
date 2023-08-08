# my-select



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                       | Type            | Default     |
| -------- | --------- | ------------------------------------------------- | --------------- | ----------- |
| `mode`   | `mode`    | The mode determines which platform styles to use. | `"ios" \| "md"` | `undefined` |
| `type`   | `type`    | The value of the input.                           | `string`        | `'text'`    |
| `value`  | `value`   | The value of the input.                           | `string`        | `''`        |


## Events

| Event      | Description                             | Type                                  |
| ---------- | --------------------------------------- | ------------------------------------- |
| `myBlur`   | Emitted when the input loses focus.     | `CustomEvent<void>`                   |
| `myChange` | Emitted when the value has changed.     | `CustomEvent<InputChangeEventDetail>` |
| `myFocus`  | Emitted when the input has focus.       | `CustomEvent<void>`                   |
| `myInput`  | Emitted when a keyboard input occurred. | `CustomEvent<KeyboardEvent>`          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

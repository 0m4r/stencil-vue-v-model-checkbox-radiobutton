import { Component, ComponentInterface, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'my-select',
  scoped: true,
})
export class Input implements ComponentInterface {
  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: HTMLSelectElement['value'] = '';

  /**
   * The value of the input.
   */
  @Prop() type?: HTMLSelectElement['type'] = 'text';

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    this.myChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() myInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() myChange!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() myBlur!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event() myFocus!: EventEmitter<void>;

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLSelectElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.myInput.emit(ev as KeyboardEvent);
  };

  render() {
    return (
      <select class="native-input" onInput={this.onInput}>
        {['NONE', 1, 2, 3, 4, 5, 6].map(option => (
          <option value={option} selected={String(option) === this.value}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

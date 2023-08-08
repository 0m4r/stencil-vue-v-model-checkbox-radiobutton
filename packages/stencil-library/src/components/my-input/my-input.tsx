import { Component, ComponentInterface,
   Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}

@Component({
  tag: 'my-input',
  scoped: true,
})
export class Input implements ComponentInterface {
  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: HTMLInputElement['value'] = '';

  /**
   * The value of the input.
   */
  @Prop() type?: HTMLInputElement['type'] = 'text';

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

  private getValue(): string {
    return typeof this.value === 'number' ? this.value : (this.value || '').toString();
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.myInput.emit(ev as KeyboardEvent);
  };

  render() {
    const value = this.getValue();

    return <input class="native-input" type={this.type} value={value} onInput={this.onInput} />;
  }
}

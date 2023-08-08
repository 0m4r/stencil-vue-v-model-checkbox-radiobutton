import { Component, ComponentInterface, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

export interface CheckboxChangeEventDetail {
  checked: HTMLInputElement['checked'];
}

@Component({
  tag: 'my-checkbox',
  scoped: true,
})
export class Input implements ComponentInterface {
  private inputId = `my-checkbox-${inputIds++}`;

  @Prop() value?: HTMLInputElement['value'] = '';

  @Prop() type?: HTMLInputElement['type'] = 'text';

  @Prop({ mutable: true }) checked?: boolean = false;
  @Watch('checked')
  protected valueChanged() {
    this.myChange.emit({ checked: this.checked });
  }

  @Event() myChange!: EventEmitter<CheckboxChangeEventDetail>;

  private getValue(): string {
    return typeof this.value === 'number' ? this.value : (this.value || '').toString();
  }

  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';

    return <input class="native-input" aria-labelledby={labelId} type="checkbox" value={value} checked={this.checked} />;
  }
}

let inputIds = 0;

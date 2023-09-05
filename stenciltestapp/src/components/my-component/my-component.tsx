import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
// @ts-ignore
import { LocalizeBehavior } from '../../../../../gdp-ui-commons';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    // @ts-ignore
    const testLocalize = new LocalizeBehavior();
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}

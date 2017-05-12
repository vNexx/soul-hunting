import * as React from 'react';

export class TableElement extends React.Component<any, void> {
  render() {
    return (
      <td>
        { this.props.item }
      </td>
    );
  }
}

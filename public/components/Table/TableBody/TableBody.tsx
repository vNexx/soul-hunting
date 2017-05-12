import * as React from 'react';

export class TableBody extends React.Component<any, void> {
  render() {
    return (
      <tbody>
        { this.props.content }
      </tbody>
    );
  }
}

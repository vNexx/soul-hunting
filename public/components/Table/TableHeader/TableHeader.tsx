import * as React from 'react';
import {TableRow} from '../TableRow/TableRow';

export class TableHeader extends React.Component<any, void> {
  render() {
    const header = this.props.header.map((item: any, index: number) => {
      return (
        <th key={ index }>
          { item.title }
        </th>
      );
    });

    return (
      <thead>
        <TableRow>
          { header }
        </TableRow>
      </thead>
    );
  }
}

import * as React from 'react';
import {Link} from 'react-router'

import {TableBase} from './TableBase/TableBase';
import {TableHeader} from './TableHeader/TableHeader';
import {TableContent} from './TableContent/TableContent';

import './Table.scss';

interface Props {
  header: Array<any>;
  content?: Array<any>;
}

export class Table extends React.Component<Props, void> {
  render() {
    return (
      <TableBase>
        <TableHeader header={ this.props.header } />
        <TableContent content={ this.props.content } />
      </TableBase>
    );
  }
}

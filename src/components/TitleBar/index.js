import React, { Component } from 'react';
import { FormattedMessage } from 'umi/locale';
import styles from './index.less';

export default class TitleBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>
          <FormattedMessage id="title.name" />
        </h1>
        <p>
          <FormattedMessage id="titleBar.desc" />
        </p>
      </div>
    );
  }
}

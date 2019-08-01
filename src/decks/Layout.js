/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';

import './styles.css';

const Layout = () => {
  const temp = [1, 2, 4];
  return (
    <div className="wrapper container">
      {/* <div className="box header">Header</div> */}
      <div className="box sidebar">Sidebar</div>
      {/* <div className="box sidebar2">Sidebar 2</div> */}
      <div className="box content">
        Content
        <br />
        {' '}
More content than we had before so this column is now quite tall. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Voluptatem in, exercitationem expedita reprehenderit
        dolorum ipsum molestias molestiae earum quibusdam cupiditate ipsam quod omnis nobis, hic
        odit ab necessitatibus perspiciatis adipisci neque atque, architecto doloremque. Ratione
        voluptatibus officiis ab, quae ipsa doloremque eligendi neque natus voluptas fuga aliquid
        sed quia aspernatur corrupti quaerat non itaque vitae dolorem laborum deserunt animi
        doloribus amet. Quas dolor, minima dignissimos, soluta illo eum error fuga quam sint
        mollitia accusamus quia incidunt ea ex nostrum omnis earum commodi labore! Quia excepturi
        quas aspernatur quidem voluptate cumque perspiciatis incidunt vitae, alias esse recusandae,
        ratione facilis! Delectus mollitia in ea eaque explicabo, laudantium repellendus itaque
      </div>
      <div className="box footer">Footer</div>
    </div>
  );
};

export default Layout;

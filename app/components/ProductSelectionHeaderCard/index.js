/**
*
* EditQuoteHeaderCard
*
*/

import React from 'react';
// import styled from 'styled-components';
// import { Glyphicon } from 'react-bootstrap/lib';

class ProductSelectionHeaderCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <div className="card-icon"><Glyphicon className="cartIcon" glyph="barcode" /></div> */}
        <div className="topPadding">
          <div>
            <div className="cartFont" >Add Products</div>
          </div>
        </div>
      </div>
    );
  }
}

ProductSelectionHeaderCard.propTypes = {

};

export default ProductSelectionHeaderCard;

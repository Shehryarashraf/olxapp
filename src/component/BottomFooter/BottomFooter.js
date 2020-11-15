import React from 'react';

class BottomFooter extends React.Component{
    render(){
        return(
            <div class="Bottom">
                  <section class="BFooter-left">
                      Other Countries
                      <label class="clink" style={{paddingLeft: "10px"}}><a href="https://www.olx.in/" target="_blank">India -</a></label>
                      <label class="clink"><a href="https://www.olx.co.za/" target="_blank">South Africa -</a></label>
                      <label class="clink"><a href="https://www.olx.co.id/" target="_blank">Indonesia</a></label>
                  </section>
                  <section class="BFooter-right">
                      Free Classifieds in Pakistan
                      <label style={{fontWeight: "lighter"}}> . © 2006-2020 OLX </label>
                  </section>
            </div>
        )
    }
}






export default BottomFooter;
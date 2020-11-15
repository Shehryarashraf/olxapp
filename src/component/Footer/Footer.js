import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF);
library.add(faTwitter);
library.add(faYoutube);
library.add(faInstagram);

class Footer extends React.Component {
  render() {
    return (
      <div class="footer-distributed">
        <div class="row">
          <div class="col-lg-2.4 col-md-6 col-12">
            <section class="footer-left">
              Popular Categories
              <p class="footer-links">
                <h5>
                  <a href="https://www.olx.com.pk/cars_c84">Cars</a>
                </h5>

                <h5>
                  <a href="https://www.olx.com.pk/apartments-flats_c1723">
                    Flats for rent
                  </a>
                </h5>

                <h5>
                  <a href="https://www.olx.com.pk/jobs_c4">Jobs</a>
                </h5>

                <h5>
                  <a href="https://www.olx.com.pk/mobile-phones_c1453">
                    Mobile Phones
                  </a>
                </h5>
              </p>
            </section>
          </div>

          <div class="col-lg-2.4 col-md-6 col-12">
            <section class="footer-left">
              TRENDING SEARCHES
              <p class="footer-links">
                <h5>
                  <a href="https://www.olx.com.pk/motorcycles_c81">Bikes</a>
                </h5>

                <h5>
                  <a href="https://www.olx.com.pk/watches_c1970">Watches</a>
                </h5>

                <h5>
                  <a href="https://www.olx.com.pk/items/q-books">Books</a>
                </h5>

                <h5>
                  <a href="https://www.olx.com.pk/items/q-dogs">Dogs</a>
                </h5>
              </p>
            </section>
          </div>

          <div class="col-lg-2.4 col-md-6 col-12">
            <section class="footer-left">
              ABOUT US
              <p class="footer-links">
                <h5>
                  <a href="https://www.olxgroup.com/" target="_blank">
                    About OLX Group
                  </a>
                </h5>

                <h5>
                  <a href="https://blog.olx.com.pk/" target="_blank">
                    OLX Blog
                  </a>
                </h5>

                <h5>
                  <a
                    href="https://help.olx.com.pk/hc/en-us/requests/new?ticket_form_id=29191"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </h5>

                <h5>
                  <a
                    href="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website"
                    target="_blank"
                  >
                    OLX for Businesses
                  </a>
                </h5>
              </p>
            </section>
          </div>

          <div class="col-lg-2.4 col-md-6 col-12">
            <section class="footer-left">
              OLX
              <p class="footer-links">
                <h5>
                  <a href="https://help.olx.com.pk/hc/en-us" target="_blank">
                    Help
                  </a>
                </h5>

                <h5>
                  <a
                    href="https://www.olx.com.pk/sitemap/most-popular"
                    target="_blank"
                  >
                    Sitemap
                  </a>
                </h5>

                <h5>
                  <a
                    href="https://help.olx.com.pk/hc/en-us/categories/360000044302-Legal-Privacy-information"
                    target="_blank"
                  >
                    Legal & Privacy information
                  </a>
                </h5>
              </p>
            </section>
          </div>
          <div class="col-lg-2.4 col-md-6 col-12">
            <section class="footer-left">
              FOLLOW US
              <p class="footer-links" style={{ marginTop: "20px" }}>
                <a href="https://www.facebook.com/olxpakistan" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com/OLX_Pakistan" target="_blank">
                  <FontAwesomeIcon id="twitter" icon={faTwitter} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"
                  target="_blank"
                >
                  <FontAwesomeIcon id="youtube" icon={faYoutube} />
                </a>
                <a
                  href="https://www.instagram.com/olx.pakistan/"
                  target="_blank"
                >
                  <FontAwesomeIcon id="insta" icon={faInstagram} />
                </a>
              </p>
              <p class="app-links">
                <a
                  href="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8 "
                  target="_blank"
                >
                  <img
                    src="https://statics.olx.com.pk/external/base/img/appstore.png"
                    alt="Download olx in playstore"
                    width="80"
                    height="25"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.olx.pk"
                  target="_blank"
                >
                  <img
                    style={{ paddingLeft: "10px" }}
                    src="https://statics.olx.com.pk/external/base/img/playstore.png"
                    alt="Download OLX for iOS in the Apple App Store"
                    width="80"
                    height="25"
                  />
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

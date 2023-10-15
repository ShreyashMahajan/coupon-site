/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Toast,
    ToastBody
  } from "reactstrap";
  // core components
  import UserHeader from "components/Headers/UserHeader.js";
import QrCodeUploader from "components/QrUploader/qrCodeUploader";
import ToastAction from "components/Toast/toast";
import MobileQrScanner from "components/MobileQrScanner/mobileQrScanner";
  
  const Profile = () => {
    const onClickScan = () => {

    }
    return (
      <>
        <div
        className="header pb-8 pt-5 pt-lg-8 d-flex"
        style={{
          minHeight: "600px",
          // backgroundImage:
          //   "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex" fluid>
          <Row>
            <Col>
              <h3 className="display-3 text-white">Coupon Redemption</h3>
              <p className="text-white mt-0 mb-5">
               Redeem Your Coupons Here
              </p>
              <QrCodeUploader />
              <MobileQrScanner />
            </Col>
          </Row>
        </Container>
      </div>
      </>
    );
  };
  
  export default Profile;
  
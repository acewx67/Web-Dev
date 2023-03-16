import styles from "@/styles/Rectangle5648.module.css";
import Image from "next/image";
import React from "react";
import { Row, Col, Space, Form, Input, Checkbox, Button, Divider } from "antd";

function Rectangle5648() {
  return (
    <Row>
      <Col xs={24} md={12} className="xyz">
        <div className={styles.left}>
          <div className={styles.text}>
            Boost your online presence with Listing Local&apos;s SEO platform
            <div className={styles.subText}>
              Try ListingLocal today and take the first step towards growing
              your business
            </div>
          </div>
          <Image
            className={styles.group26859}
            src="/Group 26859.png"
            height={337.39}
            width={543}
            alt="group26859"
          />
        </div>
      </Col>
      <Col xs={24} md={12} align="middle">
        <div className={styles.right_div}>
          <Image
            className={styles.logo}
            src={"/mainLogo.png"}
            width={200}
            height={40}
            alt="logo"
          />
          <div className={styles.login}>Login to your account</div>

          <Form>
            <div className={styles.emailLabel}>Email</div>
            <Input
              className={styles.email}
              type="text"
              name="email"
              placeholder="Enter your email address"
            ></Input>
            <div className={styles.passwordLabel}>Password</div>
            <Input
              className={styles.password}
              type="password"
              name="password"
              placeholder="Enter password"
            ></Input>
            <Row justify={"space-between"}>
              <Row gap={5}>
                <Checkbox className={styles.checkbox}/>
                <label>Remember me</label>
              </Row>
              <Button type="link">Forgot Password?</Button>
            </Row>
            <Row justify="center">
              <Button className={styles.loginButton} size="large">
                LOGIN
              </Button>
              <Divider className={styles.divider}>
                OR LOGIN WITH GOOGLE ACCOUNT
              </Divider>
              <div className={styles.googleLoginButton}>
                <Image
                  className={styles.googleLogin}
                  src="/Frame 1428570.png"
                  alt="googleLogin"
                  width={500}
                  height={40}
                />
              </div>

              <div>
                <div className={styles.signupMsg}>
                  Don&apos;t have an account?
                  <Button type="link" className={styles.signup}>
                    SIGN UP
                  </Button>
                </div>
              </div>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default Rectangle5648;

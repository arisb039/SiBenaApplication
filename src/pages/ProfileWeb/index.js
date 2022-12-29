import React from "react";

import { Column, Row, Img, Text, Button, Input, Line } from "components";
import { useNavigate } from "react-router-dom";

const ProfileWebPage = () => {
  const navigate = useNavigate();

  function handleNavigate25() {
    navigate("/loginpage");
  }
  function handleNavigate30() {
    navigate("/mapweb");
  }
  function handleNavigate31() {
    navigate("/helpweb");
  }
  function handleNavigate32() {
    navigate("/mapweb");
  }
  function handleNavigate33() {
    navigate("/settingsweb");
  }
  function handleNavigate37() {
    navigate("/mainweb");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-plusjakartasans items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1165px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] pr-[1px] py-[1px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_sibenalogoapp.png"
              className="common-pointer max-w-[100%] mt-[3px] w-[7%]"
              onClick={handleNavigate37}
              alt="SiBenaLogoApp"
            />
            <Img
              src="images/img_map.svg"
              className="common-pointer sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:ml-[474px] md:ml-[612px] ml-[890px] sm:w-[11px] md:w-[15px] w-[22px]"
              onClick={handleNavigate30}
              alt="map"
            />
            <Img
              src="images/img_notification.svg"
              className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[13px] md:w-[17px] w-[25px]"
              alt="notification"
            />
            <Img
              src="images/img_settings_17X17.svg"
              className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[13px] md:w-[17px] w-[25px]"
              alt="settings"
            />
            <Img
              src="images/img_ellipse6.png"
              className="sm:h-[20px] md:h-[25px] h-[36px] sm:ml-[12px] md:ml-[16px] ml-[24px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
              alt="EllipseSix"
            />
          </Row>
          <Column className="flex flex-col justify-start w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1079px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="bg-gray_51 flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[26%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                  <Img
                    src="images/img_home.svg"
                    className="flex-shrink-0 max-w-[100%] w-[18%]"
                    alt="home"
                  />
                  <Text
                    className="flex-grow font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_901"
                    variant="body6"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:ml-[4px] ml-[7px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Text
                    className="ml-[2px] text-gray_500 tracking-ls11 uppercase w-[auto]"
                    variant="body7"
                  >
                    Menu Lain
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[2px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Img
                      src="images/img_user.svg"
                      className="flex-shrink-0 max-w-[100%] w-[24%]"
                      alt="user"
                    />
                    <Text
                      className="flex-grow font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[2px] text-gray_800"
                      variant="body6"
                    >
                      Profil
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                    <Img
                      src="images/img_map.svg"
                      className="common-pointer max-w-[100%] mt-[1px] w-[9%]"
                      onClick={handleNavigate32}
                      alt="map One"
                    />
                    <Text
                      className="font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_800 w-[auto]"
                      variant="body6"
                    >
                      Navigasi
                    </Text>
                    <Button className="cursor-pointer font-medium min-w-[20%] sm:ml-[43px] md:ml-[55px] ml-[81px] text-[10px] text-center text-indigo_A400 tracking-ls11 uppercase w-[max-content]">
                      NEW
                    </Button>
                  </Row>
                </Column>
                <Column className="flex flex-col justify-start sm:mb-[421px] md:mb-[545px] mb-[792px] md:ml-[4px] ml-[7px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                    <Img
                      src="images/img_settings_1.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[12px] h-[17px] max-w-[100%] mb-[2px] md:w-[11px] w-[17px] sm:w-[9px]"
                      alt="settings One"
                    />
                    <Text
                      className="common-pointer flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_800"
                      variant="body6"
                      onClick={handleNavigate33}
                    >
                      Pengaturan Akun
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]"
                    onClick={handleNavigate25}
                  >
                    <Img
                      src="images/img_question.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[12px] h-[17px] max-w-[100%] mb-[2px] md:w-[11px] w-[17px] sm:w-[9px]"
                      alt="question"
                    />
                    <Text
                      className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_800"
                      variant="body6"
                    >
                      Logout
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col font-opensans items-center justify-start md:ml-[249px] ml-[362px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                <Text
                  className="font-normal not-italic text-gray_800 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Profil
                </Text>
                <Img
                  src="images/img_ellipse6.png"
                  className="md:h-[100px] h-[144px] sm:h-[77px] sm:mt-[19px] md:mt-[24px] mt-[36px] rounded-radius50 w-[144px] sm:w-[76px] md:w-[99px]"
                  alt="EllipseSix One"
                />
                <Text
                  className="font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-gray_800 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Ganti Gambar Profil
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body5"
                    >
                      Nama
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_502 text-bluegray_502 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      wrapClassName="sm:mx-[0] sm:w-[100%] w-[71%]"
                      name="AutoLayoutHor"
                      placeholder="Raden Mas"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineGray301"
                    ></Input>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body5"
                    >
                      Nomor Telepon
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_502 text-bluegray_502 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      wrapClassName="sm:mx-[0] sm:w-[100%] w-[71%]"
                      type="number"
                      name="AutoLayoutHor One"
                      placeholder="081234567890"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineGray301"
                    ></Input>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_800 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body5"
                    >
                      Kata Sandi
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_502 text-bluegray_502 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[71%]"
                      type="password"
                      name="password"
                      placeholder="**********"
                      suffix={
                        <Img
                          src="images/img_eye.svg"
                          className="ml-[35px] mr-[0] sm:ml-[18px] md:ml-[24px] my-[auto]"
                          alt="eye"
                        />
                      }
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineGray301"
                    ></Input>
                  </Row>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:mt-[12px] md:mt-[16px] mt-[24px] sm:p-[2px] md:p-[3px] p-[5px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group636.svg')",
                    }}
                  >
                    <Text
                      className="font-semibold mt-[1px] text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Simpan Perubahan
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Row>
            <footer className="bg-gray_50 font-poppins rounded-radius4 w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1170px] ml-[auto] mr-[auto] sm:mx-[0] mx-[auto] sm:my-[48px] md:my-[62px] my-[91px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[27%] max-w-[100%]">
                        <Img
                          src="images/img_sibenalogoapp.png"
                          className="cursor-pointer max-w-[100%]"
                          alt="SiBenaLogoApp One"
                        />
                      </li>
                      <li className="w-[auto] mt-[6px] sm:mt-[3px] md:mt-[4px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-bluegray_700"
                          rel="noreferrer"
                        >
                          SiBena merupakan aplikasi sistem informasi yang
                          menyediakan pengumuman, berita, dan informasi di
                          darerah Bengkong Asrama
                        </a>
                      </li>
                      <li className="w-[49%] mt-[45px] sm:mt-[23px] sm:w-[100%] md:mt-[30px] max-w-[100%]">
                        <Img
                          src="images/img_social.svg"
                          className="cursor-pointer max-w-[100%]"
                          alt="Social"
                        />
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[198px] ml-[288px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                    <Text
                      className="font-semibold text-blue_A701 tracking-ls11 uppercase w-[auto]"
                      variant="body6"
                    >
                      Perusahaan
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_700 w-[100%]"
                      variant="body5"
                    >
                      Tentang Kami <br />
                      <br />
                      Fitur <br />
                      <br />
                      Karir{" "}
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[22px] ml-[32px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                    <Text
                      className="font-semibold text-blue_A701 tracking-ls11 uppercase w-[auto]"
                      variant="body6"
                    >
                      Bantuan
                    </Text>
                    <Text
                      className="common-pointer font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_700 w-[100%]"
                      variant="body5"
                      onClick={handleNavigate31}
                    >
                      <span className="text-bluegray_700 text-[14px] font-poppins">
                        Pusat Bantuan
                        <br />
                        <br />
                      </span>
                      <span className="text-bluegray_700 text-[14px] font-poppins">
                        Terms & Conditions
                        <br />
                      </span>
                      <span className="text-bluegray_700 text-[14px] font-poppins">
                        <br />
                      </span>
                      <span className="text-bluegray_700 text-[14px] font-poppins">
                        Privacy Policy
                      </span>
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start md:ml-[22px] ml-[32px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                    <Text
                      className="font-semibold text-blue_A701 tracking-ls11 uppercase w-[auto]"
                      variant="body6"
                    >
                      Resources
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_700 w-[100%]"
                      variant="body5"
                    >
                      Berita
                      <br />
                      <br />
                      Peta
                      <br />
                      <br />
                      How to - Blog
                    </Text>
                  </Column>
                </Row>
                <Column className="flex flex-col items-center justify-start sm:mt-[32px] md:mt-[41px] mt-[61px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_600 w-[auto]"
                    variant="body5"
                  >
                    © Copyright 2022, All Rights Reserved by SiBena
                  </Text>
                  <Line className="bg-gray-300 h-[1px] w-[100%]" />
                </Column>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ProfileWebPage;

import React from "react";

import { Column, Text, Row, Input, CheckBox } from "components";
import { useNavigate } from "react-router-dom";

const RegisterWebPage = () => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/mainweb");
  }
  function handleNavigate20() {
    navigate("/loginpage");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[127px] sm:p-[15px] md:p-[87px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[768px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[15px] md:px-[211px] px-[308px] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
              <Text
                className="text-gray_902 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h6"
                variant="h6"
              >
                Daftar
              </Text>
            </Column>
            <Text
              className="font-normal sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-bluegray_501 w-[auto]"
              variant="body2"
            >
              Selamat Datang
            </Text>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start max-w-[480px] md:mb-[11px] mb-[16px] sm:mb-[8px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pt-[2px] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    variant="body5"
                  >
                    First name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_501 text-bluegray_501 w-[100%]"
                    wrapClassName="md:mt-[6px] mt-[9px] sm:mt-[4px] w-[100%]"
                    name="Input"
                    placeholder="Raden"
                  ></Input>
                </Column>
                <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    variant="body5"
                  >
                    Last name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_501 text-bluegray_501 w-[100%]"
                    wrapClassName="md:mt-[6px] mt-[9px] sm:mt-[4px] w-[100%]"
                    name="Input One"
                    placeholder="Mas"
                  ></Input>
                </Column>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  variant="body5"
                >
                  Email
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_501 text-bluegray_501 w-[100%]"
                  wrapClassName="md:mt-[6px] mt-[9px] sm:mt-[4px] w-[100%]"
                  type="number"
                  name="Input Two"
                  placeholder="081234567890"
                ></Input>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  variant="body5"
                >
                  Kata Sandi
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_501 text-bluegray_501 w-[100%]"
                  wrapClassName="md:mt-[6px] mt-[9px] sm:mt-[4px] w-[100%]"
                  type="password"
                  name="password"
                  placeholder="**********"
                  size="md"
                ></Input>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  variant="body5"
                >
                  Konfirmasi Kata Sandi
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_501 text-bluegray_501 w-[100%]"
                  wrapClassName="md:mt-[6px] mt-[9px] sm:mt-[4px] w-[100%]"
                  type="password"
                  name="password One"
                  placeholder="**********"
                  size="md"
                ></Input>
              </Column>
              <CheckBox
                className="font-medium sm:mt-[12px] md:mt-[16px] mt-[24px] pl-[12px] sm:pl-[6px] md:pl-[8px] sm:pr-[15px] md:pr-[24px] pr-[35px] text-[16px] text-bluegray_800 w-[100%]"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                name="Text"
                label="You agree to our friendly privacy policy."
              ></CheckBox>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
              <Text
                className="common-pointer bg-indigo_A700 border border-indigo_A700 border-solid font-medium sm:px-[15px] md:px-[24px] px-[35px] md:py-[10px] py-[15px] sm:py-[7px] rounded-radius8 text-shadow-ts text-white_A700 w-[480px]"
                variant="body4"
                onClick={handleNavigate19}
              >
                Daftar
              </Text>
              <Text
                className="common-pointer border-2 border-indigo_A700 border-solid font-medium md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[15px] md:px-[24px] px-[35px] md:py-[10px] py-[15px] sm:py-[7px] rounded-radius8 text-indigo_A700 text-shadow-ts w-[auto]"
                variant="body4"
                onClick={handleNavigate20}
              >
                Masuk
              </Text>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default RegisterWebPage;

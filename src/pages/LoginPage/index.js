import React from "react";

import { Column, Text, Input, CheckBox, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/mainweb");
  }
  function handleNavigate13() {
    navigate("/registerweb");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[127px] sm:p-[15px] md:p-[87px] w-[100%]">
        <Column className="flex flex-col items-center justify-start max-w-[768px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:px-[15px] md:px-[185px] px-[269px] w-[100%]">
            <Column className="flex flex-col font-darkergrotesque items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
              <Text
                className="text-gray_902 tracking-ls096 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Masuk
              </Text>
            </Column>
            <Text
              className="font-normal font-opensans sm:mt-[14px] md:mt-[18px] mt-[27px] not-italic text-bluegray_501 w-[auto]"
              variant="body2"
            >
              Selamat Datang Kembali
            </Text>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start max-w-[568px] sm:mb-[112px] md:mb-[145px] mb-[212px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Column className="flex flex-col items-center justify-start pt-[4px] w-[100%]">
              <Column className="flex flex-col font-opensans justify-start w-[100%]">
                <Text
                  className="font-semibold text-bluegray_800 w-[auto]"
                  variant="body5"
                >
                  Nomor Handphone
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_501 text-bluegray_501 w-[100%]"
                  wrapClassName="md:mt-[4px] mt-[6px] sm:mt-[3px] w-[100%]"
                  type="number"
                  name="Input"
                  placeholder="081234567890"
                ></Input>
              </Column>
              <Column className="flex flex-col font-opensans justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                <Text
                  className="font-semibold text-bluegray_800 w-[auto]"
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
              <CheckBox
                className="font-inter font-medium sm:mt-[12px] md:mt-[16px] mt-[24px] pl-[12px] sm:pl-[6px] md:pl-[8px] sm:pr-[15px] md:pr-[24px] pr-[35px] text-[16px] text-bluegray_800 w-[100%]"
                inputClassName="h-[20px] mr-[5px] w-[20px]"
                name="Text"
                label="Ingat Saya"
              ></CheckBox>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
              <Button
                className="common-pointer cursor-pointer font-medium text-[16px] text-center text-white_A700 w-[100%]"
                onClick={handleNavigate12}
                size="lg"
                variant="OutlineIndigoA700"
              >
                Masuk
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium md:mt-[11px] mt-[16px] sm:mt-[8px] text-[16px] text-center text-indigo_A700 w-[100%]"
                onClick={handleNavigate13}
                size="lg"
                variant="OutlineIndigoA700_1"
              >
                Daftar
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LoginPagePage;

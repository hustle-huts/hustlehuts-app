import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SignUpHeader from "@/components/users/headers/SignUpHeader";
import SignUpForm from "@/components/users/SignUpForm";
import SignUpSuccess from "@/components/users/SignUpSuccess";
import SignUpTelegramForm from "@/components/users/SignUpTelegramForm";
import { SignUpStep } from "@/components/users/utils/constants";
import { signUpFormSchema } from "@/components/users/utils/validation-schema";
import { IRegisterRequest } from "@/models/user";
import { registerApi } from "@/services/auth.service";
import styles from "@/styles/SignUp.module.css";

const SignUpPage = () => {
  const router = useRouter();
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(signUpFormSchema),
    shouldUnregister: false,
  });
  const { setValue, getValues } = methods;
  const [signUpStep, setSignUpStep] = useState<SignUpStep>(SignUpStep.FORM);

  const onSubmit = async () => {
    const registerDetails = getValues() as IRegisterRequest;
    try {
      await registerApi(registerDetails);
      setSignUpStep(SignUpStep.SUCCESS);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const { email } = router.query;
    if (email) {
      setValue("email", email);
    }
  }, []);

  if (signUpStep === SignUpStep.SUCCESS) {
    return <SignUpSuccess />;
  }

  return (
    <Box
      className={classNames(styles.container, "app-max-width")}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <SignUpHeader />
      <FormProvider {...methods}>
        <div className={styles.form}>
          {signUpStep === SignUpStep.TELEGRAM ? (
            <SignUpTelegramForm onContinue={() => onSubmit()} />
          ) : (
            <SignUpForm
              onContinue={() => {
                console.log(getValues());
                setSignUpStep(SignUpStep.TELEGRAM);
              }}
            />
          )}
        </div>
      </FormProvider>
    </Box>
  );
};

export default SignUpPage;

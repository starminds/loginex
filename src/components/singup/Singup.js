import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://blog.kakaocdn.net/dn/bfH11r/btrepweNoMX/dl1sEP5PGiNtw9c1mRIhmk/img.png)
    no-repeat center/cover;
`;
const WrapBox_2 = styled.div`
  width: 300px;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 186px;
  right: 300px;
  background: rgb(22, 16, 45);
  background: linear-gradient(
    172deg,
    rgba(22, 16, 45, 1) 53%,
    rgba(58, 44, 37, 1) 53%
  );
`;
const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
  form {
    font-size: 30px;
    font-weight: 300;
  }
  input {
    width: 100%;
    margin-top: 10px;
    border: 1px solid #f4e185;
    font-size: 20px;
    border: none;
    background: none;
  }
`;
const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 500;
  color: #f4e185;
`;
const Con = styled.div`
  height: 1px;
  border: 1px solid #faffaf;
  margin-bottom: 12px;
  border-radius: 45px;
`;
const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 900;
  color: #f4e185;
`;
const Button = styled.div`
  width: 400px;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: #1d1d1d;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;
const userDB = {
  dbusername: "test",
  dbpw: "a1231233",
};

export const Singup = () => {
  const navigate = useNavigate;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { username, password } = getValues();
    const { usermail, empassword } = getValues();
    const { dbusername, dbpw } = userDB;

    if (username !== dbusername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }
    if (usermail !== dbusername) {
      setError("usermailResult", { message: "이메일이 올바르지않습니다." });
    }

    if (password !== dbpw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다" });
    }

    if (empassword !== dbpw) {
      setError("empasswordResult", { message: "비밀번호가 올바르지않습니다." });
    }

    if (username === dbusername && password === dbpw) {
      navigate("/");
    }
    // console.log("버튼눌렀음");
  };

  console.log(errors);

  return (
    <Wrap>
      <Img>
        <WrapBox_2>
          <LoginWrap>
            <Title>회 원 가 입</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("username", {
                  required: "아이디는 필수 입니다.",
                  minLength: {
                    value: 4,
                    message: "아이디는 4자리 이상 작성해 주세요",
                  },
                })}
                type="text"
                placeholder="아이디를 입력 해 주세여"
              />
              <Con></Con>
              {errors?.username?.message && (
                <ErrorMessage>{errors?.username?.message}</ErrorMessage>
              )}
              {errors?.usernameResult?.message && (
                <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
              )}
              <input
                {...register("usermail", {
                  required: "이메일은 필수 입니다.",
                  minLength: {
                    value: 10,
                    message: "이메일은 10자리 이상 작성해 주세요",
                  },
                })}
                type="text"
                placeholder="이메일을 입력 해 주세여"
              />
              <Con></Con>
              {errors?.usermail?.message && (
                <ErrorMessage>{errors?.usermail?.message}</ErrorMessage>
              )}
              {errors?.usermailResult?.message && (
                <ErrorMessage>{errors?.usermailResult?.message}</ErrorMessage>
              )}

              <input
                {...register("password", {
                  required: "비밀번호는 필수 입니다.",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 8자리 이상 작성해주세요",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
                    message:
                      "비밀번호는 8자리이상 문자,숫자조합으로 작성하셔야 됩니다 ",
                  },
                })}
                type="password"
                placeholder="비밀번호 를 입력해주세요"
              />
              <Con></Con>
              {errors?.password?.message && (
                <ErrorMessage>{errors?.password?.message}</ErrorMessage>
              )}
              {errors?.passwordResult?.message && (
                <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
              )}
              <input
                {...register("empassword", {
                  required: "비밀번호가 맞지않습니다.",
                  minLength: {
                    value: 8,
                    message: "비밀번호를 다시입력해주세요.",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
                    message:
                      "비밀번호는 8자리이상 문자,숫자조합으로 작성하셔야 됩니다 ",
                  },
                })}
                type="empassword"
                placeholder="비밀번호를 다시 입력해주세요."
              />
              <Con></Con>
              {errors?.empassword?.message && (
                <ErrorMessage>{errors?.empassword?.message}</ErrorMessage>
              )}
              {errors?.passwordResult?.message && (
                <ErrorMessage>{errors?.empasswordResult?.message}</ErrorMessage>
              )}
              <Button
                opacity={isValid ? 1 : 0.8}
                cursor={isValid ? "pointer" : "auto"}
              >
                로그인
              </Button>
            </form>
          </LoginWrap>
        </WrapBox_2>
      </Img>
    </Wrap>
  );
};

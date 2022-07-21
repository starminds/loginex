import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const userDB = {
  dbusername: "test",
  dbpw: "a1231233",
};

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://blog.kakaocdn.net/dn/dMASpn/btrek9j0xuw/5jdE1aXzcfyazDrv26cRSk/img.png)
    no-repeat center/cover;
`;
const WrapBox_2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
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
  padding: 60px 80px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      all: unset;
      border: 1px solid #dbdbdb;
      padding: 10px;
      border: none;
    }
  }
`;

const Con = styled.div`
  height: 2px;
  border: 2px solid #1d1d1d;
  margin-bottom: 15px;
  border-radius: 50%;
`;

const ErrorMessage = styled.span`
  font-weight: 900;
  color: crimson;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-style: italic;
  margin-bottom: 30px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: #1d1d1d;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;

const Btcon = styled.div`
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Signup = styled.div`
  margin-right: 10px;
`;
const Find = styled.div`
  margin-right: 10px;
`;
const Forgot = styled.div`
  margin-right: 10px;
`;

const Sing = styled.div`
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;
const Idbox = styled.div`
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;
const Password = styled.div`
  p {
    font-size: 18px;
    font-weight: 300;
  }
`;

export const Login = () => {
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
    const { dbusername, dbpw } = userDB;

    if (username !== dbusername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }

    if (password !== dbpw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다" });
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
            <Title>코 딩 샵</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("username", {
                  required: "아이디는 필수 입니다.",
                  minLength: {
                    value: 3,
                    message: "아이디는 3자리 이상 작성해 주세요",
                  },
                })}
                type="text"
                placeholder="이메일이나 아이디를 입력 해 주세여"
              />
              <Con></Con>
              {errors?.username?.message && (
                <ErrorMessage>{errors?.username?.message}</ErrorMessage>
              )}
              {errors?.usernameResult?.message && (
                <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
              )}

              <input
                {...register("password", {
                  required: "패스워드는 필수 입니다.",
                  minLength: {
                    value: 8,
                    message: "패스워드는 8자리 이상 작성해주세요",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
                    message:
                      "패스워드는 8자리이상 문자,숫자조합으로 작성하셔야 됩니다 ",
                  },
                })}
                type="password"
                placeholder="패스워드"
              />
              <Con></Con>
              {errors?.password?.message && (
                <ErrorMessage>{errors?.password?.message}</ErrorMessage>
              )}
              {errors?.passwordResult?.message && (
                <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
              )}
              <Button
                opacity={isValid ? 1 : 0.4}
                cursor={isValid ? "pointer" : "auto"}
              >
                로그인
              </Button>
              <Btcon>
                <Signup>
                  <Link to={"/Singup"}>
                    <Sing>
                      <p>회원가입</p>
                    </Sing>
                  </Link>
                </Signup>
                <Find>
                  <Link to={"/FindId"}>
                    <Idbox>
                      <p>아이디 찾기</p>
                    </Idbox>
                  </Link>
                </Find>
                <Forgot>
                  <Link to={"/Forgot"}>
                    <Password>
                      <p>비밀번호 찾기</p>
                    </Password>
                  </Link>
                </Forgot>
              </Btcon>
            </form>
          </LoginWrap>
        </WrapBox_2>
      </Img>
    </Wrap>
  );
};

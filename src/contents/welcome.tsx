import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Img,
  Preview,
  Text,
} from '@react-email/components';

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

export const KoalaWelcomeEmail = ({
  userFirstname,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      업무에 집중하는 {userFirstname}님을 위해서 작은 뉴스레터를 준비했어요!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://fitzza.xyz/_static/icon-pizza.png"
          width="64"
          height="64"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          환영해요! <b>{userFirstname}님 👋</b>
        </Text>
        <Text style={paragraph}>
          업무에 집중하는 <b>{userFirstname}</b>님을 위해서 작은 뉴스레터를
          준비했어요!
        </Text>
        <Text style={paragraph}>
          핏짜는 개발, 스타트업 그리고 여러가지 IT 관련 뉴스를
          <br />
          매주 월요일 오전 10시에 보내고 있어요.
        </Text>
        <Text style={paragraph}>
          오전 10시에 발송하는 이유는 업무 시작 전에 뉴스레터를 읽고 시작하면
          <br />
          좋을 듯 싶어서 오전 10시에 전송해요!
        </Text>
        <Text style={paragraph}>
          더욱 더 {userFirstname}님을 위해 노력하는 핏짜가 되겠습니다! 🙇‍♂️
        </Text>
        <Text style={paragraph}>
          뉴스레터와 새로운 기능을 준비하고 있으니 기대해주세요!
          <br />곧 다시 뵐게요! 👋
        </Text>
        <Text style={paragraph}>팀 핏짜 드림</Text>
        <Hr style={hr} />
        <Text style={footer}>
          업무에 집중하는 당신을 위한 IT 뉴스레터, 핏짜
        </Text>
      </Container>
    </Body>
  </Html>
);

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  marginBottom: '24px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};

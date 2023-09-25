import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

export const FitzzaOnboarding = ({ userFirstname }: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      업무에 집중하는 {userFirstname}님, 핏짜에서 감사 인사 드립니다 🙇
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
        <Text style={heading}>안녕하세요!</Text>
        <Text style={paragraph}>
          <b>{userFirstname}님</b>, 핏짜를 구독해주셔서 감사합니다! 🙇‍♂️
        </Text>
        <Text style={paragraph}>
          핏짜 콘텐츠를 맡고 있는 <b>Aaron</b> 입니다.
        </Text>
        <Text style={paragraph}>
          콘텐츠 적는 걸 좋아해서 시작했던 뉴스레터가
          <br />
          09월 25일 기준 <b>390명</b>의 구독자를 가지게 되었어요.
        </Text>
        <Text style={paragraph}>
          여러분 관심에 감사드리며, 더욱 더 좋은 콘텐츠를 제공하기 위해
          노력하겠습니다
        </Text>
        <Text style={paragraph}>
          더욱 많은 분들이 보실 수 있도록 핏짜를 공유해주세요 🍕
        </Text>
        <Text style={paragraph}>
          그리고 많은 분들께서 질문 주신 부분을 답변드리고자 해요.
        </Text>
        <Hr style={hr} />
        <Text style={sectionText}>Q. 언제부터 뉴스레터를 받을 수 있나요?</Text>
        <Text style={paragraph}>
          <b>A. 핏짜는 10월 02일부터 매주 월요일 오전 10시에 발송됩니다.</b>
          <br />
          매주 월요일 오전 10시에 발송되지만, 추후 서비스 기능을 통해 발송
          시간을 정할 수 있어요.
        </Text>
        <Hr style={hr} />
        <Text style={sectionText}>Q. 다른 뉴스레터와 차별점이 무엇인가요?</Text>
        <Text style={paragraph}>
          <b>A. 타 뉴스레터 대비 더 많은 기능이 있습니다.</b>
          <br />
          핏짜는 타 뉴스레터와 달리 콘텐츠에 대한 분석, 유저와 토론 등이 있어요.
          <br />이 과정에서 모두가 더 깊게 기술을 이해할 수 있다고 생각해요.
        </Text>
        <Hr style={hr} />
        <Text style={sectionText}>Q. 유료로 전환 가능성이 존재하나요?</Text>
        <Text style={paragraph}>
          <b>A. 유료 전환은 앞으로도 없습니다.</b>
          <br />
          기술은 모두에게 공개되어야 한다고 생각해요.
          <br />
          핏짜는 누구나 무료로 이용할 수 있도록 앞으로도 유료화 계획이 전혀
          없습니다.
        </Text>
        <Hr style={hr} />
        <Text style={paragraph}>
          더 궁금하신 부분은 언제든지 홈페이지 하단에 표시된 이메일로
          문의해주세요.
          <br />
          추석 명절 잘 보내시고, 더 좋은 콘텐츠로 찾아뵙겠습니다.
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

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const sectionText = {
  fontSize: '18px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#181818',
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

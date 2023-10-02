/* eslint-disable react/no-children-prop */
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Link,
  Text,
} from '@react-email/components';

interface KoalaWelcomeEmailProps {
  userFirstname: string;
}

export const FitzzaNews = ({ userFirstname }: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      안녕하세요! 주문하신 첫번째 뉴스레터 전달드려요. 맛있게 즐겨주세요 🍕
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
        <Text style={heading}>2023년 10월 02일 뉴스레터</Text>
        <Text style={paragraph}>
          <b>{userFirstname}님</b>, 오래 기다리셨습니다. 핏짜에서 첫번째
          뉴스레터가 배달되었어요 📦
        </Text>
        <Text style={paragraph}>
          발송하는 과정에서 문제가 있어 1시간 30분 정도 지체되었어요.
          <br />
          다음 뉴스레터부터는 정상적으로 오전 10시에 발송될 예정이에요! 😘
        </Text>
        <Text style={paragraph}>
          추가적으로 뉴스레터 내 채용공고 및 이벤트 등을 추가하고 싶으시다면{' '}
          <Link href="mailto:support@aybridge.co">메일</Link>로 문의해주세요.
          <br />
          개발자 생태계에 도움이 되는 이벤트 및 채용이라면 뉴스레터 내에서
          소개해드릴 수 있어요.
        </Text>
        <Text style={paragraph}>
          이번 뉴스레터는 오픈소스 프로젝트를 소개하는 내용으로 구성되어
          있습니다.
        </Text>
        <Text style={paragraph}>
          다음 뉴스레터는 10월 09일 오전 10시에 발송될 예정이에요.
        </Text>
        <Hr style={hr} />
        <Text style={sectionText}>Replicate 기반 슬랙 이모지 생성 도구</Text>
        <Text style={paragraph}>
          <b>Replicate</b>는 클라우드 환경에서{' '}
          <b>
            자신만의 머신러닝 모델을 구동할 수 있고, API 형태로 사용이 가능한
          </b>{' '}
          플랫폼입니다. 아래와 같은 파이썬 코드로 형태로 간단하게 머신러닝
          모델을 구동할 수 있습니다. 현재는 7개 환경에서 구동할 수 있으며,{' '}
          <Link href="https://replicate.com/docs">링크</Link>에서 확인하실 수
          있습니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/python-replicate.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          돌아와서 Replicate 기반으로 슬랙 이모지를 만들 수 있는 제품이
          런칭되었습니다.{' '}
          <Link href="https://github.com/cbh123/emoji">오픈소스</Link>로
          공개되었고, 실제 웹 환경에서도{' '}
          <Link href="https://emoji.fly.dev/">구동</Link>할 수 있습니다.
        </Text>
        <Text style={paragraph}>
          누구나 한 번 정도는 팀과 그리고 커뮤니티에서 슬랙을 통해 이모지를
          사용하고, 추가한 경험이 있으실 겁니다. 이 과정에서 직접 디자인을 해서
          추가하거나, <Link href="https://slackmojis.com/">슬랙이모지</Link>{' '}
          페이지를 이용하셨을 겁니다.
        </Text>
        <Text style={paragraph}>
          해당 오픈소스는 직접 디자인 하는 시간을{' '}
          <b>생성형 인공지능에게 맡겨서 시간을 단축</b>했습니다. 결과물도
          프롬프트만 잘 입력한다면 수준 높은 결과물을 받아볼 수 있는 것
          같습니다!
        </Text>
        <Text style={paragraph}>
          추가적으로 해당 오픈소스는 함수형 프로그래밍 언어{' '}
          <Link href="https://elixir-lang.org/">엘릭서</Link>와 함께{' '}
          <Link href="https://phoenixframework.org/">피닉스</Link> 프레임워크가
          사용되었습니다. 처음 해당 오픈소스를 보았을 때는 PQS, 아파치에서
          출시한 쿼리 서버를 사용한 것으로 이해하였고 해당 서비스를 만드는데
          있어서 SQL Layer 모델이 필요한가 고민했으나,{' '}
          <b>엘릭서 기반에 피닉스 프레임워크</b>였습니다.
        </Text>
        <Text style={paragraph}>
          Elixir는 카카오엔터프라이즈 및 한국축산데이터 등에서 서버 개발 언어로
          채택되었습니다. 카카오엔터프라이즈에서 카카오워크를 개발하는 과정에서
          사용되는 엘릭서 경험은{' '}
          <Link href="https://youtu.be/NotXpRovDoA?si=3rwZKCcmQyADy2bo">
            유튜브
          </Link>
          에서 확인하실 수 있습니다. 하지만, Elixir는 2023년 스택오버플로우
          서베이 통계에서 2~2.5% 정도로 꽤 낮은 통계치를 보유하고 있습니다.
          <b>
            낮은 수치에도 불구하고 잘 성장하고 있는 언어 중에 하나라고 보고
            있습니다.
          </b>{' '}
          (2022년 기준은 2-3등을 차지할 정도로 꽤 높은 통계치를 가지고 있었지만,
          2023년 대폭 감소하였습니다.)
        </Text>
        <Text style={paragraph}>
          아래는 간단한 <b>Elixir</b> 코드입니다.
        </Text>
        <Text style={paragraph}>
          복권 번호를 생성하는 코드로서 파이프 연산자
          <strong style={{ background: '#EAEAEA' }}>{`(|>)`}</strong>를 통해서
          읽기 쉽게 개발할 수 있는 매력점들이 포함되어 있습니다. 기존에 복권
          번호를 생성하는 코드를 타 언어로 구성한다면 중첩되는 코드가 늘어날
          수도 있지만,{' '}
          <b>
            Elixir는 파이프 연산자를 통해서 가독성과 실행 순서를 확보하였습니다.
          </b>
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/elixir-example.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          이와 같은 매력점들은 타입스크립트에도 존재합니다. 타입스크립트 패턴
          매칭 라이브러리로서{' '}
          <b>
            가독성과 타입 안정성을 동시에 잡은{' '}
            <Link href="https://github.com/gvergnaud/ts-pattern">
              라이브러리
            </Link>
            가 있습니다.
          </b>
          해당 라이브러리는 아래와 같은 예시로 단 번에 도입을 결정할 수
          있습니다.
        </Text>
        <Img
          src="https://user-images.githubusercontent.com/9265418/231688650-7cd957a9-8edc-4db8-a5fe-61e1c2179d91.gif"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          기존 웹 환경에서는 상태에 따른 UI 상태를 위와 같이 관리하였습니다.
          기본적으로 우리는 로딩/성공/실패 3가지를 기본적인 상태로 나눌 수
          있지만, <b>이것보다 더 많은 상태가 있다면</b> 어떨까요?
        </Text>
        <Text style={paragraph}>
          인터넷 은행을 만든다고 가정 후 송금 과정에서 발생될 예외 사항을
          고민해봅시다.
        </Text>
        <Text style={paragraph}>
          - 송금 중 - 송금 성공 - 송금 실패 - 잔액 부족 - 송금액 초과 - 은행
          점검 - 서비스 오류
        </Text>
        <Text style={paragraph}>
          간단하게 생각해도 7개 정도 예외 사항이 존재합니다. 이 예외 사항을 모두
          인터페이스에 반영하면 어떨까요?{' '}
          <b>굉장히 난해하고 읽기 어려운 코드</b>가 나올 것입니다.
        </Text>
        <Text style={paragraph}>
          <b>Ts-Pattern</b> 라이브러리는 아래와 같은 방법으로 이 문제를 해결할
          수 있습니다.
        </Text>
        <Text style={paragraph}>
          해당 라이브러리를 도입하는 과정에서 한 가지 고민 포인트가 존재할 수도
          있습니다. 최근에 나온 라이브러리 중 Zero-Runtime 환경 타입 매칭
          라이브러리{' '}
          <Link href="https://github.com/aidenybai/pattycake">Pattycake</Link>도
          존재합니다. 위에 설명되었던 라이브러리에{' '}
          <b>
            속도 이슈를 적게는 36배, 많게는 66배 정도에 빠른 속도로 타입 매칭을
            제공
          </b>
          하고 있습니다.
        </Text>
        <Text style={paragraph}>
          현재는 모든 기능은 지원하진 않지만, 추후에는 <b>Ts-Pattern</b>에서
          제공되는 기능 모두를 제공할 계획을 가지고 있습니다.
        </Text>
        <Text style={sectionText}>고품질 이메일을 위한 이메일 작성 도구</Text>
        <Text style={paragraph}>
          고품질 이메일 작성을 위해서 만들어진 오픈소스{' '}
          <Link href="https://github.com/resendlabs/react-email">
            ReactEmail
          </Link>{' '}
          소개드립니다.
        </Text>
        <Text style={paragraph}>
          해당 오픈소스 소개 이전에 개발사인 <b>Resend</b>를 소개할 필요가 있는
          것 같습니다. <Link href="https://resend.com/">Resend</Link>는
          Y-Combinator에서 졸업한 스타트업으로서 개발자를 위한 이메일이라는
          슬로건으로 서비스를 만들어가고 있습니다.
        </Text>
        <Text style={paragraph}>
          발송되는 메일이 스팸으로 가지 않고 고객에게 정상적으로 도착할 수
          있도록 하고 만들고 있습니다. 현재는{' '}
          <b>
            큰 주제로는 10개 플랫폼을 지원하고 있고, 그 안에서 세부적으로는 28개
            이상 환경을 지원
          </b>
          하고 있습니다.
        </Text>
        <Text style={paragraph}>
          핏짜에서도 현재 Resend, ReactEmail으로 뉴스레터를 전송하고 있습니다.
        </Text>
        <Text style={paragraph}>
          Vercel Edge Functions 환경에서 실제로 구동한 결과 굉장히 좋은 경험을
          받았습니다.
        </Text>
        <Text style={paragraph}>
          돌아와서 ReactEmail은 Resend Labs에서 개발한 차세대 이메일 작성
          도구입니다.
        </Text>
        <Text style={paragraph}>
          웹 환경에서 라이브러리 및 프레임워크는 굉장히 많은 발전을 이루었지만,
          <b>이메일에 작성 부분에선 아직 속도를 내지 못 하고</b> 있습니다.
          그래서 나온 것이 <b>ReactEmail</b> 입니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/yarn-install.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>위와 같이 설치할 수 있습니다.</Text>
        <Text style={paragraph}>
          <b>GMail과 Outlook 에 대한 불일치도 처리해주고</b> 있습니다. 이에 따라
          각 이메일 클라이언트 간에 동일한 경험을 줄 수 있다는 장점이
          존재합니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/react-email.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          다음과 같은 예시 코드를 가지고 있습니다. 일반적으로 리액트에서
          컴포넌트를 불러서 사용하는 형태입니다. 해당 형태로 각 이메일
          클라이언트에게 전송할 수 있습니다.
        </Text>
        <Text style={sectionText}>
          자바스크립트 <strong style={{ background: '#EAEAEA' }}>in</strong>과{' '}
          <strong style={{ background: '#EAEAEA' }}>instanceof</strong> 개선
          제안
        </Text>
        <Text style={paragraph}>
          약 2주 전 자바스크립트 내{' '}
          <strong style={{ background: '#EAEAEA' }}>in</strong>과{' '}
          <strong style={{ background: '#EAEAEA' }}>instanceof</strong>에 대한
          개선을 요구하는
          <Link href="https://github.com/gorosgobe/proposal-negated-in-instanceof">
            제안
          </Link>
          이 올라왔습니다. 우리가 이것을 이해하기 위해서는{' '}
          <b>프로토타입과 프로토타입 체인</b>을 이해해야 합니다.
        </Text>
        <Text style={paragraph}>
          자바스크립트는 프로토타입 기반의 언어입니다. 예전 임성묵님께서
          작성해주신{' '}
          <Link href="https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42">
            자바스크립트는 왜 프로토타입을 선택했을까
          </Link>
          라는 글을 보면 더욱 더 철학적으로 이해할 수 있을 것입니다. 물론
          자바스크립트의 디자인 철학 등을 더욱 더 딥하기 위해서{' '}
          <Link href="https://www.youtube.com/watch?v=PSGEjv3Tqo0&t=300s">
            클래스는 ES6의 최대 실수다
          </Link>{' '}
          영상도 참고하면 좋을 것 같습니다.
        </Text>
        <Text style={paragraph}>
          - <b>프로토타입 객체는 무엇인가?</b>
          <br />
          다시 돌아와서 프로토타입 객체는 자바스크립트에서 꽤 중요한 역할을 하고
          있습니다. 자바스크립트에서 모든 객체는 자신의 부모 역할을 하는 최상위
          객체와 연결되어 있고, 이 부모 객체를 프로토타입 객체 또는
          프로토타입이라고도 칭할 수 있습니다.
        </Text>
        <Text style={paragraph}>
          - <b>프로토타입 체인은 무엇인가?</b>
          <br />
          프로토타입 체인은 특정 객체의 프로퍼티나 메소드 접근하였을때, 현재
          객체의 해당 프로퍼티가 존재하지 않는다면{' '}
          <strong style={{ background: '#EAEAEA' }}>__proto__</strong>가
          가리킴을 따라 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를
          차례로 검색하는 것을 우리는 프로토타입 체인이라고 할 수 있습니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/instanceof-1.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          결론적으로 위와 같은 코드를 작성했을 떄 프로토타입 체인이나 오브젝트를
          알 수 있습니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/instanceof-2.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          이를 표현식의 결과를 부정하려면 위와 같이 논리 NOT(!)를 사용하여서
          래핑할 수 있습니다. 다만, 이 방식으로 진행하였을 때 몇 가지 문제가
          발생하고 <b>이 문제가 해당 제안에 핵심</b>입니다.
        </Text>
        <Text style={paragraph}>
          <Link href="https://github.com/oven-sh/bun/issues/5800">
            Bun에서 발생한 `in` 연산자 관련 버그
          </Link>
          <br />
          <Link href="https://bugs.webkit.org/show_bug.cgi?id=261815">
            WebKit에서도 발생된 `in` 과 `instanceof` 관련 버그
          </Link>
        </Text>
        <Text style={paragraph}>
          깃헙 내 포함된 모든 저장소에서 빈번하게 발생되는 이슈라고 제안에서는
          언급되고 있습니다.
        </Text>
        <Text style={paragraph}>
          이러한 경우 타입스크립트 및 린트를 사용할 것을 <b>Bloomberg</b> 에서는
          권장하였지만, 인체공학적인 설계가 되지 않은{' '}
          <strong style={{ background: '#EAEAEA' }}>in</strong> 과{' '}
          <strong style={{ background: '#EAEAEA' }}>instanceof</strong> 는
          개선될 여지가 충분히 필요하다고 제안자는 설명하고 있습니다.
        </Text>
        <Text style={paragraph}>
          이것을 제외하고도 혼란, 가독성, DX 등 다양한 문제를 제기하고 있습니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/instanceof-3.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          제안자는 기존 형태를 위와 같이 변경할 것을 제안하고 있습니다. 이
          과정에서 추가적으로 그룹화하지 않아 발생되는 문제가 없어져 더욱 더
          안전하며, 그룹화가 필요하지 않기 때문에 가독성 측면에서 더욱 더 증가한
          것으로 제안자는 설명했습니다.
        </Text>
        <Text style={paragraph}>
          또한 타입스크립트 TC39에서도 올라온 제안 중에 하나인{' '}
          <Link href="https://github.com/tc39/proposal-pattern-matching#is-expression">
            패턴 매칭{' '}
          </Link>
          관련 제안에서{' '}
          <strong style={{ background: '#EAEAEA' }}>instanceof b is ~</strong>{' '}
          를 자바스크립트 내에서도 지원하기를 원하고 있습니다.
        </Text>
        <Text style={paragraph}>
          꽤 흥미로운 제안이라서 독자 여러분에게도 전달하고자 해당 제안을
          가져오게 되었습니다.
        </Text>
        <Text style={sectionText}>Deno 1.37 Jupyter용 커널 제공</Text>
        <Text style={paragraph}>
          <Link href="https://deno.com/blog/v1.37">Deno 1.37 업데이트</Link>
          에서는 Jupyter Notebook용{' '}
          <Link href="https://deno.com/blog/v1.37#jupyter-notebook-integration">
            커널
          </Link>
          을 제공함으로서 자바스크립트와 타입스크립트를 사용할 수 있게
          되었습니다. 기존에 Jupyter 환경에서 타입스크립트 사용하는 것이 굉장히
          불편하고 고통스러웠지만 Deno에서 커널을 제공함으로서 더욱 더 편하게
          사용할 수 있다는 장점이 생겼습니다.
        </Text>
        <Img
          src="https://fitzza.xyz/_static/assets/jupyter_notebook.png"
          width="600"
          alt="Fitzza"
          style={logo}
        />
        <Text style={paragraph}>
          Deno의 모든 API를 Jupyter에서 접근할 수 있으며, 흔히 설치하는 npm
          모듈도 접근할 수 있습니다. 데이터 시각화에 필요한 D3 라이브러리도
          가져와서 그래프를 시각화 할 수 있다는 것을 업데이트 노트에서 보여주고
          있습니다.
        </Text>
        <Text style={sectionText}>그 외 좋은 오픈소스 도구</Text>
        <Text style={paragraph}>
          <Link href="https://github.com/line/ts-remove-unused#ts-remove-unused">
            ts-remove-unused
          </Link>{' '}
          라인에서 출시한 사용되지 않는 타입스크립트 코드를 제거해주는 CLI 도구
        </Text>
        <Text style={paragraph}>
          <Link href="https://github.com/antfu/ni">ni</Link> 프로젝트에 맞는
          패키지 매니저로 설치해주는 CLI 도구
        </Text>
        <Text style={paragraph}>
          <Link href="https://github.com/total-typescript/ts-reset">
            ts-reset
          </Link>{' '}
          css-reset처럼 타입스크립트용 재설정 도구, 이에 대한 TS 메인테이너 반응
          →{' '}
          <Link href="https://youtu.be/_-RyV65J4kE?si=Fyr_nQ_s1wAh7HKy">
            링크
          </Link>
        </Text>
        <Text style={paragraph}>
          <Link href="https://github.com/intel/Wasmnizer-ts">Wasmnizer-ts</Link>{' '}
          인텔에서 나온 타입스크립트를 WasmGC로 컴파일 도와주는 툴체인
        </Text>
        <Text style={sectionText}>그 외 소식</Text>
        <Text style={paragraph}>
          <Link href="https://openai.com/blog/chatgpt-can-now-see-hear-and-speak">
            ChatGPT
          </Link>{' '}
          ChatGPT에서 눈과 입을 장착하였습니다.{' '}
          <Link href="https://x.com/rowancheung/status/1706303752532287622?s=46...">
            X(구 트위터)
          </Link>
          를 통해서 안장을 낮추는 데모를 볼 수 있습니다
        </Text>
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
  borderRadius: '16px',
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

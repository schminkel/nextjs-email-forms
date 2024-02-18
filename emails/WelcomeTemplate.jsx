import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Font } from "@react-email/font";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Tailwind, Head } from "@react-email/components";

export default function WelcomeEmail( { text = "text" } ) {
  return (
      <Tailwind>
        <Html>
          <Head>
            <Font
                fontFamily="Roboto"
                fallbackFontFamily="Verdana"
                webFont={ {
                  url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                  format: "woff2",
                } }
                fontWeight={ 400 }
                fontStyle="normal"
            />
          </Head>
          <Section className="bg-white">
            <Container className="mx-auto pt-5 pb-12 px-0 w-full sm:w-580">
              <Text className="text-2xl leading-snug font-bold text-gray-800">
                Hi there!
              </Text>
              <Text className="text-lg leading-relaxed text-gray-800">
                Welcome to E-Mails with Next.js!
              </Text>
              <Text className="text-lg leading-relaxed text-gray-800">
                { text }
              </Text>
            </Container>
          </Section>
        </Html>
      </Tailwind>
  );
}

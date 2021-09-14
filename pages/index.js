import { Heading, Page } from "@shopify/polaris";



const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
  </Page>
);

export async function getServerSideProps({req, res, params}) {

  return {
    props: {}, // will be passed to the page comsponent as props
  }
}

export default Index;

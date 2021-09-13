import { Heading, Page } from "@shopify/polaris";



const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
  </Page>
);

export async function getServerSideProps({req, params}) {
  const variantId = params.id;
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Index;

import { graphql, useStaticQuery } from "gatsby"

const useMainlogo = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulLogo(name: { eq: "white_text" }) {
        id
        name
        image {
          file {
            url
          }
        }
      }
    }
  `)
  return data.contentfulLogo
}

export default useMainlogo

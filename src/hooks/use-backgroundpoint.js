import { graphql, useStaticQuery } from "gatsby"

const useBackgroundpoint = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulHeros(title: { eq: "Point Bottom" }) {
        id
        title
        imageTitle {
          file {
            url
          }
        }
      }
    }
  `)
  return data.contentfulHeros
}

export default useBackgroundpoint

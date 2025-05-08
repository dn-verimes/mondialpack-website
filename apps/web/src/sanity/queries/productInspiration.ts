export const productInspirationQuery = `*[_type == "productInspiration"][0] {
  title,
  subtitle,
  mainText,
  products[] {
    image {
      asset-> {
        url
      }
    },
    name,
    claim,
    tags
  }
}` 
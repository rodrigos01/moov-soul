# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()

  add_assets()

  remove_all_styles()


  @import "sections/header.ts"
  @import "base.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}

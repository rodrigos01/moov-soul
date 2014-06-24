# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()

  add_assets()

  remove_all_styles()

  insert_mobile_meta_tags()


  @import "sections/header.ts"
  @import "base.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}

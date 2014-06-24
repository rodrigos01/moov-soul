$('./body') {
  remove("./div[@id='fundo']")
  $("./div[@id='topo']") {
    name("header")
    remove("./@id")
    remove("./@align")
    add_class("mw-header")

    insert_top("img", src: asset("images/logo.jpg"))

    remove("./script")
    $("./noscript") {
      name("nav")
      $("./a") {
        attribute("href") {
          value() {
            replace(/index\.php\?pagina\=([a-z]+)/, "$1.php")
          }
        }
        attribute("target", "conteudo")
      }
      wrap_text_children("span") {
        remove()
      }
    }
  }
}

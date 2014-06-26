$('./body') {
  remove("./div[@id='fundo']")
  $("./div[@id='topo']") {
    name("header")
    attribute("data-ur-set", "toggler")
    remove("./@id")
    remove("./@align")
    add_class("mw-header")

    insert_top("img", src: asset("images/logo.svg"), class: "logo")

    insert_top("a", href: "javascript:void(0)", data-ur-toggler-component: "button", id: "menu-button", class: "myicons button icon-menu")

    remove("./script")
    $("./noscript") {
      name("nav")
      attribute("data-ur-toggler-component", "content")
      $("./a") {
        attribute("href") {
          value() {
            replace(/index\.php\?pagina\=([a-z]+)/, "$1.php")
          }
        }
        attribute("target", "conteudo")
        attribute("data-ur-toggler-component", "button")
      }
      wrap_text_children("span") {
        remove()
      }
    }
  }
}

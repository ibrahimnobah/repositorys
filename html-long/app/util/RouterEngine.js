class RouterEngine {
    init() {
      var current=this;
      $(".toggle-naviation ").click(function(){
        current.onNavigationLinkClick(this);
  });
    }
    onNavigationLinkClick(current) {
      var path = $(current).data("naviation");
      this.navigate(path);
    }
      navigate(path) {
      this.hideAll()
      $("." + path).show();
    }
  
  hideAll(){
    $(".Screen").hide();
  }
  }
this.router = new RouterEngine();
